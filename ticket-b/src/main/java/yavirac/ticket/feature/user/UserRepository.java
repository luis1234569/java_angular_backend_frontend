package yavirac.ticket.feature.user;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Long> {
    
    List<User> findAll();

    List<User> findByNameLikeIgnoreCase(String term);
    
}
