package com.prueba1.fullstackbackend.controller;

import com.prueba1.fullstackbackend.exception.CursoNotFoundException;
import com.prueba1.fullstackbackend.model.Curso;
import com.prueba1.fullstackbackend.repository.CursoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class CursoController {
    @Autowired
    private CursoRepository CursoRepository;

    @PostMapping("/curso")
    Curso newCurso(@RequestBody Curso newCurso){
        return CursoRepository.save(newCurso);
    }

    @GetMapping("/cursos")
    List<Curso> getAllCursos(){
        return CursoRepository.findAll();
    }

    @GetMapping("/curso/{id_curso}")
    Curso getCursoById(@PathVariable Long id_curso){
        return CursoRepository.findById(id_curso)
                .orElseThrow(()->new CursoNotFoundException(id_curso));
    }

    @PutMapping("/curso/{id_curso}")
    Curso updateCurso(@RequestBody Curso newCurso, @PathVariable Long id_curso){
        return CursoRepository.findById(id_curso)
                .map(curso -> {
                    curso.setNombre_curso(newCurso.getNombre_curso());
                    curso.setFecha_inicio(newCurso.getFecha_inicio());
                    curso.setFecha_final(newCurso.getFecha_final());
                    curso.setDescripcion(newCurso.getDescripcion());
                    return CursoRepository.save(curso);
                }).orElseThrow(()-> new CursoNotFoundException(id_curso));
    }

    @DeleteMapping("/curso/{id_curso}")
    String deleteCurso(@PathVariable Long id_curso){
        if(!CursoRepository.existsById(id_curso)){
            throw new CursoNotFoundException(id_curso);
        }
        CursoRepository.deleteById(id_curso);
        return "Curso with id_curso "+id_curso+" has been deleted success.";
    }
}
