package yavirac.ticket.suggest.tip;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/tip")
@CrossOrigin({"*"})
public class TipController {
    
    @Autowired
    TipService tipService;

    @GetMapping("/findByName/{term}")
    public List<Tip> findByName(@PathVariable String term){
        return tipService.findByName(term);
    }

    @GetMapping("/findById/{id}")
    public Tip findById(@PathVariable long id){
        return tipService.findById(id);
    }
}
