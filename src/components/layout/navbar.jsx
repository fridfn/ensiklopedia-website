import React from "react";
import UseNavigate from '@/routes/navigate'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
 const navigate = useNavigate();
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
           <Link to="/cretaceus" className="title tiny">
            <button className="title tiny" onClick={() => navigate('/cretaceus')}>cretaceus</button>
           </Link>
         </div>
       </div>
    </div>
  );
};

export default Navbar;