import { useState } from 'react';
import { FiEdit, FiEdit2, FiEdit3, FiX } from 'react-icons/fi';
import { IMotorcycle } from '../../../../utils/interfaces';
import MotorcycleForm from '../MotorcycleForm';
import './motorcycle-details.scss';

interface IProps {
	motorcycle: IMotorcycle;
	onClose: (e: any) => void;
}
export default function MotorcycleDetails({ motorcycle, onClose }: IProps) {
	const { name, description, year, price, imgURL } = motorcycle;

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
