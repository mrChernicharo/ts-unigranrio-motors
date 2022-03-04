import React, { useState } from 'react';
import { useAppContext } from '../../../context/AppContext';
import { ICompleteTransaction } from '../../../utils/interfaces';
import CreateTransaction from './CreateTransaction';
import TransactionList from './TransactionsList';
import TransactionsSearch from './TransactionsSearch';

const TransactionsPage = () => {
	const { transactions, completeTransactions } = useAppContext();

	const [shownTransactions, setShownTransactions] = useState<
		ICompleteTransaction[]
	>(() => [...completeTransactions]);

	const handleSearchChange = (searchStr: string) => {
		console.log(searchStr);

		if (searchStr === '') {
			setShownTransactions([...completeTransactions]);
			return;
		}

		setShownTransactions(
			shownTransactions.filter(
				transaction =>
					transaction.client.firstName.includes(searchStr) ||
					transaction.client.lastName.includes(searchStr)
			)
		);
	};

	console.log(transactions);
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
