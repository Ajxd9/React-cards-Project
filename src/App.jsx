import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { CssBaseline } from '@mui/material';

import { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import LayoutPage from './layouts/LayoutPage';
import NotFoundPage from './pages/NotFoundPage.css/NotFoundPage';
import Router from './routes/Router';


function App() {
  

  return (
    <div className='container'>
    <CssBaseline/>
    <LayoutPage>
      <Router />
    </LayoutPage>
    </div>
  );
}

export default App;
