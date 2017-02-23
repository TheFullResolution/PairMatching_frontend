import React from 'react';
import { Route, IndexRoute, IndexRedirect } from 'react-router'; // eslint-disable-line
import { Provider } from 'react-redux';
import { Router } from 'react-router';

import AuthActions from 'Auth/AuthActions';

import Layout from 'app/Layout';
import Login from 'Auth/Login';
import SignUp from 'Auth/Signup';
import App from 'app/App';

export default class Routs extends React.Component {
    componentWillMount() {
        this.props.store.dispatch(AuthActions.logingFromToken());
    }
    render() {
        const { store, history } = this.props;
        return (
            <Provider store={store}>
                <Router history={history}>
                    <Route path="/" component={Layout}>
                        <IndexRoute component={App} />
                        <Route path="/login" component={Login} />
                        <Route path="/signup" component={SignUp} />
                    </Route>
                </Router>
            </Provider>
        );
    }
}

Routs.propTypes = {
    store: React.PropTypes.object.isRequired,
    history: React.PropTypes.object.isRequired
};
