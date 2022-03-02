import { useState } from 'react';
import { initialClients } from '../utils/constants';

const useClients = () => {
	const [clients, setClients] = useState(initialClients);

	return {
		clients,
		setClients,
	};
};

export default useClients;
