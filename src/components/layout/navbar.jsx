import React from "react";
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import useDuplicateItems from '@/features/utils/useDuplicateItems.jsx';

const Navbar = () => {
  
  const navigationItems = () => {
   return (
    <div className="items center-clm">
      <Link to="/home/dinosaurus/pages/1" className="title tiny">Home</Link>
    </div>
   )
  }
  
  return (
   <div className="navbar">
     <div className="wrapper">
       {
        useDuplicateItems(navigationItems, 4)
       }
     </div>
   </div>
  );
};

export default Navbar;