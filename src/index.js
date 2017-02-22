import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import Routs from 'app/Routs';
import store, { history } from 'app/store';

render(
    <AppContainer>
        <Routs store={store} history={history} />
    </AppContainer>,
    document.getElementById('root')
);

if (module.hot) {
    module.hot.accept();
}
