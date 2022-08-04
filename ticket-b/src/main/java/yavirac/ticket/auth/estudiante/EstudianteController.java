package yavirac.ticket.auth.estudiante;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/estudiante")
@CrossOrigin({"*"})
public class EstudianteController {
    @Autowired
    EstudianteService estudianteService;

    @GetMapping("/findByName/{term}")
    public List<Estudiante>findByName(@PathVariable String term){
        return estudianteService.findByName(term);
    }

    @GetMapping("/findById/{id}")
    public Estudiante findById (@PathVariable long id){
        return estudianteService.findById(id);
    }
}
