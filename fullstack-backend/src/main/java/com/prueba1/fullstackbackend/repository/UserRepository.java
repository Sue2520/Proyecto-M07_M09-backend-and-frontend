package com.prueba1.fullstackbackend.repository;

import com.prueba1.fullstackbackend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UserRepository extends JpaRepository<User,Long> {
    List<User> findByUsernameAndPassword(String username, String password);
}
