package br.com.clothes.dao;

import org.springframework.data.repository.CrudRepository;


import br.com.clothes.model.roupamodel;

public interface DAO extends CrudRepository <roupamodel, Integer>{
    
}
