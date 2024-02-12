import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Store ,persistor} from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={Store}>
    <BrowserRouter>
    <PersistGate loading={null} persistor={persistor}>
    <App />
    </PersistGate>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);


