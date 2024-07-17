import { useEffect, useState } from "react";
import { navigateForbidden } from "../ultis/forbidden";
import { Link, useNavigate } from "react-router-dom";

export default function Products() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const navigate = useNavigate();
  const getPosts = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    if (!response.ok) {
      return navigate("/404");
    }
    const data = await response.json();
    setPosts(data);
    setLoading(false);
  };
  useEffect(() => {
    document.title = "Danh sách sản phẩm";
    getPosts();
  }, []);
  return (
    <div>
      <h1>Products</h1>
      {isLoading ? (
        <h3>Loading...</h3>
      ) : (
        posts.map((post) => (
          <div key={post.id}>
            <h3>
              <Link to={`/san-pham/${post.id}`}>{post.title}</Link>
            </h3>
            <hr />
          </div>
        ))
      )}
    </div>
  );
}
