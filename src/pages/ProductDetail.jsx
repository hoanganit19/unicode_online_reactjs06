import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function ProductDetail() {
  // const { path } = useParams();
  // const match = path.match(/(.+)-(\d+)$/);
  // if (!match) {
  //   return <Navigate to="/404" />;
  // }
  // const productId = match[2];
  // const productSlug = match[1];
  const { path: productId } = useParams();
  const [post, setPost] = useState({});
  const [isLoading, setLoading] = useState(true);
  const navigate = useNavigate();
  const getPost = async (productId) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${productId}`
    );
    if (!response.ok) {
      return navigate("/404");
    }
    const data = await response.json();
    setPost(data);
    setLoading(false);
  };
  useEffect(() => {
    getPost(productId);
  }, []);
  useEffect(() => {
    if (!isLoading) {
      document.title = post.title;
    }
  }, [post]);
  if (isLoading) {
    return <h3>Loading...</h3>;
  }
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );
}
