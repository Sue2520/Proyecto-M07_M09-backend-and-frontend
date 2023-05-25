package com.prueba1.fullstackbackend.exception;

public class MatriculaNotFoundException extends RuntimeException{
    public MatriculaNotFoundException(Long id){
        super("Could not found the matricula with id "+ id);
    }
}
