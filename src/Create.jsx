import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };
    console.log(blog);
    setIsPending(true);
    fetch("http://localhost:88/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    })
      .then(() => {
        console.log("New blog Added ");
        setIsPending(false);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        setIsPending(true);
      });
  };

  return (
    <div className="create">
      <h2>Create blog</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="blogTitle">Blog Title:</label>
        <input
          type="text"
          name="blogTitle"
          id="blogTitle"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          required
        />
        <label htmlFor="blogBody">Blog Body:</label>
        <textarea
          required
          id="blogBody"
          value={body}
          onChange={(e) => {
            setBody(e.target.value);
          }}
        ></textarea>
        <label htmlFor="blogAuthor">Blog Author:</label>
        <input
          type="text"
          id="blogAuthor"
          value={author}
          onChange={(e) => {
            setAuthor(e.target.value);
          }}
        />
        {!isPending && (
          <button type="submit" className="del-btn">
            Add blog{" "}
          </button>
        )}
        {isPending && (
          <button type="submit" disabled className="del-btn">
            Adding blog ......
          </button>
        )}
      </form>
    </div>
  );
};

export default Create;
