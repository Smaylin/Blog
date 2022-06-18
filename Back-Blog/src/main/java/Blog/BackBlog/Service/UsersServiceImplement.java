package Blog.BackBlog.Service;

import Blog.BackBlog.Dao.UsersDao;
import Blog.BackBlog.Model.Users;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class UsersServiceImplement implements UsersService {


    @Autowired
    private UsersDao usersDao;

    @Override
    @Transactional(readOnly=true)
    public List<Users> findAll() {
        return (List<Users>) usersDao.findAll();
    }

    @Override
     @Transactional(readOnly=false)
    public Users save(Users users) {
        return usersDao.save(users);
    }

    @Override
     @Transactional(readOnly=true)
    public Users findById(Integer id) {
        return usersDao.findById(id).orElse(null);
    }

    @Override
     @Transactional(readOnly=false)
    public void delete(Integer id) {
        usersDao.deleteById(id);
    }
}
