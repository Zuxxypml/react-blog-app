import { useNavigate } from "react-router-dom";
import BlogList from "./BlogList";
import useFetch from "./useFetch";
const Home = () => {
  const { data, isPending, error } = useFetch("http://localhost:88/blogs");
  const navigate = useNavigate();
  return (
    <div className="home">
      <div>{Error && error}</div>
      <div>{isPending && <div>Loading ........</div>}</div>
      {data && data.length === 0
        ? navigate("/create")
        : data && <BlogList blogs={data} title="All Blogs"></BlogList>}
    </div>
  );
};

export default Home;
