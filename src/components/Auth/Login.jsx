import React from 'react';
const { func, bool } = React.PropTypes;
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import AuthActions from 'Auth/AuthActions';

import emailRegex from './emailRegex';
import Input from './Input';

import style from 'scss/components/Form.scss';

const validate = values => {
    const errors = {};
    const requiredFields = ['email', 'password'];
    requiredFields.forEach(field => {
        if (!values[field]) {
            errors[field] = 'Required';
        }
    });
    if (values.email && !emailRegex.test(values.email)) {
        errors.email = 'Invalid email address';
    }
    return errors;
};

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.loginUser = this.loginUser.bind(this);
    }
    loginUser(data) {
        this.props.login(data);
    }

    render() {
        const {
            handleSubmit,
            pristine,
            reset,
            submitting,
            submitFailed
        } = this.props;
        return (
            <form
                onSubmit={handleSubmit(this.loginUser)}
                className={style.form}
                autoComplete="on"
            >
                <div className={style.formHeader}>
                    <h1>Login</h1>
                </div>
                <fieldset>
                    <Field
                        name="email"
                        type="email"
                        component={Input}
                        label="Email"
                        autocomplete="email"
                        iffocus={true}
                    />
                    <Field
                        name="password"
                        type="password"
                        component={Input}
                        label="Password"
                    />
                </fieldset>

                <div className={style.formFooter}>
                    <p className={style.error} tabIndex="-1" ref="error">
                        {!!submitFailed &&
                            <span>Can not login, check form fileds</span>}

                    </p>
                </div>
                <div className={style.buttons}>
                    <button
                        type="button"
                        className="btn btn_red"
                        disabled={pristine || submitting}
                        onClick={reset}
                    >
                        Clear Values
                    </button>
                    <button
                        type="submit"
                        className="btn btn_red"
                        disabled={submitting}
                        onClick={this.focusOnMessage}
                    >
                        Login
                    </button>
                </div>
            </form>
        );
    }
}

LoginForm.propTypes = {
    handleSubmit: func.isRequired,
    submitting: bool.isRequired,
    pristine: bool.isRequired,
    reset: func.isRequired,
    login: func.isRequired,
    submitFailed: bool.isRequired
};

let Login = reduxForm({
    form: 'login', // a unique identifier for this form
    validate
})(LoginForm);


const mapDispatchToProps = {
    login: AuthActions.login
};

export default (Login = connect(null, mapDispatchToProps)(Login));
