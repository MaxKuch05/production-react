import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import type { User, UserSchema } from '../types/UserSchema';
import { USER_LOCAL_STOREGE_KEY } from 'shared/const/localStorage';

const initialState: UserSchema = { };

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<User>) => {
            state.authData = action.payload;
        },
        initAuthData: (state) => {
            const user = localStorage.getItem(USER_LOCAL_STOREGE_KEY);
            if (user) {
                state.authData = JSON.parse(user);
            }
        },
        logout: (state) => {
            state.authData = undefined;
            localStorage.removeItem(USER_LOCAL_STOREGE_KEY);
        },
    },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;