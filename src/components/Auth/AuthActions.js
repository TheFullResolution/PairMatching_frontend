import feathers_app from 'app/feathers';
import {history} from 'app/store';

export const USER_SIGNED_IN = 'USER_SIGNED_IN';
export const USER_SIGNED_OUT = 'USER_SIGNED_OUT';
export const USER_SIGNED_UP = 'USER_SIGNED_UP';

const users = feathers_app.service('users');

const AuthActions = {
    logingFromToken() {
        return dispatch => {
            feathers_app.authenticate().then(response => {
                dispatch({type: USER_SIGNED_IN, payload: response.data});
            }).catch(() => {
                dispatch({type: USER_SIGNED_OUT});
            });
        };
    },
    login(user) {
        return dispatch => {
            feathers_app.authenticate({
                type: 'local',
                ...user
            }).then(response => {
                dispatch({type: USER_SIGNED_IN, payload: response.data});
                history.push('/');
            }).catch(error => {
                console.log(error);
            });
        };
    },
    signUp(user) {
        return dispatch => {
            users.create(user).then(() => {
                var {email, password} = user;
                dispatch({type: USER_SIGNED_UP});
                feathers_app.authenticate({type: 'local', email, password}).then(response => {
                    dispatch({type: USER_SIGNED_IN, payload: response.data});
                    history.push('/');
                }).catch(error => {
                    console.log(error);
                });
            }).catch(error => {
                console.log(error);
            });
        };
    },
    logout() {
        return dispatch => {
            feathers_app.logout();
            dispatch({type: USER_SIGNED_OUT});
            history.push('/');
        };
    }
};

export default AuthActions;
