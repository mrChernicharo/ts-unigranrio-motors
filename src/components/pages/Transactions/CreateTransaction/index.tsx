import { useState } from 'react';
import { FiPlus, FiX } from 'react-icons/fi';
import CreateClientForm from './CreateTransactionForm';

export default function CreateTransaction() {
	const [isFormShown, setIsFormShown] = useState(false);

	const handleCreateClientClick = (isFormShown: boolean) => (e: any) => {
		setIsFormShown(!isFormShown);
	};

	return (
		<div className={`new-form-container ${isFormShown ? 'open' : 'close'}`}>
			<button
				className={`new-form-button ${isFormShown ? 'close' : 'open'}`}
				onClick={handleCreateClientClick(isFormShown)}
			>
				{isFormShown ? <FiX /> : <FiPlus />}
			</button>

			{isFormShown && <CreateClientForm />}
		</div>
	);
}
