import { useState } from 'react';
import { FiPlus, FiX } from 'react-icons/fi';
import CreateClientForm from './CreateClientForm';

export default function CreateClient() {
	const [isFormShown, setIsFormShown] = useState(false);

	const handleCreateClientClick = (isFormShown: boolean) => (e: any) => {
		setIsFormShown(!isFormShown);
	};

	return (
		<div>
			<button onClick={handleCreateClientClick(isFormShown)}>
				{isFormShown ? <FiX /> : <FiPlus />}
			</button>

			{isFormShown && <CreateClientForm />}
		</div>
	);
}
