import { useState } from 'react';
import { FiPlus, FiX } from 'react-icons/fi';
import CreateMotorcycleForm from '../MotorcycleForm';

export default function CreateMotorcycle() {
	const [isFormShown, setIsFormShown] = useState(false);

	const handleCreateMotorcycleClick = (isFormShown: boolean) => (e: any) => {
		setIsFormShown(!isFormShown);
	};

	return (
		<div className={`${isFormShown ? 'close' : 'open'} new-form-container`}>
			<button
				className={`${isFormShown ? 'close' : 'open'} new-form-button`}
				onClick={handleCreateMotorcycleClick(isFormShown)}
			>
				{isFormShown ? <FiX /> : <FiPlus />}
			</button>

			{isFormShown && <CreateMotorcycleForm />}
		</div>
	);
}
