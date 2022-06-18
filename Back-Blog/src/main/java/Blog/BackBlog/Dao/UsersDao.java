package Blog.BackBlog.Dao;

import Blog.BackBlog.Model.Users;
import org.springframework.data.repository.CrudRepository;

public interface UsersDao extends CrudRepository<Users, Integer> {


}
