import * as React from 'react';
import { IClient } from '../../../../utils/interfaces';
import Client from './ClientItem';

interface IClientsListProps {
	clients: IClient[];
}

export default function ClientsList({ clients }: IClientsListProps) {
	return (
		<div className="clients-list">
			{clients.map(client => (
				<Client key={client.id} client={client} />
			))}
		</div>
	);
}
