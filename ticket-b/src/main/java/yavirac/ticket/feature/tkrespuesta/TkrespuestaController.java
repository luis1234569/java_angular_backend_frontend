package yavirac.ticket.feature.tkrespuesta;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/tkrespuesta")
@CrossOrigin({"*"})
public class TkrespuestaController {

    @Autowired
    TkrespuestaService tkrespuestaService;


    //CRUD

    //CREATE

    @PostMapping("/save")
    public Tkrespuesta save(@RequestBody Tkrespuesta tkrespuesta){
        return tkrespuestaService.save(tkrespuesta);
    }
    
    //READ

    @GetMapping("/{id}")
    public Tkrespuesta findById(@PathVariable long id){
        return tkrespuestaService.findById(id);
    }

    //UPDATE

    @PutMapping("/update")
    public Tkrespuesta update(@RequestBody Tkrespuesta tkrespuesta){
        return tkrespuestaService.save(tkrespuesta);
    }

    //DELETE

    @DeleteMapping("/deleteById/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable long id){
         tkrespuestaService.deleteById(id);
    }

    @GetMapping("/findAll")
    public List<Tkrespuesta> findAll(){
        return tkrespuestaService.findAll();
    }

    @GetMapping("/findByComment/{term}")
    public List<Tkrespuesta> findByComment(@PathVariable String term){
        return tkrespuestaService.findByComment(term);
    }
    
}
