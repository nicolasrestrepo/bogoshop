import React, { lazy, Fragment, Suspense, StrictMode } from 'react';
import { Router } from '@reach/router';
import { Progress } from 'antd';
import 'antd/dist/antd.css';
import Main from './modules/common/Main';

const Home = lazy(() => import('./modules/home'));
const Detail = lazy(() => import('./modules/detail'));

function App(){
  return(
      <Fragment>
        <StrictMode>
        <Suspense fallback={<Progress type="circle" />}>
          <Main>
            <Router>
               <Home path="/"/>
               <Detail path="detail/:id" />
            </Router>
          </Main>
        </Suspense>
        </StrictMode>
      </Fragment>
  )
}

export default App;
