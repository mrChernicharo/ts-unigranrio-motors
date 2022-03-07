import { nanoid } from 'nanoid';
import {
	useState,
	useEffect,
	useMemo,
} from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import {
	initialClients,
	initialTransactions,
} from '../utils/constants';
import {
	IClient,
	IPartialClient,
} from '../utils/interfaces';

const useClients = () => {
	const [storedClients, setStoredClients] = useLocalStorage<IClient[]>('@clients', initialClients);
	const [clients, setClients] = useState<IClient[]>([]);

	const createClient = (clientData: IPartialClient) => {
		const newClient: IClient = { id: nanoid(), ...clientData };
		const updatedClients = [...clients, newClient];

		setClients(updatedClients);
	};

	const updateClient = (clientData: IClient) => {
		console.log('update ', clientData);
		const { id } = clientData;
		setClients(
			clients.map(client => (client.id === id ? clientData : client))
		);

	};

	const deleteClient = (id: string) => {
		return setClients(clients.filter(client => client.id !== id));
	};

	// helpers
	const getClient = (id: string) => clients.find(client => client.id === id);

	useEffect(() => {
		console.log(initialTransactions);
		setClients((storedClients.length && storedClients) || initialClients);
	}, []);

	useEffect(() => {
		setStoredClients(clients);

	}, [clients])

	return {
		clients,
		getClient,
		createClient,
		updateClient,
		deleteClient,
	}
}
export default useClients