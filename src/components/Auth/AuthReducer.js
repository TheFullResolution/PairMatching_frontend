import { USER_SIGNED_IN, USER_SIGNED_OUT } from './AuthActions';

const initialState = {
    status: USER_SIGNED_OUT,
    currentUser: null
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case USER_SIGNED_IN:
            return { status: USER_SIGNED_IN, currentUser: payload };

        case USER_SIGNED_OUT:
            return { status: USER_SIGNED_OUT, currentUser: null };

        default:
            return state;
    }
};
