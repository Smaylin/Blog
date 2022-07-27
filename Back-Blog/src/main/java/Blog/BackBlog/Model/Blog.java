package Blog.BackBlog.Model;


import javax.persistence.*;

@Entity
@Table(name = "Blog")
public class Blog {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "Id")
    private Integer Id;

    @Column(name = "title")
    private String title;

    @Column(name = "content")
    private String content;

    public Integer getId() { return Id; }

    public void setId(Integer Id) {  this.Id = Id; }

    public String getTitle() { return title;}

    public void setTitle(String title) { this.title = title;}

    public String getContent() { return content; }

    public void setContent(String content) { this.content = content; }
}
