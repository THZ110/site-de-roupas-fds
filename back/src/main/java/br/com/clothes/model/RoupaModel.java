package br.com.clothes.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "roupas")
public class roupamodel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    
    @Lob
    
    @Column(name = "img", columnDefinition = "LONGBLOB")
    private byte[] img;
    
    private Double preco;
    private String nome;
    private String descricao;
    private String tipo;

}