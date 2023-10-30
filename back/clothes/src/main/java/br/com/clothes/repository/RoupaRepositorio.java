package br.com.clothes.repository;

import org.springframework.data.repository.CrudRepository;

import br.com.clothes.model.RoupaModel;

public interface RoupaRepositorio extends CrudRepository <RoupaModel, Integer>{
    
}
