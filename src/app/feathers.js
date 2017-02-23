// src/middleware/api.js
import feathers from 'feathers-client';
import io from 'socket.io-client';

const host = 'http://localhost:3030';

const socket = io(host);
const feathers_app = feathers()
    .configure(feathers.socketio(socket))
    .configure(feathers.hooks())
    .configure(
        feathers.authentication({
            type: 'local',
            // when logged in, store the token in localStorage
            storage: window.localStorage
        })
    );

export default feathers_app;
