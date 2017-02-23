import React from 'react';
const {
    object
} = React.PropTypes;

import { connect } from 'react-redux';

import Pairs from 'Pairs/Pairs';

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { auth: { currentUser } } = this.props;
        let name = false;
        let display;
        if (currentUser) name = currentUser.name;
        if (name) {
            display = (
                <div>
                    <h2 className="textCenter">Hello, {name}</h2>
                    <Pairs/>
                </div>
            );
        }
        return (
            <div className="container">
                {display}
            </div>
        );
    }
}

App.propTypes = {
    auth: object.isRequired
};

const mapStateToProps = state => {
    return {
        auth: state.auth
    };
};

export default connect(mapStateToProps, null)(App);
