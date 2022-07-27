package Blog.BackBlog.Service;

import Blog.BackBlog.Dao.BlogDao;
import Blog.BackBlog.Model.Blog;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class BlogServiceImplement implements BlogService {

    @Autowired
    private BlogDao blogDao;

    @Override
    @Transactional(readOnly = true)
    public List<Blog> findAll() {
        return (List<Blog>) blogDao.findAll();
    }

    @Override
    @Transactional(readOnly = false)
    public Blog save(Blog blog) {
        return blogDao.save(blog);
    }

    @Override
    @Transactional(readOnly = true)
    public Blog findById(Integer id) {
      return blogDao.findById(id).orElse(null);
    }

    @Override
    @Transactional(readOnly = false)
    public void delete(Integer id) {
        blogDao.deleteById(id);
    }
}
