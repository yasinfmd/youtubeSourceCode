import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css'
import App from './app';
import {StoreProvider} from 'storeApp/storeRemote'

ReactDOM.createRoot(document.getElementById('root')).render(
    <StoreProvider>
        <App />
</StoreProvider>

);
