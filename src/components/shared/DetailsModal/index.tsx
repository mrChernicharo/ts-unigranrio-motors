import { ReactNode, useState } from 'react';
import { FiEdit, FiTrash, FiX } from 'react-icons/fi';
import { currency } from '../../../utils/functions';
import { ITransaction } from '../../../utils/interfaces';

interface IProps {
	onClose: (e: any) => void;
	children: ReactNode;
}

const DetailsModal = ({ onClose, children }: IProps) => {
	return (
		<>
			<div className="app-modal">
				<button onClick={onClose}>
					<FiX />
				</button>

				<hr />
				{children}
			</div>

			<div className="app-modal-overlay" onClick={onClose}></div>
		</>
	);
};

export default DetailsModal;
