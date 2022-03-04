import * as React from 'react';
import { useAppContext } from '../../../../context/AppContext';
import { IClient } from '../../../../utils/interfaces';
import ClientItem from './ClientItem';

interface IClientsListProps {
	clients: IClient[];
}

export default function ClientsList({ clients }: IClientsListProps) {
	const { deleteClient } = useAppContext();

	const handleDeleteClient = (id: string) => deleteClient(id);

	return (
		<div className="clients-list">
			{clients.map(client => (
				<ClientItem
					key={client.id}
					client={client}
					onDelete={handleDeleteClient}
				/>
			))}
		</div>
	);
}
