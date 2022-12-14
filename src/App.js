import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount, incrementAsync } from './redux/counterSlice';
import { generateTodoIdAndAdd, todoAdded, todoDeleted } from "./redux/todoSlice";

const App = () => {

    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch();

    const todos = useSelector(state => state.todo);

    // We can also use useSelector to do logic:
    const todosWithSpecificId = useSelector(state => state.todo.find(todo => todo.id === '8'))

    // Redux actions and state should only contain plain JS values like objects, arrays, and primitives.
    // Don't put class instances, functions, or other non-serializable values into Redux!
    // This means we can't dispatch via Date() in action creator. We'd need to modify it in reducer!


    return (
        <>
            {count} <br/>

            <button onClick={() => dispatch(increment())}>Increment</button>

            <button onClick={() => dispatch(decrement())}>Decrement</button>

            <button onClick={() => dispatch(incrementByAmount(Number(2) || 0))}>Increment</button>

            <button onClick={() => dispatch(incrementAsync(Number(2)))}>Increment by Thunk</button>

            <br/>

            <button onClick={() => dispatch(todoAdded({
                id: 3,
                title: 'Another Post'
            }))}>Add Todo
            </button>

            <button onClick={() => dispatch(todoDeleted({
                id: 3,
                title: 'Another Post'
            }))}>Delete Todo
            </button>

            <button onClick={() => dispatch(generateTodoIdAndAdd(
                // We don't need to specify ID here since it'll be supplied automatically
                'Another Post'
            ))}>Add Todo by Autogenerated UUID
            </button>

            {todos.map(todo => {
                return (<h1 key={todo.id}>{todo.title}</h1>)
            })}
        </>
    )
};

export default App;
