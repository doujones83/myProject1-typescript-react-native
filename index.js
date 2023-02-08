/**
 * @format
 */
import React from 'react'
import {AppRegistry} from 'react-native';
import App from './App';
import {Provider} from 'react-redux'
import {store} from "./src/redux/store"
import {name as appName} from './app.json';

const Project1App = () => {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    )
}

AppRegistry.registerComponent(appName, () => Project1App);
