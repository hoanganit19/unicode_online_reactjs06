import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <h1>Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <p>
        <Link to={"/"}>Go to Home</Link>
      </p>
    </div>
  );
}
