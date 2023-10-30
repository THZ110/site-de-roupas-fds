package br.com.clothes.dao;

import org.springframework.data.repository.CrudRepository;

import br.com.clothes.model.RoupaModel;

public interface DAO extends CrudRepository <RoupaModel, Integer>{
    
}
