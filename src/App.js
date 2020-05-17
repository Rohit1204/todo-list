import React, { useState, useRef } from 'react';
import TodoItems from './components/TodoItems/TodoItems';
import './App.scss';
import  {Footer} from './components/Footer/footer.component';
import Navbar from './components/Navbar/navbar.component';
import {BrowserRouter as Router} from 'react-router-dom';
import {useLocalStorage, useEffectOnce} from 'react-use';
export function App(props){
  const[items,setItems]=useState([]);
  var _inputElement =useRef("");

  const addItem=(e)=>{
    e.preventDefault();
    if(_inputElement.value !==" "){
      var newItem ={
        text: _inputElement.value,
        key:Date.now()
      };
          setItems(items=> items.concat(newItem)
      );
      _inputElement.value=" ";
    }
  console.log(setItems);
  }
  const deleteItem=(key)=>{
    var filteredItems= items.filter(function(item){
      return (item.key !==key);
    });
   setItems(filteredItems);
  }
  const [darkMode, setDarkMode]=useLocalStorage('darkMode',false);
  const [isThemeSet]=useLocalStorage('isThemeSet',false);
  useEffectOnce(()=>{
    if(
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme:dark)').matches && !isThemeSet){
        setDarkMode(true);
      }else if(
  window.matchMedia && !window.matchMedia('(prefers-color-scheme:dark)').matches && !isThemeSet)
  {
    setDarkMode(false);
  }
  });
  React.useEffect(()=>{
    if(darkMode){
      document.querySelector('body').classList.add('dark-mode');
    }
    else{
      document.querySelector('body').classList.remove('dark-mode');
    }
  },[darkMode]);
  return(
    <div className="todoListMain">
      <Router>
      <Navbar
      darkMode={darkMode}
      setDarkMode={setDarkMode}
      />
      <div className="header">
        <form onSubmit ={addItem}>
      <input 
      ref={(a) =>  _inputElement =a}
      placeholder="enter task"
      className="no-outline">
      </input>
      <button type="submit">add</button>
        </form>
      </div>
      <div className="list">
      <TodoItems entries= {items}
                  delete={deleteItem}/>
      </div>
      
      <Footer/>
      </Router>
    </div>
  );
}
export default App;
