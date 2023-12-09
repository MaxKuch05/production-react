import { classNames } from 'shared/lib/classNames/classNames';  
import cls from './LoginForm.module.scss';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { useDispatch, useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { loginActions, loginReducer } from 'features/authByUsername/model/slice/loginSlice';
import { loginByUsername } from 'features/authByUsername/model/services/loginByUsername/loginByUsername';
import { getLoginUsername } from 'features/authByUsername/model/selector/getLoginUsername/getLoginUsername';
import { getLoginPassword } from 'features/authByUsername/model/selector/getLoginPassword/getLoginPassword';
import { getLoginIsLoading } from 'features/authByUsername/model/selector/getLoginIsLoading/getLoginIsLoading';
import { getLoginError } from 'features/authByUsername/model/selector/getLoginError/getLoginError';
import DynamicModuleLoader, { ReducersList } from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader';

export interface LoginFormProps {
    className?: string;
}

const initialReducers: ReducersList = {
    'loginForm': loginReducer,
};

const LoginForm = memo(({ className }: LoginFormProps) => {
    const dispatch = useDispatch();
    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginIsLoading);
    const error = useSelector(getLoginError);

   
    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(() => {
        console.log({ username, password });
        dispatch(loginByUsername({ username, password }));
    }, [dispatch, password, username]);

    return (
        <DynamicModuleLoader removeOnDestroy={true} reducers={initialReducers}>
            <div className={classNames(cls.LoginForm, {}, [className])}>
                <Text title='Форма авторизации' />
                {error && <Text theme={TextTheme.ERROR} text={error} />}
                <Input 
                    value={username} 
                    onChange={onChangeUsername} 
                    placeholder='Логин' 
                    className={cls.input}
                />
                <Input 
                    value={password} 
                    onChange={onChangePassword} 
                    placeholder='Пароль' 
                    className={cls.input}
                />
                <Button disabled={isLoading} onClick={onLoginClick} className={cls.loginBtn}>Войти</Button>
            </div>
        </DynamicModuleLoader>
    );
});

export default LoginForm;