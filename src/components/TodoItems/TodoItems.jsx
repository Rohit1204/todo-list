import React, { Component} from 'react';
import FlipMove from 'react-flip-move';
import './TodoItems.css';
class TodoItems extends Component{
  constructor(props)
  {
    super(props);
    this.createTasks=this.createTasks.bind(this);
  }
  delete(key){
    this.props.delete(key);
     }
  updateTasks(key){
    this.props.updateTasks(key)
  }


  createTasks(item){
    return (
          <li key={item.key}>
            {item.text}
          <button type="button" onClick={()=> this.delete(item.key)}>X</button>
          <button type="button" onClick={()=> this.updateTasks(item.key)}>Edit </button>
    </li>
    
   
    );
  }
 
  render(){
    var todoEntries =this.props.entries;
    var listItems=todoEntries.map(this.createTasks);
    return(
      <ul className="theList">
        <FlipMove duration={250} easing="ease-out">
        {listItems}
        </FlipMove>
      </ul>
    );
  }
};


export default TodoItems;