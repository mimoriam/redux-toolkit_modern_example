import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount, incrementAsync } from './redux/counterSlice';

const App = () => {

    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch();

    return (
        <>
            {count} <br/>

            <button onClick={() => dispatch(increment())}>Increment</button>

            <button onClick={() => dispatch(decrement())}>Decrement</button>

            <button onClick={() => dispatch(incrementByAmount(Number(2) || 0))}>Increment</button>

            <button onClick={() => dispatch(incrementAsync(Number(2)))}>Increment by Thunk</button>
        </>
    )
};

export default App;
