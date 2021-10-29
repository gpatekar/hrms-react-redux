import React from 'react';
import { Provider } from 'react-redux';
import CssBaseline from '@mui/material/CssBaseline';

import { AppRoutes } from './AppRoute';
import { store } from './store/store';


const App:React.FC = () => {
  return (
    <div className="App">
      <CssBaseline/>
      <Provider store={store}>
        <AppRoutes/>
      </Provider>
      
    </div>
  );
}

export default App;
