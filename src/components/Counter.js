import { useSelector ,useDispatch} from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => { 
  const counter=useSelector(state=> state.counter)
  const dispatch =useDispatch()

  const incrementHanlder=()=>{
    dispatch({type:'increment'})

  }

  const decrementHandler=()=> {
    dispatch({type:'decrement'})
  }
  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHanlder}>increment</button>
        <button onClick={decrementHandler}>descrement</button>
      </div>

      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
