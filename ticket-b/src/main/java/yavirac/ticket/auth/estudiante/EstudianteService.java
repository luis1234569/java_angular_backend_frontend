package yavirac.ticket.auth.estudiante;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EstudianteService {
    @Autowired
    EstudianteRepository estudianteRepository;

public List<Estudiante>findByName(String term){
    return estudianteRepository.findByNameLikeIgnoreCase(term +"%");
}

public Estudiante findById(long id){
    return estudianteRepository.findById(id).orElse(new Estudiante());
}

}