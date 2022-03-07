import { nanoid } from 'nanoid';
import {
	useState,
	useEffect,
} from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import {
	initialTransactions,
} from '../utils/constants';
import {
	IClient,
	IMotorcycle,
	IPartialTransaction,
	ITransaction,
} from '../utils/interfaces';


const useTransactions = () => {
	const [storedTransactions, setStoredTransactions] = useLocalStorage<
		ITransaction[]
	>('@transactions', []);

	const getClient = (id: string) => (JSON.parse(localStorage.getItem('@clients') || '') as IClient[]).find(client => client.id === id)
	const getMoto = (id: string) => (JSON.parse(localStorage.getItem('@motorcycles') || '') as IMotorcycle[]).find(moto => moto.id === id)

	const [transactions, setTransactions] = useState<ITransaction[]>([]);


	const createTransaction = (transactionData: IPartialTransaction) => {
		const newTransaction = buildCompleteTransaction(transactionData);

		const updatedTransactions = [...transactions, newTransaction];
		setStoredTransactions(updatedTransactions);
		setTransactions(updatedTransactions);
	};

	const updateTransaction = (transactionData: ITransaction) => {
		console.log('update transaction', { transactionData });
	};

	const deleteTransaction = (id: string) => {
		return setTransactions(
			transactions.filter(transaction => transaction.id !== id)
		);
	};

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
		setTransactions(
			(storedTransactions.length && storedTransactions) ||
			initialTransactions
		);
	}, []);

	useEffect(() => {
		setStoredTransactions(transactions)
	}, [transactions]);

	return {
		transactions,
		createTransaction,
		deleteTransaction,
		updateTransaction,
	}


}

export default useTransactions