package yavirac.ticket.feature.ticket;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TicketService {

    @Autowired
    TicketRepository ticketRepository;

    //CRUD = Create, Read, Update, Delete

    public Ticket save(Ticket ticket){

        return ticketRepository.save(ticket);
    }

    public Ticket findById(long id){
        return ticketRepository.findById(id).orElse(new Ticket());
    }

    public Ticket update(Ticket ticket){
        return ticketRepository.save(ticket);
    }

    public void deleteById(long id){
        ticketRepository.deleteById(id);
    }

    public List<Ticket> findAll(){
        return ticketRepository.findAll();
    }

    public List<Ticket> findByMotivo(String term){
        return ticketRepository.findByMotivoLikeIgnoreCase("%"+term+"%");
    }
    
}
