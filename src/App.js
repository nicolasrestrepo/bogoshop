import React, { lazy, Fragment, Suspense } from 'react';
import { Router } from '@reach/router';
import { Progress } from 'antd';
import Main from './modules/common/Main';

const Home = lazy(() => import('./modules/home'));
const Detail = lazy(() => import('./modules/detail'));

function App(){
  return(
      <Fragment>
        <Suspense fallback={<Progress type="circle" />}>
          <Main>
            <Router>
               <Home path="/"/>
               <Detail path="detail/:id" />
            </Router>
          </Main>
        </Suspense>
      </Fragment>
  )
}

export default App;
