import React ,{useState} from 'react';
import {Link} from 'react-router-dom';
import "./navbar.style.css";
import {
    useLockBodyScroll, useLocalStorage,
} from 'react-use';
import * as Icon from 'react-feather';

export function Navbar({darkMode,setDarkMode}){
    const [expand,setExpand]=useState(false);
    const [isThemeSet,setIsThemeSet]=useLocalStorage('isThemeSet',false);
      useLockBodyScroll(expand);
    return(
        <div className="navbar">
            <div className="navbar-left"
            onClick={()=>{
                setDarkMode((prevMode)=>!prevMode);
                setIsThemeSet(true);
            }}
            >
                {darkMode ?<Icon.Sun color={'#ffc107'}/>:<Icon.Moon/>}
            </div>
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