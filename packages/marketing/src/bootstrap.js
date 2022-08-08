import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


// Mount function to start uo the app
const mount = (el) => {
    ReactDOM.render(
        <App />,
        el
    )
}

// if we are in development and in isolation,
// call mount

if (process.env.NODE_ENV === 'development') {
    const elementRoot = document.querySelector('#_marketing-dev-root');
    if (elementRoot) {
        mount(elementRoot)
    }

}


// we are running through container
// and we should export the mount function

export { mount };