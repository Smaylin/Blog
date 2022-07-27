package Blog.BackBlog.Service;

import Blog.BackBlog.Model.Blog;
import java.util.List;

public interface BlogService {
    public List<Blog> findAll();
    public Blog save(Blog blog);
    public Blog findById(Integer id);
    public void delete(Integer id);
}
