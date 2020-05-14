import React from 'react';
import './footer.style.css';
import * as Icon from 'react-feather';

export const Footer =()=>{
    return(
        <footer className="fadeInUp" style={{animationDelay:'2s'}}>
            <div className="link">
            <a href='https://github.com/rohit1204/todo-list' target='__blank' rel="noopener noreferrer">To-Do List</a>   
            </div>
            <a href='https://github.com/rohit1204' target='__blank' className='github'><Icon.GitHub color={"#000000"}/> </a>
            <a href='https://instagram.com/rohit.ahuja04' target='__blank' className='github'><Icon.Instagram  color={"#fb5581"}/></a>
        </footer>
    )
}