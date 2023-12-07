import { classNames } from 'shared/lib/classNames/classNames';
import { InputHTMLAttributes, memo } from 'react';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

interface InputProps extends HTMLInputProps{
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
    placeholder?: string;
}

export const Input = memo(({ 
    className, 
    value, 
    placeholder, 
    onChange, 
    ...otherProps 
}: InputProps) => {
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };
    return (
        <div className={classNames(cls.InputWrapper, {}, [className])}>
            {placeholder && <div className={cls.placeholder}>{placeholder}</div> }
            <input 
                value={value} 
                onChange={onChangeHandler} 
                type="text"
                className={classNames(cls.input)}
                {...otherProps}
            />
        </div>
    );
});
