import React from 'react';
import 'scss/app.scss';

import Header from 'app/Header';

class Layout extends React.Component {
    render() {
        return (
            <div className="container">
                <Header/>
                {this.props.children}
            </div>
        );
    }
}

Layout.propTypes = {
    children: React.PropTypes.object.isRequired
};
export default Layout;
