import { nanoid } from 'nanoid';
import { getCient, getMoto } from '../../../../../utils/functions';
import { ITransaction } from '../../../../../utils/interfaces';
import './transaction.scss';

interface IProps {
	transaction: ITransaction;
}

export default function Transaction({ transaction }: IProps) {
	const { id, clientId, createdAt, total, motorcycles } = transaction;

	return (
		<div className="transaction-container">
			<p>id: {id}</p>

			<p>Cliente: </p>
			{`${getCient(clientId)?.firstName} ${getCient(clientId)?.lastName}`}

			<p>Data: {new Date(createdAt).toLocaleDateString('pt-BR')}</p>
			<p>Hora: {new Date(createdAt).toLocaleTimeString('pt-BR')}</p>
			<p>Produtos:</p>
			{motorcycles.map(moto => (
				<div key={nanoid()}>{getMoto(moto.id)?.name}</div>
			))}
			<p>Total: R${total.toLocaleString('pt-BR')}</p>
		</div>
	);
}
