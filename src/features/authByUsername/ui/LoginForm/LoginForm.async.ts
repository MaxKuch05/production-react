import { FC, lazy } from 'react';
import { LoginFormProps } from './LoginForm';

const AbotPageAsync = lazy<FC<LoginFormProps>>(() => import('./LoginForm'));

export default AbotPageAsync;
