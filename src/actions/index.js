import {SIGN_IN,SIGN_OUT} from './types';

export const signIn = (user_id) => {
    return {
        type: SIGN_IN,
        payload: user_id
    };
};

export const signOut = () => {
    return {
        type: SIGN_OUT
    };
};