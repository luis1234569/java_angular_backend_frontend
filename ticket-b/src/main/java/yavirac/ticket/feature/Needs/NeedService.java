package yavirac.ticket.feature.Needs;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class NeedService {

    @Autowired
    NeedRepository needRepository;

    public List<Need> findAll(){
        return needRepository.findAll();
    }

    public Need findById(long id) {
        return needRepository.findById(id).orElse(new Need());
    }
    
}
