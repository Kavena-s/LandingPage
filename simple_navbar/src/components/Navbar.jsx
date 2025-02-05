import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ background: "green", padding: "10px" }}>
      <ul style={{ listStyle: "none", display: "flex", gap: "400px" }}>
        <li><Link to="/" style={{ color: "black", textDecoration: "none" }}>Home</Link></li>
        <li><Link to="/about" style={{ color: "black", textDecoration: "none" }}>About</Link></li>
        <li><Link to="/products" style={{ color: "black", textDecoration: "none" }}>Products</Link></li>
        <li><Link to="/contact" style={{ color: "black", textDecoration: "none" }}>Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
