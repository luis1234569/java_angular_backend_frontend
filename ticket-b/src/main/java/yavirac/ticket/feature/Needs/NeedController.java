package yavirac.ticket.feature.Needs;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/need")
@CrossOrigin({"*"})
public class NeedController {

    @Autowired
    NeedService needService;

    @GetMapping("/findAll")
    public List<Need> findAll(){
        return needService.findAll();
    }

    @GetMapping(value="/findById/{id}")
    public Need findById(@PathVariable long id){
        return needService.findById(id);
    }
    
}
