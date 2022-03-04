import { useState } from 'react';
import { FiEdit, FiX } from 'react-icons/fi';
import { currency } from '../../../../utils/functions';
import { ITransaction } from '../../../../utils/interfaces';
import './transaction-details.scss';

interface IProps {
	transaction: ITransaction;
	onClose: (e: any) => void;
}

export default function TransactionDetails({ transaction, onClose }: IProps) {
	const { client, motorcycles, id, createdAt, total } = transaction;

	const [editingMode, setEditingMode] = useState(false);

	return (
		<>
			<div className="app-modal">
				<button onClick={onClose}>
					<FiX />
				</button>
				{editingMode ? (
					<>
						<button onClick={() => setEditingMode(false)}>
							<FiX />
						</button>
						{/* <MotorcycleForm motorcycle={motorcycle} /> */}
					</>
				) : (
					<>
						<button onClick={() => setEditingMode(true)}>
							<FiEdit />
						</button>
						<h5>
							{client.firstName}
							{client.lastName}
							<p>{id}</p>
						</h5>
						{/* <p>{description}</p> */}

						{/* <img src={imgURL} /> */}
						<p>{currency(total)}</p>
					</>
				)}
			</div>

			<div className="app-modal-overlay" onClick={onClose}></div>
		</>
	);
}
