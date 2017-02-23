import React from 'react';
const { func, any, object } = React.PropTypes;

export const DummyLink = ({ onClick, children, props }) => (
    <a
        href="#"
        onClick={(evt) => {
            evt.preventDefault();
            onClick && onClick();
        }}
        {...props}
    >
        {children}
    </a>
);

DummyLink.propTypes = {
    onClick: func,
    children: any,
    props: object
};
