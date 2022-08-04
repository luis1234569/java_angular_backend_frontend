package yavirac.ticket.auth.estudiante;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

public interface EstudianteRepository extends CrudRepository<Estudiante, Long>{
    List<Estudiante> findByNameLikeIgnoreCase(String term);
    
}
