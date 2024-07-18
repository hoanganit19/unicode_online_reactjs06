import { useEffect, useState } from "react";
import { navigateForbidden } from "../ultis/forbidden";
import { Link, useNavigate, useSearchParams } from "react-router-dom";

export default function Products() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const handleChangeInputSearch = (e) => {
    setKeyword(e.target.value);
    setSearchParams({ query: e.target.value });
  };
  const getPosts = async (keyword = null) => {
    let params = "";
    if (keyword) {
      params = "?q=" + keyword;
    }
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts${params}`
    );
    if (!response.ok) {
      return navigate("/404");
    }
    const data = await response.json();
    setPosts(data);
    setLoading(false);
  };
  useEffect(() => {
    document.title = "Danh sách sản phẩm";
    const query = searchParams.get("query");
    if (query) {
      setKeyword(query);
    } else {
      getPosts();
    }
  }, []);

  useEffect(() => {
    if (keyword) {
      getPosts(keyword);
    } else {
      getPosts();
    }
  }, [keyword]);

  return (
    <div>
      <h1>Products</h1>
      <div className="mb-3">
        <input
          type="search"
          className="form-control"
          placeholder="Từ khóa tìm kiếm..."
          onChange={handleChangeInputSearch}
        />
      </div>
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
