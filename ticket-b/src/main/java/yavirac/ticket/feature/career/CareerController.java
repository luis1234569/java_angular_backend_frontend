package yavirac.ticket.feature.career;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;



@RestController
@RequestMapping("/api/career")
@CrossOrigin({"*"})
public class CareerController {

    @Autowired
    CareerService careerService;

    @GetMapping("/findAll")
    public List<Career> findAll(){
        return careerService.findAll();
    }
    
    @GetMapping(value="/findById/{id}")
    public Career findById(@PathVariable long id) {
        return careerService.findById(id);
    }
    

}
