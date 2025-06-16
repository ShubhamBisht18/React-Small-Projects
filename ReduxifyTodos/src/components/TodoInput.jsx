import {useDispatch } from "react-redux";
import { addTodo } from "../features/todoSlice";
import { useState } from "react";

function TodoInput(){
    const [text, setText] = useState('')
    const dispatch = useDispatch()

    const handleSubmit = (e) =>{
        e.preventDefault();
        dispatch(addTodo(text))
        setText('');
    }
    return(
        <div>
            <input
             value={text}
             onChange={(e)=>setText(e.target.value)}
             type="text" name="text" id="text" placeholder=" Enter the text.." />
             <button onClick={handleSubmit}>Submit</button>
        </div>
    )

}

export default TodoInput