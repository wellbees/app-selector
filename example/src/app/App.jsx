import React from 'react';

import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { HomePage, PageOne, PageTwo } from './Pages';

import { AppSelectorProvider } from 'example-component';
import selectorConfig from './selectorConfig';

const App = () => {
	return (
		<AppSelectorProvider config={selectorConfig}>
			<BrowserRouter>
				<Routes>
					<Route path="/">
						<Route index element={<HomePage />} />
						<Route path="page-one" element={<PageOne />} />
						<Route path="page-two" element={<PageTwo />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</AppSelectorProvider>
	);
};

export default App;
