package yavirac.ticket.feature.ticket;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

public interface TicketRepository extends CrudRepository<Ticket, Long> {
    
    List<Ticket> findAll();
    List<Ticket> findByMotivoLikeIgnoreCase(String term);
}
