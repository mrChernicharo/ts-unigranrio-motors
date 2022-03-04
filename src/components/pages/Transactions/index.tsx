import React, { useState } from 'react';
import { useAppContext } from '../../../context/AppContext';
import { ICompleteTransaction } from '../../../utils/interfaces';
import CreateTransaction from './CreateTransaction';
import TransactionList from './TransactionsList';
import TransactionsSearch from './TransactionsSearch';

const TransactionsPage = () => {
	const { completeTransactions } = useAppContext();

	// prettier-ignore
	const [shownTransactions, setShownTransactions] = useState<ICompleteTransaction[]>(() => [...completeTransactions]);

	const handleSearchChange = (searchStr: string) => {
		searchStr = searchStr.toLowerCase();

		if (searchStr === '') {
			setShownTransactions([...completeTransactions]);
			return;
		}

		setShownTransactions(
			completeTransactions.filter(
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
