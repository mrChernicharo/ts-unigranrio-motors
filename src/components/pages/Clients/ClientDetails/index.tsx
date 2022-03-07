import { useState } from "react";
import { FiEdit, FiTrash, FiX } from "react-icons/fi";
import { capitalize } from "../../../../utils/functions";
import { IClient } from "../../../../utils/interfaces";
import DetailsModal from "../../../shared/DetailsModal";
import ClientForm from "../ClientForm";
import "./client-details.scss";

interface IProps {
	client: IClient;
	onClose: (e: any) => void;
	onDelete: (id: string) => void;
}
export default function ClientDetails({ client, onClose, onDelete }: IProps) {
	const { id, email, firstName, lastName } = client;

	const [editingMode, setEditingMode] = useState(false);

	return (
		<DetailsModal onClose={onClose}>

			<button onClick={() => onDelete(id)}>
				<FiTrash />
			</button>

			{editingMode ? (
				<>
					<button onClick={() => setEditingMode(false)}>
						<FiX />
					</button>

					<ClientForm mode="edit" client={client} />
				</>
			) : (
				<>
					<button onClick={() => setEditingMode(true)}>
						<FiEdit />
					</button>

					<h5>
						{capitalize(firstName)} {capitalize(lastName)}
					</h5>

					<p>{email}</p>

					<p>{id}</p>
				</>
			)}
		</DetailsModal>
	);
}
