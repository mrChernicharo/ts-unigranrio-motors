import * as React from 'react';
import { useAppContext } from '../../../context/AppContext';
import CreateTransaction from './CreateTransaction';
import TransactionList from './TransactionsList';

const Transactions = () => {
	const { transactions } = useAppContext();

	console.log(transactions);
	return (
		<div>
			<h1>Vendas</h1>

			<TransactionList transactions={transactions} />

			<CreateTransaction />
		</div>
	);
};

export default Transactions;
