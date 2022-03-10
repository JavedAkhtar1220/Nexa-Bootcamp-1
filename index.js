/**
 * @format
 */

import { AppRegistry } from 'react-native';
import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';
import App from './App';
import { name as appName } from './app.json';
import store from './src/redux/store';

const RNRedux = () => (
    <Provider store={store}>
        <PaperProvider>
            <App />
        </PaperProvider>
    </Provider>
)

AppRegistry.registerComponent(
    appName, () => RNRedux
);
