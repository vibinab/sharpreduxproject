import { useSelector ,useDispatch} from 'react-redux';
import classes from './Counter.module.css';
import { counterActions } from '../store/index';

const Counter = () => { 
  const counter=useSelector(state=> state.counter)
 const show= useSelector(state=>state.showCounter)
  const dispatch =useDispatch()

  const incrementHanlder=()=>{
    // dispatch({type:'increment'})
    dispatch(counterActions.increment())

  }

  const increaseHandler=()=> {
    // dispatch({type:'increase', amount:2});
    dispatch(counterActions.increase(10))
  }

  const decrementHandler=()=> {
    // dispatch({type:'decrement'})
    dispatch(counterActions.decrement())
  }
  const toggleCounterHandler = () => {
    // dispatch({type:'toggle'});
    dispatch(counterActions.toggleCounter())
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHanlder}>increment</button>
        <button onClick={decrementHandler}>descrement</button>
        <button onClick={increaseHandler}>incresed by 5</button>
      </div>

      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
