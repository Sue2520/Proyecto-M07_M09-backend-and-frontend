package com.prueba1.fullstackbackend.repository;

import com.prueba1.fullstackbackend.model.Matricula;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MatriculaRepository extends JpaRepository<Matricula,Long> {
}
