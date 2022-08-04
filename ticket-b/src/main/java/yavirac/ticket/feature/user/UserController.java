package yavirac.ticket.feature.user;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;////
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;///
import org.springframework.web.bind.annotation.PutMapping;///
import org.springframework.web.bind.annotation.RequestBody;////
import org.springframework.web.bind.annotation.RequestMapping;////
import org.springframework.web.bind.annotation.ResponseStatus;////
import org.springframework.web.bind.annotation.RestController;



@RestController
@RequestMapping("/api/user")
@CrossOrigin({"*"})
public class UserController {

    @Autowired
    UserService userService;

    @GetMapping("/findAll")
    public List<User> findAll(){
        return userService.findAll();
    }
    
    // @GetMapping("/findById/{id}")//value=
    // public User findById(@PathVariable long id) {
    //     return userService.findById(id);
    // }



    
    //Create
    @PostMapping("/save")
    public User save(@RequestBody User user){
        return userService.save(user);
    }

    //Read
     @GetMapping("/{id}")
    public User findById(@PathVariable long id){
         return userService.findById(id);
     }

    //Update
    @PutMapping("/update")
    public User update(@RequestBody User user)
    {
        return userService.save(user);
    }

    //Delete
    @DeleteMapping("/deleteById/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable long id){
        userService.deleteById(id);
    }

    @GetMapping("/findByName/{term}")
    public List<User> findByName(@PathVariable String term){
        return userService.findByName(term);
    }
}
