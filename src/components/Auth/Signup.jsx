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
    const requiredFields = [
        'name',
        'lastname',
        'email',
        'password',
        'repeatpassword'
    ];
    requiredFields.forEach(field => {
        if (!values[field]) {
            errors[field] = 'Required';
        }
    });
    if (values.password && values.password.length < 4) {
        errors.password = 'Must be at least 4 characters';
    }
    if (values.repeatpassword !== values.password) {
        errors.repeatpassword = 'Passwords are not matching';
    }
    if (values.email && !emailRegex.test(values.email)) {
        errors.email = 'Invalid email address';
    }
    return errors;
};

class SignUpForm extends React.Component {
    constructor(props) {
        super(props);
        this.createUser = this.createUser.bind(this);
    }
    createUser(values) {
        this.props.signUp(values);
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
                onSubmit={handleSubmit(this.createUser)}
                className={style.form}
                autoComplete="on"
            >
                <div className={style.formHeader}>
                    <h1>Sign Up</h1>
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
                    <Field
                        name="repeatpassword"
                        type="password"
                        component={Input}
                        label="Repeat Password"
                    />
                    <Field
                        name="name"
                        type="text"
                        component={Input}
                        label="First Name"
                        autocomplete="given-name"
                    />
                    <Field
                        name="lastname"
                        type="text"
                        component={Input}
                        label="Last Name"
                        autocomplete="family-name"
                    />
                </fieldset>

                <div className={style.formFooter}>
                    <p className={style.error} tabIndex="-1" ref="error">
                        {!!submitFailed &&
                            <span>Can not submit, check form fileds</span>}

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
                        Submit
                    </button>
                </div>
            </form>
        );
    }
}

SignUpForm.propTypes = {
    handleSubmit: func.isRequired,
    submitting: bool.isRequired,
    pristine: bool.isRequired,
    reset: func.isRequired,
    signUp: func.isRequired,
    submitFailed: bool.isRequired
};

let SignUp = reduxForm({
    form: 'create', // a unique identifier for this form
    validate
})(SignUpForm);


const mapDispatchToProps = {
    signUp: AuthActions.signUp
};

export default (SignUp = connect(null, mapDispatchToProps)(SignUp));
