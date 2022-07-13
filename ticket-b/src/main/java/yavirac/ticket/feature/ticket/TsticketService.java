package yavirac.ticket.feature.ticket;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TsticketService {

    @Autowired
    TsticketRepository tsticketRepository;

    //CRUD = Create, Read, Update, Delete

    public Tsticket save(Tsticket tsticket){

        return tsticketRepository.save(tsticket);
    }

    public Tsticket findById(long id){
        return tsticketRepository.findById(id).orElse(new Tsticket());
    }

    public Tsticket update(Tsticket tsticket){
        return tsticketRepository.save(tsticket);
    }

    public void deleteById(long id){
        tsticketRepository.deleteById(id);
    }
    
}
