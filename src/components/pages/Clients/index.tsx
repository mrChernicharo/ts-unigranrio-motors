import * as React from 'react';
import { useAppContext } from '../../../context/AppContext';
import ClientsList from './ClientsList';
import CreateClient from './Create';
import ClientDetails from './Details';

const Clients = () => {
	const { clients } = useAppContext();

	return (
		<div>
			<h1>Clientes</h1>

			<ClientsList clients={clients} />

			<CreateClient />
		</div>
	);
};

export default Clients;
