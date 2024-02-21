import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/Home.css";
const Home = () => {
  return (
    <div>
      <div className="home">
        <div className="headerContainer">
          <h1>Cake Website</h1>
          <p>Best sweet In India</p>
          <Link>
            <button>ORDER NOW</button>
         </Link>
        </div>
      </div>
       
    </div>
  );
};

export default Home;
