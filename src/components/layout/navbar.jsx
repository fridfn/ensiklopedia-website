import React from "react";
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import useDuplicateItems from '@/features/utils/useDuplicateItems.jsx';
import properties from '@/features/property/metadata.js';

const Navbar = () => {
  const { navbar } = properties;
  
  const navigationItems = navbar.name.map((name, index) => {
   return (
    <div className="items center-clm" key={index}>
      <Link to={navbar.url[index]} className="title tiny">{name}</Link>
    </div>
   )
  })
  
  return (
   <div className="navbar">
     <div className="wrapper">
       { navigationItems }
     </div>
   </div>
  );
};

export default Navbar;