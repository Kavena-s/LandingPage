

import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Products = () => {
  const images = [
    "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",  
    "https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?cs=srgb&dl=pexels-janetrangdoan-1092730.jpg&fm=jpg",  
    "https://img.freepik.com/free-photo/top-view-assortment-vegetables-paper-bag_23-2148853335.jpg?semt=ais_hybrid", 
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNWso09tapM_a17AucwjQZxtv9ZJc0PhvFnA&s",  
  ];

  const [index, setIndex] = useState(0);
  const location = useLocation(); // Get current route information
  const navigate = useNavigate(); // Navigate between pages

  useEffect(() => {
    console.log("Current page:", location.pathname); // Log the current URL path

    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [location]); // Depend on location to log changes when the route updates

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Our Products</h1>
      <img
        src={images[index]}
        alt="Product"
        style={{ width: "300px", height: "300px", borderRadius: "10px" }}
      />
      <br />
      <button
        onClick={() => navigate("/")} // Navigate to Home page
        style={{ padding: "20px", marginTop: "50px", cursor: "pointer", borderRadius: "100px", backgroundColor:"green" }}
      >
        Go to Home Page
      </button>
    </div>
  );
};

export default Products;
