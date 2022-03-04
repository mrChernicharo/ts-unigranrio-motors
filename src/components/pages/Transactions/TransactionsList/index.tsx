import { ITransaction } from '../../../../utils/interfaces';
import Transaction from './TransactionItem';

// import './transaction-list.scss';
interface IProps {
	transactions: ITransaction[];
}

export default function TransactionList({ transactions }: IProps) {
	return (
		<div className="container">
			{transactions.map(transaction => (
				<Transaction key={transaction.id} transaction={transaction} />
			))}
		</div>
	);
}
