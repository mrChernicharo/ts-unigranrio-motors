import { useAppContext } from '../../../../context/AppContext';
import { ITransaction } from '../../../../utils/interfaces';
import Transaction from './TransactionItem';

import './transaction-list.scss';
import Global from '../../../../hooks/Global';

interface IProps {
	transactions: ITransaction[];
}

export default function TransactionList({ transactions }: IProps) {
	const { deleteTransaction } = Global;

	const handleDeleteTransaction = (id: string) => deleteTransaction(id);

	return (
		<ul className="list-container">
			{transactions.map(transaction => (
				<Transaction
					key={transaction.id}
					transaction={transaction}
					onDelete={handleDeleteTransaction}
				/>
			))}
		</ul>
	);
}
