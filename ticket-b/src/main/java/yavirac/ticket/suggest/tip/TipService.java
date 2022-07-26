package yavirac.ticket.suggest.tip;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TipService {
    
    @Autowired
    TipRepository tipRepository;

    public List<Tip> findByName(String term){
        return tipRepository.findByNameLikeIgnoreCase(term+"%");
    }

    public Tip findById(long id){
        return tipRepository.findById(id).orElse(new Tip());
    }
}
