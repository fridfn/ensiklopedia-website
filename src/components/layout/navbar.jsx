import React from "react";
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Navbar = () => {
  
  return (
    <div className="navbar">
       <div className="wrapper">
         <div className="items center-clm">
           <Link to="/home" className="title tiny">Home</Link>
         </div>
         <div className="items center-clm">
           <Link to="/triassic" className="title tiny">Home</Link>
         </div>
         <div className="items center-clm">
           <Link to="/jurassic" className="title tiny">Home</Link>
         </div>
         <div className="items center-clm">
           <Link to="/cretaceus" className="title tiny">Cretaceus</Link>
         </div>
       </div>
    </div>
  );
};

export default Navbar;