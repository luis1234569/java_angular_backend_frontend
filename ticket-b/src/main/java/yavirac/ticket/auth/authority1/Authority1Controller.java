package yavirac.ticket.auth.authority1;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/authorize")
@CrossOrigin({"*"}) 
public class Authority1Controller {

    @Autowired
    Authority1Service authority1Service;

    @GetMapping("/findByName/{term}")
    public List<Authority1>findByName(@PathVariable String term){
        return authority1Service.findByName(term);
    }

    @GetMapping("/findById/{id}")
    public Authority1 findById(@PathVariable long id){
        return authority1Service.findById(id);
    }
}