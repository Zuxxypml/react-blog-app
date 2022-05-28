import { Link } from "react-router-dom";

const BlogList = ({ blogs, title }) => {
  return (
    <div className="blog-list">
      <h1>{title}</h1>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <Link to={`/blogs/${blog.id}`}>
            <button className="del-btn">Read more</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
