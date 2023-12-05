import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'shared/ui/Button/Button';
import { counterActions } from '../model/slice/counterSlice';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

export const Counter: React.FC = () => {
    const dispatch = useDispatch();
    const countValue = useSelector(getCounterValue);
    const increment = () => {
        dispatch(counterActions.increment());
    };
    const decrement = () => {
        dispatch(counterActions.decrement());
    };
    return (
        <div>
            <h1 data-testid="countValue">{countValue}</h1>
            <Button data-testid="incrementBtn" onClick={increment}>increment</Button>
            <Button data-testid="decrementBtn" onClick={decrement}>decrement</Button>
        </div>
    );
};
