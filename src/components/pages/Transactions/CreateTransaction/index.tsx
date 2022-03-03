import { useState } from 'react';
import { FiPlus, FiX } from 'react-icons/fi';
import './create-transaction.scss';
import CreateClientForm from './CreateTransactionForm';

export default function CreateTransaction() {
	const [isFormShown, setIsFormShown] = useState(false);

	const handleCreateClientClick = (isFormShown: boolean) => (e: any) => {
		setIsFormShown(!isFormShown);
	};

	return (
		<div className="container">
			<button onClick={handleCreateClientClick(isFormShown)}>
				{isFormShown ? <FiX /> : <FiPlus />}
			</button>

			{isFormShown && <CreateClientForm />}
		</div>
	);
}
