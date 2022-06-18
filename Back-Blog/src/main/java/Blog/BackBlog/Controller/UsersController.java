package Blog.BackBlog.Controller;


import Blog.BackBlog.Model.Users;
import Blog.BackBlog.Service.UsersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins={"*"})
@RequestMapping("/users")
public class UsersController {

    @Autowired
    private UsersService usersService;

    @GetMapping("/user")
    public List<Users> listar()
    {
        return usersService.findAll();
    }

    @PostMapping("/user")
    public  Users save(@RequestBody Users users)
    {
        return usersService.save(users);
    }

    @GetMapping("/user/{id}")
    public Users getUser(@PathVariable Integer id)
    {
        return usersService.findById(id);
    }


    @PutMapping("/user/{id}")
    public Users update(@RequestBody Users users,@PathVariable Integer id) {
        Users usersActual = usersService.findById(id);
        usersActual.setEmail(users.getEmail());
        usersActual.setPasswords(users.getPasswords());
        return usersService.save(usersActual);
    }

    @DeleteMapping("/user/{id}")
    public void delete(@PathVariable Integer id) {
        usersService.delete(id);
    }
}
