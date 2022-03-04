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
	deleteClient: (id: string) => void;

	createMotorcycle: (motorcycleData: IPartialMotorcycle) => void;
	updateMotorcycle: (motorcycleData: IMotorcycle) => void;
	deleteMotorcycle: (id: string) => void;

	createTransaction: (TransactionData: IPartialTransaction) => void;
	updateTransaction: (TransactionData: ITransaction) => void;
	deleteTransaction: (id: string) => void;
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
	deleteClient: () => {},
	createMotorcycle: () => {},
	updateMotorcycle: () => {},
	deleteMotorcycle: () => {},
	createTransaction: () => {},
	updateTransaction: () => {},
	deleteTransaction: () => {},
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
	const updateTransaction = (transactionData: ITransaction) => {
		console.log('update transaction', { transactionData });
	};

	const deleteClient = (id: string) => {
		return setClients(clients.filter(client => client.id !== id));
	};
	const deleteMotorcycle = (id: string) => {
		return setMotorcycles(motorcycles.filter(moto => moto.id !== id));
	};
	const deleteTransaction = (id: string) => {
		return setTransactions(
			transactions.filter(transaction => transaction.id !== id)
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
		deleteClient,
		createMotorcycle,
		updateMotorcycle,
		deleteMotorcycle,
		createTransaction,
		updateTransaction,
		deleteTransaction,
	};

	return (
		<AppContext.Provider value={context}>{children}</AppContext.Provider>
	);
};

export const useAppContext = () => useContext(AppContext);
