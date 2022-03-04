import { nanoid } from 'nanoid';
import { getCient, getMoto } from '../../../../../utils/functions';
import {
	ICompleteTransaction,
	ITransaction,
} from '../../../../../utils/interfaces';
import './transaction.scss';

interface IProps {
	transaction: ICompleteTransaction;
}

export default function TransactionItem({ transaction }: IProps) {
	const { id, client, createdAt, total, motorcycles } = transaction;

	const { firstName, lastName } = client;

	return (
		<div className="transaction-container">
			<p>id: {id}</p>

			<p>Cliente: </p>
			{`${firstName} ${lastName}`}

			<p>Data: {new Date(createdAt).toLocaleDateString('pt-BR')}</p>
			<p>Hora: {new Date(createdAt).toLocaleTimeString('pt-BR')}</p>
			<p>Produtos:</p>
			{motorcycles.map(moto => (
				<div key={nanoid()}>{moto.motorcycle.name}</div>
			))}
			<p>Total: R${total.toLocaleString('pt-BR')}</p>
		</div>
	);
}
