import { nanoid } from 'nanoid';
import { currency } from '../../../../../utils/functions';
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
			<p>Pedido:</p>
			<ul>
				{motorcycles.length > 0 &&
					motorcycles.map(moto => {
						const {
							quantity,
							motorcycle: { name = '', imgURL = '', price = 0 },
						} = moto;

						return (
							<li key={nanoid()}>
								<p>
									{name} x{quantity} {price}
								</p>
							</li>
						);
					})}
			</ul>
			<p>Total: {currency(total)}</p>
		</div>
	);
}
