import { useState } from 'react';
import { FiPlus, FiX } from 'react-icons/fi';
import CreateClientForm from '../ClientForm';

export default function CreateClient() {
	const [isFormShown, setIsFormShown] = useState(false);

	const handleCreateClientClick = (isFormShown: boolean) => (e: any) => {
		setIsFormShown(!isFormShown);
	};

	return (
		<div className="new-form-button-container">
			<button
				className={`${isFormShown ? 'close' : 'open'} new-form-button`}
				onClick={handleCreateClientClick(isFormShown)}
			>
				{isFormShown ? <FiX /> : <FiPlus />}
			</button>

			{isFormShown && <CreateClientForm mode="create" />}
		</div>
	);
}
