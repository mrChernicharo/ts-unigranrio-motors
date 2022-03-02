import * as React from 'react';
import { useAppContext } from '../../../context/AppContext';
import useClients from '../../../hooks/useClients';
import ClientsList from './ClientsList';
import CreateClient from './CreateClient';

const Clients = () => {
	const { clients } = useClients();
	return (
		<div>
			<h1>Clientes</h1>

			<ClientsList clients={clients} />

			<CreateClient />
		</div>
	);
};

export default Clients;
