package yavirac.ticket.auth.authority;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import yavirac.ticket.auth.authority.auth.authority.Authority;

public interface AuthorityRepository extends CrudRepository<Authority, Long>{

    List<Authority> findByNameLikeIgnoreCase(String term);
    
}
