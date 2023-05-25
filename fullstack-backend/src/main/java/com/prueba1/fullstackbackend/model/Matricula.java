package com.prueba1.fullstackbackend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class Matricula {
    @Id
    @GeneratedValue
    private Long id;
    private String id_curso;
    private String fecha_matricula;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getId_curso() {
        return id_curso;
    }

    public void setId_curso(String id_curso) {
        this.id_curso = id_curso;
    }

    public String getFecha_matricula() {
        return fecha_matricula;
    }

    public void setFecha_matricula(String fecha_matricula) {
        this.fecha_matricula = fecha_matricula;
    }
}
