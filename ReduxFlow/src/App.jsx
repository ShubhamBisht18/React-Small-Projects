import { useSelector, useDispatch } from "react-redux"
import { increment, decrement } from "./feature/CounterSlice"

function App() {

  const count = useSelector((state) => state.counter.value)
  const Dispatch = useDispatch(); 

  return (
    <div>
      <h5>Count: {count}</h5>
      <button onClick={() => Dispatch(increment())}>+</button>
      <button onClick={() => Dispatch(decrement())}>-</button>
    </div>
  )
}

export default App
