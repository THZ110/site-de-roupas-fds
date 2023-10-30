package br.com.clothes.control;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import br.com.clothes.model.RoupaModel;
import br.com.clothes.repository.RoupaRepositorio;

@RestController
@CrossOrigin("*")
public class roupaController {

    @Autowired
    RoupaRepositorio roupaRepositorio;

    @GetMapping
    public Iterable<RoupaModel> listar() {
        return roupaRepositorio.findAll();
    }

    public byte[] imagem (Integer id){
        Optional<RoupaModel> model = roupaRepositorio.findById(id);
        return model.orElse(null).getImg();
    }

    @PostMapping
    public ResponseEntity<RoupaModel> cadastrar(@RequestParam("descricao") String descricao,
            @RequestParam("img") MultipartFile img, @RequestParam("preco") Double preco, @RequestParam("nome") String nome, @RequestParam("tipo") String tipo) {

        try {
            RoupaModel roupaModel = new RoupaModel();
            roupaModel.setDescricao(descricao);
            roupaModel.setNome(nome);
            roupaModel.setPreco(preco);
            roupaModel.setTipo(tipo);
            byte[] imgRoupa = img.getBytes();
            roupaModel.setImg(imgRoupa);

            return new ResponseEntity<RoupaModel>(roupaRepositorio.save(roupaModel), HttpStatus.CREATED);
        } catch (Exception e) {
            return null;
        }
    }

    @PutMapping
    public ResponseEntity<RoupaModel> alterar(@RequestParam("img") MultipartFile img, @RequestParam("nome") String nome,
            @RequestParam("descricao") String descricao, @RequestParam("preco") Double preco,
            @RequestParam("tipo") String tipo, @RequestParam("id") Integer id) {
        try {
            byte[] imgBytes;
            RoupaModel model = new RoupaModel();
            if (img.isEmpty()) {
                imgBytes = imagem(id);
            } else {
                imgBytes = img.getBytes();
            }
            model.setNome(nome);
            model.setDescricao(descricao);
            model.setImg(imgBytes);
            model.setPreco(preco);
            model.setTipo(tipo);
            model.setId(id);
            return new ResponseEntity<RoupaModel>(roupaRepositorio.save(model), HttpStatus.CREATED);

        } catch (Exception e) {
            return null;
        }
    }

    @DeleteMapping("/{id}")
    public void excluir(@PathVariable Integer id){
        roupaRepositorio.deleteById(id);
    }

}
