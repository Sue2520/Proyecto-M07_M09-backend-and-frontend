package com.prueba1.fullstackbackend.controller;

import com.prueba1.fullstackbackend.exception.UserNotFoundException;
import com.prueba1.fullstackbackend.model.User;
import com.prueba1.fullstackbackend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URISyntaxException;
import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class UserController {


    @Autowired
    private UserRepository userRepository;

    @PostMapping("/user")
    User newUser(@RequestBody User newUser){
        return userRepository.save(newUser);
    }

    @GetMapping("/users")
    List<User> getAllUsers(){
        return userRepository.findAll();
    }

    @GetMapping("/user/{id}")
    User getUserById(@PathVariable Long id){
        return userRepository.findById(id)
                .orElseThrow(()->new UserNotFoundException(id));
    }

    @PutMapping("/user/{id}")
    User updateUser(@RequestBody User newUser, @PathVariable Long id){
        return userRepository.findById(id)
                .map(user -> {
                    user.setUsername(newUser.getUsername());
                    user.setName(newUser.getName());
                    user.setEmail(newUser.getEmail());
                    return userRepository.save(user);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    @PostMapping("/users/checkIfExists")
    ResponseEntity<List<User>> findUser(@RequestBody User user) throws URISyntaxException{
        String username = user.getUsername();
        String password = user.getPassword();
        List<User> users = userRepository.findByUsernameAndPassword(username, password);
        if(users.size() == 1) {
            return new ResponseEntity<>(userRepository.findByUsernameAndPassword(username, password), HttpStatus.OK);
        }
        return new ResponseEntity<>(userRepository.findByUsernameAndPassword(username, password), HttpStatus.OK);
    }


    @DeleteMapping("/user/{id}")
    String deleteUser(@PathVariable Long id){
        if(!userRepository.existsById(id)){
            throw new UserNotFoundException(id);
        }
        userRepository.deleteById(id);
        return "User with id "+id+" has been deleted success.";
    }

}
