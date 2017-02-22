import React from 'react';

class Layout extends React.Component {
    render() {
        return (
            <div className="container">
                {this.props.children}
            </div>
        );
    }
}

Layout.propTypes = {
    children: React.PropTypes.object.isRequired
};
export default Layout;
