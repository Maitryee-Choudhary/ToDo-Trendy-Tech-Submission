import { findNonSerializableValue } from "@reduxjs/toolkit";
import React, { useRef } from "react";
import { AiFillEdit } from "react-icons/ai";
import { IoCheckmarkDoneSharp, IoClose } from "react-icons/io5";
import '../css/TodoItem.css';

const completed_Status = {
    backgroundColor: '#28B463',
    color:'white',
    textAlign:'center',
}




const TodoItem = (props) => {
  
  const { item, updateTodo, removeTodo, completeTodo } = props;

  const inputRef = useRef(true);

  const changeFocus = () => {
    inputRef.current.disabled = false;
    inputRef.current.focus();
  };

  const update = (id, value, e) => {
    if (e.which === 13) {
      //here 13 is key code for enter key
      updateTodo({ id, item: value });
      inputRef.current.disabled = true;
    }
  };
  return (
    <li
      key={item.id}
      className="card"
    >
      <textarea
        ref={inputRef}
        disabled={inputRef}
        defaultValue={item.item}
        style={{color:'darkblue', paddingLeft:'10px'}}
        onKeyPress={(e) => update(item.id, inputRef.current.value, e)}
      />
      <div className="btns">
        <button  style={{cursor:"pointer"}} onClick={() => changeFocus()}>
          <AiFillEdit />
        </button>
        {item.completed === false && (
          <button
            style={{ color: "green",cursor:"pointer" }}
            onClick={() => completeTodo(item.id)}
          >
            <IoCheckmarkDoneSharp />
          </button>
        )}
        <button
          style={{ color: "red",cursor:"pointer" }}
          onClick={() => removeTodo(item.id)} >
    
          <IoClose />
        </button>

      </div>
      {item.completed && <span className="completed" style={completed_Status}>Done</span>}
       
    </li>
  );
};

export default TodoItem;