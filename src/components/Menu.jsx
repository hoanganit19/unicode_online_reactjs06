import { Link, NavLink, useMatch, useResolvedPath } from "react-router-dom";
import "../assets/style.css";
export default function Menu() {
  // const navLinkClass = ({ isActive }) => {
  //   return isActive ? "nav-link current" : "nav-link";
  // };
  // const navLinkStyle = ({ isActive }) => {
  //   return isActive
  //     ? {
  //         color: "red",
  //         background: "yellow",
  //       }
  //     : {};
  // };
  const CustomLink = ({ href, children, ...props }) => {
    const resolved = useResolvedPath(href);
    const match = useMatch({ path: resolved.pathname });

    return (
      <li className={`nav-item ${match ? "active" : ""}`}>
        <Link to={href} className={`nav-link`} {...props}>
          {children}
        </Link>
      </li>
    );
  };
  return (
    <ul className="nav flex-column">
      <CustomLink href="/">Trang chủ</CustomLink>
      <CustomLink href="/gioi-thieu">Giới thiệu</CustomLink>
      <CustomLink href="/san-pham">Sản phẩm</CustomLink>
      <CustomLink href="/lien-he">Liên hệ</CustomLink>
    </ul>
  );
}
