import React from 'react';
import 'scss/app.scss';

import Header from 'app/Header';

const Layout = (props) => (
    <div>
        <Header />
        {props.children}
    </div>
);

Layout.propTypes = {
    children: React.PropTypes.object.isRequired
};

export default Layout;
