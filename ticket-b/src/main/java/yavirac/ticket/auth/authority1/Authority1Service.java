package yavirac.ticket.auth.authority1;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class Authority1Service {
    
    @Autowired
    Authority1Repository authority1Repository;

    public List<Authority1> findByName(String term){
        return authority1Repository.findByNameLikeIgnoreCase(term+"%");
    }

    public Authority1 findById(long id){
        return authority1Repository.findById(id).orElse(new Authority1());
    }
}