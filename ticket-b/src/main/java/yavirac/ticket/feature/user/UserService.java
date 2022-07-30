package yavirac.ticket.feature.user;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    UserRepository userRepository;

    //CRUD = Create, Read, Update, Delete

    public User save(User user){

        return userRepository.save(user);
    }

    public User findById(long id){
        return userRepository.findById(id).orElse(new User());
    }

    public User update(User user){
        return userRepository.save(user);
    }

    public void deleteById(long id){
        userRepository.deleteById(id);
    }
     
    public List<User> findAll(){
        return userRepository.findAll();
    }

    public List<User> findByName(String term){
        return userRepository.findByNameLikeIgnoreCase(term+"%");
    }

}
