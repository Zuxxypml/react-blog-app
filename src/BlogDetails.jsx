import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";

export default function BlogDetails() {
  const navigate = useNavigate();

  const { id } = useParams();
  const { data, error, isPending } = useFetch(
    `http://localhost:88/blogs/` + id
  );
  const handleDelete = () => {
    fetch(`http://localhost:88/blogs/` + id, {
      method: "DELETE",
    })
      .then(() => {
        console.log("Deleted blog");
        navigate("/");
      })
      .catch(() => {
        console.log("Unable to delete");
      });
  };
  return (
    <div className="blog-detail">
      <div>{Error && error}</div>
      <div>{isPending && <div>Please wait ...</div>}</div>
      <div>
        {data && (
          <article>
            <h2>{data.title}</h2>
            <p>written by {data.author}</p>
            <div>{data.body}</div>
            <Link to="/">
              <button className="del-btn">Back to Blogs</button>
              <br />
              <button className="del-btn" onClick={handleDelete}>
                Delete blog
              </button>
            </Link>
          </article>
        )}
      </div>
    </div>
  );
}
