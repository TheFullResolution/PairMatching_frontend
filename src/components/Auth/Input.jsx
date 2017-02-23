const React = require('react');
const {object, string, bool} = React.PropTypes;

import style from 'scss/components/Form.scss';

const Input = ({
    input,
    label,
    type,
    iffocus,
    autocomplete,
    meta: {
        touched,
        error
    }
}) => (
    <div>
        <label htmlFor={input.name}>
          {label}
        </label>
        <div>
            <input {...input} id={input.name} type={type} autoFocus={iffocus} autoComplete={autocomplete}/>
            {touched && error && <span className={style.error} >{error}</span>}
        </div>
    </div>
);

Input.propTypes = {
    input: object.isRequired,
    label: string.isRequired,
    type: string.isRequired,
    meta: object.isRequired,
    autocomplete: string,
    iffocus: bool
};

export default Input;
