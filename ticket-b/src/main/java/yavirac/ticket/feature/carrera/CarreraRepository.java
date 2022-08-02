package yavirac.ticket.feature.carrera;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

public interface CarreraRepository extends CrudRepository<Carrera, Long>{
    List<Carrera> findAll(); 
    List<Carrera> findByNameLikeIgnoreCase(String term);
}