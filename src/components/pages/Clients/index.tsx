import * as React from 'react';
// import { useAppContext } from '../../../context/AppContext';
import ClientsList from './ClientsList';
import CreateClient from './ClientCreate';
import ClientDetails from './ClientDetails';
import Global from '../../../hooks/Global';

const Clients = () => {
	const { clients } = Global;

	return (
		<div className="page-container">
			<h1>Clientes</h1>

			<ClientsList clients={clients} />

			<CreateClient />
		</div>
	);
};

export default Clients;
