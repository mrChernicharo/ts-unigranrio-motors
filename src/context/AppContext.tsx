import { nanoid } from 'nanoid';
import {
	createContext,
	useState,
	ReactNode,
	useContext,
	useEffect,
} from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import {
	initialClients,
	initialMotorcycles,
	initialTransactions,
} from '../utils/constants';
import { calcTotal } from '../utils/functions';
import {
	IClient,
	IMotorcycle,
	IPartialClient,
	IPartialMotorcycle,
	IPartialTransaction,
	ITransaction,
} from '../utils/interfaces';

interface AppContext {
	clients: IClient[];
	motorcycles: IMotorcycle[];
	transactions: ITransaction[];
	createClient: (clientData: IPartialClient) => void;
	updateClient: (clientData: IClient) => void;
	createMotorcycle: (motorcycleData: IPartialMotorcycle) => void;
	createTransaction: (TransactionData: IPartialTransaction) => void;
}
interface IAppContextProviderProps {
	children: ReactNode;
}

const AppContext = createContext<AppContext>({
	clients: [],
	motorcycles: [],
	transactions: [],
	createClient: () => {},
	updateClient: () => {},
	createMotorcycle: () => {},
	createTransaction: () => {},
});

export const AppContextProvider = ({ children }: IAppContextProviderProps) => {
	//prettier-ignore
	const [storedClients, setStoredClients] = useLocalStorage<IClient[]>('@clients',initialClients);
	const [storedMotorcycles, setStoredMotorcycles] = useLocalStorage<
		IMotorcycle[]
	>('@motorcycles', initialMotorcycles);
	const [storedTransactions, setStoredTransactions] = useLocalStorage<
		ITransaction[]
	>('@Transactions', []);

	const [clients, setClients] = useState<IClient[]>([]);
	const [motorcycles, setMotorcycles] = useState<IMotorcycle[]>([]);
	const [transactions, setTransactions] = useState<ITransaction[]>([]);

	const createClient = (clientData: IPartialClient) => {
		const newClient: IClient = { id: nanoid(), ...clientData };
		const updatedClients = [...clients, newClient];

		setStoredClients(updatedClients);
		setClients(updatedClients);
	};

	const createMotorcycle = (motorcycleData: IPartialMotorcycle) => {
		const newMoto: IMotorcycle = { id: nanoid(), ...motorcycleData };
		const updatedMotos = [...motorcycles, newMoto];

		setStoredMotorcycles(updatedMotos);
		setMotorcycles(updatedMotos);
	};

	const createTransaction = (transactionData: IPartialTransaction) => {
		const newTransaction: ITransaction = {
			id: nanoid(),
			createdAt: new Date(),

			...transactionData,
		};
		const updatedTransactions = [...transactions, newTransaction];
		setStoredTransactions(updatedTransactions);
		setTransactions(updatedTransactions);
	};

	const updateClient = (clientData: IClient) => {
		console.log('update ', clientData);
		const { id } = clientData;
		setClients(
			clients.map(client => (client.id === id ? clientData : client))
		);
	};

	useEffect(() => {
		console.log(initialTransactions);
		setClients((storedClients.length && storedClients) || initialClients);
		setMotorcycles(
			(storedMotorcycles.length && storedMotorcycles) ||
				initialMotorcycles
		);
		setTransactions(
			(storedTransactions.length && storedTransactions) ||
				initialTransactions
		);
	}, []);

	const context: AppContext = {
		clients,
		motorcycles,
		transactions,
		createClient,
		updateClient,
		createMotorcycle,
		createTransaction,
	};

	return (
		<AppContext.Provider value={context}>{children}</AppContext.Provider>
	);
};

export const useAppContext = () => useContext(AppContext);
