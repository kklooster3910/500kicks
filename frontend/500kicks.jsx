import ReactDOM from 'react-dom';
import React from 'react';
import store from './store/store';
import Root from './components/root'

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    let preloadedState;
    if (window.currentUser) {
        preloadedState = {
            session: {
                id: window.currentUser
            }
        };
    } ;
  
    delete window.currentUser;
    const dispatchedStore = store(preloadedState);
    window.store = dispatchedStore
    ReactDOM.render(<Root store={dispatchedStore} />, root)
});