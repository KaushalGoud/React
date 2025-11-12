import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css"; // External CSS

const Header = () => {
  return (
    <header id="header">
      {/* Logo Section */}
      <div className="logo-section">
        <img
          src="https://media.istockphoto.com/id/1435983029/vector/food-delivery-logo-images.jpg?s=612x612&w=0&k=20&c=HXPxcjOxUiW4pMW1u9E0k2dJYQOU37a_0qZAy3so8fY="
          alt="MyWebsite Logo"
          className="logo"
        />
        <h1 className="site-title">Foodmandu</h1>
      </div>

      {/* Navigation Menu */}
      <nav className="nav-menu">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};
const dummyData = {
data:{
    id: 1,
    name: "Foodmandu",
    image: "https://via.placeholder.com/150",
    rating: 4.5,
    description: "Fast delivery of delicious meals.",
    location:"Butwal,Nepal"
  }
}


  


const Card = (props) => {
   const {data}=props
   console.log(data)
  return (
    <div className="card">
      <h3>{data.data.name}</h3>
      <img
        src="https://www.spicebangla.com/wp-content/uploads/2024/08/Spicy-Pasta-recipe-optimised-scaled.webp"
        alt="MyWebsite Logo"
        className="card-img"
      />
      <p>{data.data.description}</p>
      <p>{data.data.rating} Rating</p>
      <p>{data.data.location}</p>
    </div>
  );
};


const Body = () => {
  return (
    <div id="body">
      <div id="search">search</div>
      <div id="rest">
        <Card data={dummyData} />
       
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div id="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
