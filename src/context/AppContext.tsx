import { nanoid } from 'nanoid';
import {
	createContext,
	useState,
	ReactNode,
	useContext,
	useEffect,
} from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { initialClients, initialMotorcycles } from '../utils/constants';
import {
	IClient,
	IMotorcycle,
	IPartialClient,
	IPartialMotorcycle,
} from '../utils/interfaces';

interface AppContext {
	clients: IClient[];
	motorcycles: IMotorcycle[];
	createClient: (clientData: IPartialClient) => void;
	createMotorcycle: (motorcycleData: IPartialMotorcycle) => void;
}
interface IAppContextProviderProps {
	children: ReactNode;
}

const AppContext = createContext<AppContext>({
	clients: [],
	motorcycles: [],
	createClient: () => {},
	createMotorcycle: () => {},
});

export const AppContextProvider = ({ children }: IAppContextProviderProps) => {
	const [storedClients, setStoredClients] = useLocalStorage<IClient[]>(
		'@clients',
		initialClients
	);
	const [storedMotorcycles, setStoredMotorcycles] = useLocalStorage<
		IMotorcycle[]
	>('@motorcycles', initialMotorcycles);

	const [clients, setClients] = useState<IClient[]>([]);
	const [motorcycles, setMotorcycles] = useState<IMotorcycle[]>([]);

	const createClient = (clientData: IPartialClient) => {
		const newClient: IClient = { id: nanoid(), ...clientData };
		const updatedClients = [...clients, newClient];

		setStoredClients(updatedClients);
		setClients(updatedClients);
	};

	const createMotorcycle = (motorcycleData: IPartialMotorcycle) => {
		const newMoto: IMotorcycle = { id: nanoid(), ...motorcycleData };
		const updatedMotos = [...motorcycles, newMoto];

		setStoredMotorcycles(updatedMotos);
		setMotorcycles(updatedMotos);
	};

	useEffect(() => {
		setClients(storedClients || initialClients);
		setMotorcycles(storedMotorcycles || initialMotorcycles);
	}, []);

	const context: AppContext = {
		clients,
		motorcycles,
		createClient,
		createMotorcycle,
	};

	return (
		<AppContext.Provider value={context}>{children}</AppContext.Provider>
	);
};

export const useAppContext = () => useContext(AppContext);
