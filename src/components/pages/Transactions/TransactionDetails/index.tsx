import { useState } from "react";
import { FiEdit, FiTrash, FiX } from "react-icons/fi";
import { currency } from "../../../../utils/functions";
import { ITransaction } from "../../../../utils/interfaces";
import DetailsModal from "../../../shared/DetailsModal";
import TransactionForm from "../TransactionForm";
import "./transaction-details.scss";

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
		<DetailsModal onClose={onClose}>
			<>
				<button onClick={() => onDelete(id)}>
					<FiTrash />
				</button>

				{editingMode ? (
					<>
						<button onClick={() => setEditingMode(false)}>
							<FiX />
						</button>
						<TransactionForm transaction={transaction} />
					</>
				) : (
					<>
						<button onClick={() => setEditingMode(true)}>
							<FiEdit />
						</button>

						<h5>
							{client.firstName} {client.lastName}
							<p>{id}</p>
						</h5>

						{Object.entries(transaction.client).map(([k, v]) => (
							<p>
								<span className="key">{k}</span>:{v}
							</p>
						))}

						<hr />
						{transaction.motorcycles.map((moto) => (
							<ul>
								{Object.entries(moto.motorcycle).map(([k, v]) => (
									<li>
										<p><span className="key">{k}</span>:{v}</p>
									</li>
								))}
							</ul>
						))}

						<p>{currency(total)}</p>
					</>
				)}
			</>
		</DetailsModal>
	);
}
