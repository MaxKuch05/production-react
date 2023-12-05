import { fireEvent, screen } from '@testing-library/react';
import { Counter } from 'entities/Counter/ui/Counter';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';

describe('Counter', () => {
    test('test render', () => {
        componentRender(<Counter />, { 
            initialState: { 
                counter: { value: 10 },
            },
        });
        expect(screen.getByTestId('countValue')).toHaveTextContent('10');
    });
    test('increment', () => {
        componentRender(<Counter />, { 
            initialState: { 
                counter: { value: 10 },
            },
        });
        fireEvent.click(screen.getByTestId('incrementBtn'));
        expect(screen.getByTestId('countValue')).toHaveTextContent('11');
    });
    test('decrement', () => {
        componentRender(<Counter />, { 
            initialState: { 
                counter: { value: 10 },
            },
        });
        fireEvent.click(screen.getByTestId('decrementBtn'));
        expect(screen.getByTestId('countValue')).toHaveTextContent('9');
    });
});
