package yavirac.ticket.feature.tkrespuesta;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TkrespuestaService {

    @Autowired
    TkrespuestaRepository tkrespuestaRepository;

    //CRUD 

    //CREATE

    public Tkrespuesta save(Tkrespuesta tkrespuesta){
        return tkrespuestaRepository.save(tkrespuesta);
    }

    //READ
    public Tkrespuesta findById(long id){
        return tkrespuestaRepository.findById(id).orElse(new Tkrespuesta());
    }

    //UPDATE
    public Tkrespuesta update(Tkrespuesta tkrespuesta){
        return tkrespuestaRepository.save(tkrespuesta);
    }

    //DELETE
    public void deleteById(long id){
    tkrespuestaRepository.deleteById(id);
    }
    
    public List<Tkrespuesta> findAll(){
        return tkrespuestaRepository.findAll();
    }

    public List<Tkrespuesta> findByComment(String term){
        return tkrespuestaRepository.findByCommentLikeIgnoreCase(term+"%");
    }

   
    
}
