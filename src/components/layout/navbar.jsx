import React from "react";
import { Router, Link } from '@reach/router';
import UseNavigate from '@/routes/navigate'

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
           <Link to="/cretaceus" className="title tiny">
            <button className="title tiny" onClick={() => UseNavigate('/cretaceus')}/>
           </Link>
         </div>
       </div>
    </div>
  );
};

export default Navbar;