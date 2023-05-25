package com.prueba1.fullstackbackend.exception;

public class CursoNotFoundException extends RuntimeException {
    public CursoNotFoundException(Long id){
        super("Could not found the curso with id "+ id);
    }
}
