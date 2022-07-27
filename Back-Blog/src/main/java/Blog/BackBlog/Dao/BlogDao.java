package Blog.BackBlog.Dao;

import Blog.BackBlog.Model.Blog;
import org.springframework.data.repository.CrudRepository;

public interface BlogDao extends CrudRepository<Blog, Integer> {


}
