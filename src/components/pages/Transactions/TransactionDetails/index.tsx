import { useState } from 'react';
import { FiEdit, FiTrash, FiX } from 'react-icons/fi';
import { currency } from '../../../../utils/functions';
import { ITransaction } from '../../../../utils/interfaces';
import DetailsModal from '../../../shared/DetailsModal';
import './transaction-details.scss';

interface IProps {
	transaction: ITransaction;
	onClose: (e: any) => void;
	onDelete: (id: string) => void;
}

export default function TransactionDetails({
	transaction,
	onClose,
	onDelete,
}: IProps) {
	const { client, motorcycles, id, createdAt, total } = transaction;

	const [editingMode, setEditingMode] = useState(false);

	return (
		<DetailsModal itemId={id} onClose={onClose} onDelete={onDelete} >
			<>

				<h5>
					{client.firstName}
					{client.lastName}
					<p>{id}</p>
				</h5>
				{/* <p>{description}</p> */}

				{/* <img src={imgURL} /> */}
				<p>{currency(total)}</p>
			</>
		</DetailsModal>
	);
}
