package yavirac.ticket.feature.carrera;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CarreraService {
    @Autowired
    CarreraRepository carreraRepository;
    public Carrera save(Carrera carrera){
        return carreraRepository.save(carrera);
    }

    public Carrera findById(long id){
        return carreraRepository.findById(id).orElse(new Carrera());
    }

    public Carrera update (Carrera carrera) {
        return carreraRepository.save(carrera);
    } 

    public void deleteById ( long id ) {
        carreraRepository.deleteById(id);
    }
}
