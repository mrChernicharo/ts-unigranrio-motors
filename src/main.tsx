import React from 'react';
import ReactDOM from 'react-dom';
import { AppContextProvider } from './context/AppContext';
import './global.scss';
import Router from './Router';

ReactDOM.render(
	<React.StrictMode>
		<AppContextProvider>
			<Router />
		</AppContextProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
