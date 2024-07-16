import { useParams, Navigate } from "react-router-dom";

export default function ProductDetail() {
  const { path } = useParams();
  const match = path.match(/(.+)-(\d+)$/);
  if (!match) {
    return <Navigate to="/404" />;
  }
  const productId = match[2];
  const productSlug = match[1];
  return (
    <div>
      <h1>Product Detail</h1>
      <h2>Product ID: {productId}</h2>
      <h2>Product Slug: {productSlug}</h2>
    </div>
  );
}
