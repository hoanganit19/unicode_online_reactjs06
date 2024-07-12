import { Link } from "react-router-dom";
export default function Menu() {
  return (
    <ul className="nav flex-column">
      <li>
        <Link to="/">Trang chủ</Link>
      </li>
      <li>
        <Link to="/gioi-thieu">Giới thiệu</Link>
      </li>
      <li>
        <Link to="/san-pham">Sản phẩm</Link>
      </li>
      <li>
        <Link to="/lien-he">Liên hệ</Link>
      </li>
    </ul>
  );
}
