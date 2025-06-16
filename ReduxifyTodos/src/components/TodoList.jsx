import {useSelector,useDispatch} from 'react-redux'
import { addTodo, removeTodo } from '../features/todoSlice'

function TodoList(){
    const todos = useSelector((state)=> state.todo)
    const dispatch = useDispatch();
    return(
        <div>
            <ul>
                {todos.map((todo)=>(
                    <li key={todo.id}>
                         <span>{todo.text}</span>
                        <button onClick={() => dispatch(removeTodo(todo.id))}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TodoList