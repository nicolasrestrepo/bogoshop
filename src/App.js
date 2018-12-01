import React, { lazy, Suspense, StrictMode } from "react";
import { Router } from "@reach/router";
import { Progress } from "antd";
import { StoreProvider } from "redux-react-hook";
import "antd/dist/antd.css";
import Main from "./modules/common/Main";
import store from './redux/store';

const Home = lazy(() => import("./modules/home"));
const Detail = lazy(() => import("./modules/detail"));


function App() {
	return (
		<StoreProvider value={store}>
			<StrictMode>
				<Suspense fallback={<Progress type="circle" />}>
					<Main>
						<Router>
							<Home path="/" />
							<Detail path="detail/:id" />
						</Router>
					</Main>
				</Suspense>
			</StrictMode>
		</StoreProvider>
	);
}

export default App;
