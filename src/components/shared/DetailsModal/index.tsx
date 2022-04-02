import { ReactNode, useState } from 'react';
import { FiEdit, FiTrash, FiX } from 'react-icons/fi';
import { toCurrency } from '../../../utils/functions';
import { ITransaction } from '../../../utils/interfaces';

interface IProps {
	onClose: (e: any) => void;
	children: ReactNode;
}

const DetailsModal = ({ onClose, children }: IProps) => {
	return (
		<>
			<div className="app-modal">
				<header>
					<button onClick={onClose}>
						<FiX />
					</button>
				</header>

				<main>{children}</main>
			</div>

			<div className="app-modal-overlay" onClick={onClose}></div>
		</>
	);
};

export default DetailsModal;
