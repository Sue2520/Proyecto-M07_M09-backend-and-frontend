package com.prueba1.fullstackbackend.repository;

import com.prueba1.fullstackbackend.model.Curso;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CursoRepository  extends JpaRepository<Curso,Long> {
}
