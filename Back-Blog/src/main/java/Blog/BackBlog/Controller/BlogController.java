package Blog.BackBlog.Controller;


import Blog.BackBlog.Model.Blog;
import Blog.BackBlog.Service.BlogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api")
public class BlogController {

    @Autowired
    private BlogService blogService;


    //Listar
    @GetMapping("/blogs")
    public List<Blog> listar() {
        return blogService.findAll();
    }

    //Guardar
    @PostMapping("/blogs")
    public Blog save(@RequestBody Blog blog) {
        return blogService.save(blog);
    }

    //getUnaTarea
    @GetMapping("/blogs/{id}")
    public Blog getUnBlog(@PathVariable Integer id) {
        return blogService.findById(id);
    }

    //Modificar
    @PutMapping("/blogs/{id}")
    public Blog update(@RequestBody Blog blog, @PathVariable Integer id) {
        Blog blogActual = blogService.findById(id);
        blogActual.setTitle(blog.getTitle());
        blogActual.setContent(blog.getContent());
        return blogService.save(blogActual);
    }

    //Eliminar
    @DeleteMapping("/blogs/{id}")
    public void delete(@PathVariable Integer id) {
        blogService.delete(id);
    }
}
