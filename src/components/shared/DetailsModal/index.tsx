import { ReactNode, useState } from 'react';
import { FiEdit, FiTrash, FiX } from 'react-icons/fi';
import { currency } from '../../../utils/functions';
import { ITransaction } from '../../../utils/interfaces';

interface IProps {
	itemId: string;
	onClose: (e: any) => void;
	onDelete: (id: string) => void;
	children: ReactNode
}


const DetailsModal = ({
	itemId,
	onClose,
	onDelete,
	children
}: IProps) => {
	const [editingMode, setEditingMode] = useState(false);

	return (
		<>
			<div className="app-modal">
				<button onClick={onClose}>
					<FiX />
				</button>

				<button onClick={() => onDelete(itemId)}>
					<FiTrash />
				</button>

				<button onClick={() => setEditingMode(true)}>
					<FiEdit />
				</button>

				{editingMode ? (
					<>
						<button onClick={() => setEditingMode(false)}>
							<FiX />
						</button>
						<>{children}</>
					</>
				) : (
					<>{children}</>
				)}
			</div>

			<div className="app-modal-overlay" onClick={onClose}></div>
		</>)
}

export default DetailsModal