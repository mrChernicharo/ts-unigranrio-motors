import { nanoid } from 'nanoid';
import {
	createContext,
	useState,
	ReactNode,
	useContext,
	useEffect,
	useMemo,
} from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import {
	initialClients,
	initialMotorcycles,
	initialTransactions,
} from '../utils/constants';
import {
	IClient,
	IMotorcycle,
	IPartialClient,
	IPartialMotorcycle,
	IPartialTransaction,
	ITransaction,
	ITransactionMotorcycle,
} from '../utils/interfaces';

interface AppContext {
	clients: IClient[];
	motorcycles: IMotorcycle[];
	transactions: ITransaction[];

	createClient: (clientData: IPartialClient) => void;
	updateClient: (clientData: IClient) => void;

	createMotorcycle: (motorcycleData: IPartialMotorcycle) => void;
	updateMotorcycle: (motorcycleData: IMotorcycle) => void;

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
	updateMotorcycle: () => {},
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
		const newTransaction = buildCompleteTransaction(transactionData);

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

	const updateMotorcycle = (motorcycleData: IMotorcycle) => {
		console.log('update', motorcycleData);
		const { id } = motorcycleData;
		setMotorcycles(
			motorcycles.map(moto => (moto.id === id ? motorcycleData : moto))
		);
	};

	// helpers

	const getMoto = (id: string) => motorcycles.find(moto => moto.id === id);

	const getClient = (id: string) => clients.find(client => client.id === id);

	const buildCompleteTransaction = (
		transactionData: IPartialTransaction
	): ITransaction => {
		const client = getClient(transactionData.clientId) as IClient;
		const motorcycles = transactionData.motorcycles.map(moto => ({
			motorcycle: getMoto(moto.id) as IMotorcycle,
			quantity: moto.quantity,
		}));

		const result = {
			id: nanoid(),
			createdAt: new Date(),
			client,
			motorcycles,
			total: motorcycles.reduce(
				(acc, moto) =>
					(acc += (moto.motorcycle.price || 0) * moto.quantity),
				0
			),
		};

		console.log('createTransaction', {
			transactions,
			transactionData,
			result,
		});

		return result;
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

	useEffect(() => {
		// setCompleteTransactions(buildCompleteTransactions);
	}, [transactions]);

	const context: AppContext = {
		clients,
		motorcycles,
		transactions,
		createClient,
		updateClient,
		createMotorcycle,
		updateMotorcycle,
		createTransaction,
	};

	return (
		<AppContext.Provider value={context}>{children}</AppContext.Provider>
	);
};

export const useAppContext = () => useContext(AppContext);
