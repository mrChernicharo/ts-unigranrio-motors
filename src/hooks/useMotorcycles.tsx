import { useState } from 'react';
import { initialMotorcycles } from '../utils/constants';

const useMotorcycles = () => {
	const [motorcycles, setMotorcycles] = useState(initialMotorcycles);

	return {
		motorcycles,
		setMotorcycles,
	};
};

export default useMotorcycles;
