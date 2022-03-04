import { useState } from 'react';
import { FiEdit, FiEdit2, FiEdit3, FiTrash, FiX } from 'react-icons/fi';
import { IMotorcycle } from '../../../../utils/interfaces';
import MotorcycleForm from '../MotorcycleForm';
import './motorcycle-details.scss';

interface IProps {
	motorcycle: IMotorcycle;
	onClose: (e: any) => void;
	onDelete: (id: string) => void;
}
export default function MotorcycleDetails({
	motorcycle,
	onClose,
	onDelete,
}: IProps) {
	const { id, name, description, year, price, imgURL } = motorcycle;

	const [editingMode, setEditingMode] = useState(false);

	return (
		<>
			<div className="app-modal">
				<button onClick={onClose}>
					<FiX />
				</button>

				<button onClick={() => onDelete(id)}>
					<FiTrash />
				</button>

				{editingMode ? (
					<>
						<button onClick={() => setEditingMode(false)}>
							<FiX />
						</button>
						<MotorcycleForm motorcycle={motorcycle} />
					</>
				) : (
					<>
						<button onClick={() => setEditingMode(true)}>
							<FiEdit />
						</button>
						<h5>
							{name}
							<p>{year}</p>
						</h5>
						<p>{description}</p>

						<img src={imgURL} />
						<p>R${price}</p>
					</>
				)}
			</div>
			<div className="app-modal-overlay" onClick={onClose}></div>
		</>
	);
}
