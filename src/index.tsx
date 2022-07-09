import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {store} from "./redux/store-redux"
import {Provider} from "./StoreContext";


const renderTree = () => {

    ReactDOM.render(
        <Provider store={store}>
        <App/>
        </Provider>,

        document.getElementById('root')
    );
}
renderTree()


store.subscribe(()=>{

    renderTree()
})