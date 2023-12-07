import { CounterSchema } from 'entities/Counter';
import { UserSchema } from 'entities/User/model/types/UserSchema';
import { LoginSchema } from 'features/authByUsername';

export interface StateSchema {
    counter: CounterSchema;
    user: UserSchema;
    loginForm: LoginSchema;
}
