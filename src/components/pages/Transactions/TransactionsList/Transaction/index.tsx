import { ITransaction } from '../../../../../utils/interfaces';
import './transaction.scss';

interface IProps {
	transaction: ITransaction;
}

export default function Transaction({ transaction }: IProps) {
	const { id, clientId, createdAt, total, motorcycles } = transaction;

	return (
		<div className="transaction-container">
			<p>{id}</p>
			<p>Data: {createdAt.toLocaleDateString('pt-BR')}</p>
			<p>Hora: {createdAt.toLocaleTimeString('pt-BR')}</p>
			<p>Total: R${total.toLocaleString('pt-BR')}</p>
		</div>
	);
}
