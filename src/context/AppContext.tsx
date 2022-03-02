import { nanoid } from 'nanoid';
import { createContext, useState, ReactNode, useContext, useEffect } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { initialClients, initialMotorcycles } from '../utils/constants';
import { IClient, IMotorcycle, IPartialClient } from '../utils/interfaces';

interface AppContext {
	clients: IClient[];
	motorcycles: IMotorcycle[];
	createClient: (clientData: IPartialClient) => void;
}
interface IAppContextProviderProps {
	children: ReactNode;
}

const AppContext = createContext<AppContext>({
	clients: [],
	motorcycles: [],
	createClient: () => { },
});

export const AppContextProvider = ({ children }: IAppContextProviderProps) => {
	const [storedClients, setStoredClients] = useLocalStorage<IClient[]>('@clients', initialClients)
	const [storedMotorcycles, setStoredMotorcycles] = useLocalStorage<IMotorcycle[]>('@motorcycles', initialMotorcycles)


	const [clients, setClients] = useState<IClient[]>([]);
	const [motorcycles, setMotorcycles] = useState<IMotorcycle[]>([]);

	const createClient = (clientData: IPartialClient) => {
		const newClient = { id: nanoid(), ...clientData } as IClient;
		const updatedClients = [...clients, newClient]

		setStoredClients(updatedClients)
		setClients(updatedClients)
	}

	useEffect(() => {
		setClients(storedClients || initialClients)
		setMotorcycles(storedMotorcycles || initialMotorcycles)
	}, [])

	const context: AppContext = {
		clients,
		motorcycles,
		createClient,
	};

	return <AppContext.Provider value={context}>{children}</AppContext.Provider>
};

export const useAppContext = () => useContext(AppContext);
