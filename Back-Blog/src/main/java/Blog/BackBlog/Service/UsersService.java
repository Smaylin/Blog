package Blog.BackBlog.Service;

import Blog.BackBlog.Model.Users;

import java.util.List;

public interface UsersService {

    public List<Users> findAll();
    public Users save(Users users);
    public Users findById(Integer id);
    public void delete(Integer id);

}
