import { ITransaction } from '../../../../utils/interfaces';
import Transaction from './Transaction';

// import './transaction-list.scss';
interface IProps {
	transactions: ITransaction[];
}

export default function TransactionList({ transactions }: IProps) {
	console.log(transactions);
	return (
		<div className="container">
			{transactions.map(transaction => (
				<Transaction key={transaction.id} transaction={transaction} />
			))}
		</div>
	);
}
