import React from 'react';
const {func, object} = React.PropTypes;
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {DummyLink} from 'app/DummyLink';
import AuthActions from 'Auth/AuthActions';
import {USER_SIGNED_IN, USER_SIGNED_OUT} from 'Auth/AuthActions';

import logo from 'img/codaisseur-logo.png';
import style from 'scss/components/Header.scss';

class Header extends React.Component {
    render() {
        let nav;
        const linkstyle = style.link;
        switch (this.props.auth.status) {
            case USER_SIGNED_IN:
                nav = (
                    <nav>
                        <DummyLink onClick={this.props.logout} props={{
                            className: linkstyle
                        }}>
                            Log out
                        </DummyLink>
                    </nav>
                );
                break;
            case USER_SIGNED_OUT:
                nav = (
                    <nav>
                        <Link to="signup" className={linkstyle}>Sign Up</Link>
                        <Link to="login" className="btn_green btn">Login</Link>
                    </nav>
                );
        }
        return (
            <header className={style.header}>
                <Link to="/">
                    <img src={logo} alt="logo"/>
                </Link>
                {nav}
            </header>
        );
    }
}

Header.propTypes = {
    auth: object.isRequired,
    logout: func.isRequired
};

const mapStateToProps = state => {
    return {auth: state.auth};
};

const mapDispatchToProps = {
    logout: AuthActions.logout
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
