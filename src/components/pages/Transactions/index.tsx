import React, { useState } from 'react';
import { useAppContext } from '../../../context/AppContext';
import { ITransaction } from '../../../utils/interfaces';
import CreateTransaction from './CreateTransaction';
import TransactionList from './TransactionsList';
import TransactionsSearch from './TransactionsSearch';

const TransactionsPage = () => {
	const { transactions } = useAppContext();

	// prettier-ignore
	const [shownTransactions, setShownTransactions] = useState<ITransaction[]>(() => [...transactions]);

	const handleSearchChange = (searchStr: string) => {
		searchStr = searchStr.toLowerCase();

		if (searchStr === '') {
			setShownTransactions([...transactions]);
			return;
		}

		setShownTransactions(
			transactions.filter(
				transaction =>
					transaction.client.firstName
						.toLowerCase()
						.includes(searchStr) ||
					transaction.client.lastName
						.toLowerCase()
						.includes(searchStr) ||
					transaction.total.toString().includes(searchStr)
			)
		);
	};

	return (
		<div>
			<h1>Vendas</h1>

			<TransactionsSearch onChange={handleSearchChange} />

			<TransactionList transactions={shownTransactions} />

			<CreateTransaction />
		</div>
	);
};

export default TransactionsPage;
