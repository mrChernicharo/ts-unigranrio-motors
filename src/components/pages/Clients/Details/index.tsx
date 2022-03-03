import { useState } from 'react';
import { FiEdit, FiTrash, FiX } from 'react-icons/fi';
import { capitalize } from '../../../../utils/functions';
import { IClient } from '../../../../utils/interfaces';
import ClientForm from '../Create/ClientForm';
import './client-details.scss';

interface IProps {
	client: IClient;
	onClose: (e: any) => void;
	onDelete: (id: string) => void;
}
export default function ClientDetails({ client, onClose, onDelete }: IProps) {
	const { id, email, firstName, lastName } = client;

	const [editingMode, setEditingMode] = useState(false);

	return (
		<>
			<div className="client-details-modal-container">
				<button onClick={onClose}>
					<FiX />
				</button>

				<button onClick={() => onDelete(id)}>
					<FiTrash />
				</button>

				<button onClick={() => setEditingMode(true)}>
					<FiEdit />
				</button>

				{editingMode ? (
					<>
						<ClientForm mode="edit" client={client} />
					</>
				) : (
					<>
						<h5>
							{capitalize(firstName)} {capitalize(lastName)}
						</h5>

						<p>{email}</p>

						<p>{id}</p>
					</>
				)}
			</div>

			<div className="overlay" onClick={onClose}></div>
		</>
	);
}
