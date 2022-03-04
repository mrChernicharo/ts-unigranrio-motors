import React, { useEffect, useState } from 'react';
import { useAppContext } from '../../../context/AppContext';
import { ITransaction } from '../../../utils/interfaces';
import CreateTransaction from './CreateTransaction';
import TransactionList from './TransactionsList';
import TransactionsSearch from './TransactionsSearch';
import './transaction-page.scss';

const TransactionsPage = () => {
	const { transactions } = useAppContext();

	// prettier-ignore
	const [shownTransactions, setShownTransactions] = useState<ITransaction[]>([...transactions]);
	const [searchTerm, setSearchTerm] = useState('');

	const handleSearchChange = (searchStr: string) => {
		setSearchTerm(searchStr.toLowerCase());
	};

	useEffect(() => {
		if (searchTerm === '') {
			setShownTransactions([...transactions]);
		} else {
			setShownTransactions(
				transactions.filter(transaction => {
					const clientName = `${transaction.client.firstName.toLowerCase()} ${transaction.client.lastName.toLowerCase()}`;
					const motoNames = transaction.motorcycles
						.map(moto => moto.motorcycle.name.toLowerCase())
						.join(' ');

					console.log({ clientName, motoNames, searchTerm });

					return (
						clientName.includes(searchTerm) ||
						motoNames.includes(searchTerm) ||
						transaction.total.toString().includes(searchTerm)
					);
				})
			);
		}
	}, [searchTerm, transactions]);

	return (
		<div className="page-container">
			<h1>Vendas</h1>
			<div className="search-input-container">
				<TransactionsSearch onChange={handleSearchChange} />
			</div>

			<TransactionList transactions={shownTransactions} />

			<CreateTransaction />
		</div>
	);
};

export default TransactionsPage;
