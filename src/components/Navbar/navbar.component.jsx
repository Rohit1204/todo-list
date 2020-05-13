import React ,{useState} from 'react';
import {Link} from 'react-router-dom';
import "./navbar.style.css";
import {
    useLockBodyScroll,
} from 'react-use';

export function Navbar(){
    const [expand,setExpand]=useState(false);
      useLockBodyScroll(expand);
    return(
        <div className="navbar">
             <div className="navbar-middle">
                 <Link
                 to="/"
                 onClick={()=>{
                     setExpand(false);
                 }}
                 >
                To-Do <span>List</span>
                 </Link>
             </div>
        </div>
    );
}
export default Navbar;