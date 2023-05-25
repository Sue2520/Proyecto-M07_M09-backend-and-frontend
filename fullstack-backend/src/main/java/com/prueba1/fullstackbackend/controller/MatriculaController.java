package com.prueba1.fullstackbackend.controller;

import com.prueba1.fullstackbackend.exception.MatriculaNotFoundException;
import com.prueba1.fullstackbackend.model.Matricula;
import com.prueba1.fullstackbackend.repository.MatriculaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class MatriculaController {
    @Autowired
    private com.prueba1.fullstackbackend.repository.MatriculaRepository MatriculaRepository;

    @PostMapping("/matricula")
    Matricula newMatricula(@RequestBody Matricula newMatricula){
        return MatriculaRepository.save(newMatricula);
    }

    @GetMapping("/matriculas")
    List<Matricula> getAllMatriculas(){
        return MatriculaRepository.findAll();
    }

    @GetMapping("/matricula/{id}")
    Matricula getMatriculaById(@PathVariable Long id){
        return MatriculaRepository.findById(id)
                .orElseThrow(()->new MatriculaNotFoundException(id));
    }

    @PutMapping("/matricula/{id_curso}")
    Matricula updateMatricula(@RequestBody Matricula newMatricula, @PathVariable Long id){
        return MatriculaRepository.findById(id)
                .map(matricula -> {
                    matricula.setId(newMatricula.getId());
                    matricula.setFecha_matricula(newMatricula.getFecha_matricula());
                    matricula.setId_curso(newMatricula.getId_curso());
                    return MatriculaRepository.save(matricula);
                }).orElseThrow(()-> new MatriculaNotFoundException(id));
    }

    @DeleteMapping("/matricula/{id}")
    String deleteMatricula(@PathVariable Long id){
        if(!MatriculaRepository.existsById(id)){
            throw new MatriculaNotFoundException(id);
        }
        MatriculaRepository.deleteById(id);
        return "Matricula with id "+id+" has been deleted success.";
    }
}
