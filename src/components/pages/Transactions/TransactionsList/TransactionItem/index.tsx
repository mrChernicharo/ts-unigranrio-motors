import { useState } from 'react';
import { nanoid } from 'nanoid';
import { currency } from '../../../../../utils/functions';
import { ITransaction } from '../../../../../utils/interfaces';
import './transaction.scss';
import TransactionDetails from '../../TransactionDetails';

interface IProps {
	transaction: ITransaction;
}

export default function TransactionItem({ transaction }: IProps) {
	const { id, client, createdAt, total, motorcycles } = transaction;
	const { firstName, lastName } = client;

	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

	const handleDetailsModalOpen = (e: any) => {
		setIsModalOpen(true);
	};
	const handleDetailsModalClose = (e: any) => {
		e.stopPropagation();
		setIsModalOpen(false);
	};

	return (
		<>
			<div
				className="transaction-container app-card"
				onClick={handleDetailsModalOpen}
			>
				<p>Cliente: {`${firstName} ${lastName}`}</p>

				<p>Itens:</p>
				<ul className="transaction-itens-ul">
					{motorcycles.length > 0 &&
						motorcycles.map(moto => {
							const {
								quantity,
								motorcycle: {
									name = '',
									imgURL = '',
									price = 0,
								},
							} = moto;

							return (
								<li key={nanoid()}>
									<p>
										{name} {currency(price)}
										{quantity > 1 && (
											<span>
												{
													/* prettier-ignore */
													`( x${quantity} ${currency(price * quantity)} )`
												}
											</span>
										)}
									</p>
								</li>
							);
						})}
				</ul>
				<p>Total: {currency(total)}</p>

				<hr />
				<p>
					Data Pedido:{' '}
					{new Date(createdAt).toLocaleDateString('pt-BR')} às{' '}
					{new Date(createdAt).toLocaleTimeString('pt-BR')}
				</p>

				<p>Id Pedido: {id}</p>
			</div>

			{isModalOpen && (
				<TransactionDetails
					transaction={transaction}
					onClose={handleDetailsModalClose}
				/>
			)}
		</>
	);
}
