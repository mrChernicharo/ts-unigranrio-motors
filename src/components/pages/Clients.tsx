import * as React from 'react';
import { useAppContext } from '../context/AppContext';

const Clients = () => {
	const { clients } = useAppContext();
	return (
		<div>
			<h1>Clients</h1>

			{clients.map(client => (
				<>
					<p>{client.email}</p>
				</>
			))}
		</div>
	);
};

export default Clients;
