import React from 'react';
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';
import ContactScreen from './src/screens/ContactScreen.js';
import rootReducer from './src/redux/reducers';

const store = configureStore({reducer: rootReducer});

export default function App() {
  return (
    <Provider store={store}>
      <ContactScreen/>
    </Provider>
  );
}