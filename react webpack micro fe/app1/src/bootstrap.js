import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css'
import Router from './router';
import { Provider } from "react-redux";
import { appStore } from './appstore';
import {StoreProvider} from 'storeApp/storeRemote'
ReactDOM.createRoot(document.getElementById('root')).render(<>
            <Provider store={appStore}>
                <StoreProvider>
                    <div className='router-section'>
                        <Router/>
                    </div>
            </StoreProvider>
            </Provider>
</>);
