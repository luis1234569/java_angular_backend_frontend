package yavirac.ticket.feature.ticket;

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
@RequestMapping("/api/tsticket")
@CrossOrigin({"*"})
public class TsticketController {
    
    @Autowired
    TsticketService tsticketService;

    //CRUD

    //Create
    @PostMapping("/save")
    public Tsticket save(@RequestBody Tsticket tsticket){
        return tsticketService.save(tsticket);
    }

    //Read
    @GetMapping("/{id}")
    public Tsticket findById(@PathVariable long id){
        return tsticketService.findById(id);
    }

    //Update
    @PutMapping("/update")
    public Tsticket update(@RequestBody Tsticket tsticket)
    {
        return tsticketService.save(tsticket);
    }

    //Delete
    @DeleteMapping("/deleteById/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable long id){
        tsticketService.deleteById(id);
    }

}
