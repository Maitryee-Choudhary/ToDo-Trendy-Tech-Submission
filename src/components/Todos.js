import React, {useState} from 'react';
import '../css/Todos.css';
import { connect } from 'react-redux';
import { addTodos } from '../redux/reducer';
const mapStateToProps = (state) =>{
    return{
        todos: state,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
      addTodo: (obj) => dispatch(addTodos(obj)),
    };
};



const Todos = (props) =>
{
    const [todo,setTodo] = useState("");
 
    const add = () =>{
        if(todo === "")
        alert("Input is Empty");
        else{
            props.addTodo({
                id: Math.floor(Math.random() * 1000),
                item: todo,
                completed: false,
            });
            setTodo("");
        }
    };


    const handleChange = (e) =>{
        setTodo(e.target.value);
    }

    return(
        <>
          <div className='addTodos_class'>
          <input type="text" name="todo" onChange={(e)=>handleChange(e)} value={todo} />
          <button className='add_btn' onClick={() => add()}>Add</button>
          <br/>
          
          </div>
        </>
    );
};

export default connect(mapStateToProps,mapDispatchToProps)(Todos);