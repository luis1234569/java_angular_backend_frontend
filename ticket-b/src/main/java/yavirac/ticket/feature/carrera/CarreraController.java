package yavirac.ticket.feature.carrera;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/carrera")
@CrossOrigin({"*"})
public class CarreraController {
    @Autowired
    CarreraService carreraService;
    
    @PostMapping("/save")
    public Carrera save(@RequestBody Carrera carrera){
        return carreraService.save (carrera);
    }

    @GetMapping("/{id}")
    public Carrera findById(@PathVariable long id ){
        return carreraService.findById(id);
    }
    @PutMapping("/update")
        public Carrera update (@RequestBody Carrera carrera ){
            return carreraService.save(carrera);
    }
    @DeleteMapping("/deleteById/{id}")
    public void deleteById(@PathVariable long id){
        carreraService.deleteById(id);
    }
    @GetMapping("/findAll")
    public List<Carrera> findAll(){
        return carreraService.findAll();
    }
    @GetMapping("/findByName/{term}")
    public List<Carrera> findByName(@PathVariable String term){
        return carreraService.findByName(term);
    }
}
