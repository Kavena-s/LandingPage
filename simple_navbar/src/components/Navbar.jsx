
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation(); // Get the current page path

  const navItemStyle = (path) => ({
    color: location.pathname === path ? "yellow" : "#fff", // Highlight active page
    textDecoration: "none",
    fontWeight: location.pathname === path ? "bold" : "normal",
    padding: "150px",
  });

  return (
    <nav style={{ background: "green", padding: "10px" }}>
      <ul style={{ listStyle: "none", display: "flex", gap: "20px" }}>
        <li><Link to="/" style={navItemStyle("/")}>Home</Link></li>
        <li><Link to="/about" style={navItemStyle("/about")}>About</Link></li>
        <li><Link to="/products" style={navItemStyle("/products")}>Products</Link></li>
        <li><Link to="/contact" style={navItemStyle("/contact")}>Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
