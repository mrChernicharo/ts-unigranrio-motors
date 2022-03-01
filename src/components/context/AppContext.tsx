import { createContext, useState, ReactNode, useContext } from 'react';
import { initialClients, initialMotorcycles } from '../../utils/constants';
import { IClient, IMotorcycle } from '../../utils/interfaces';

interface AppContext {
	clients: IClient[];
	motorcycles: IMotorcycle[];
}
interface IAppContextProviderProps {
	children: ReactNode;
}

const AppContext = createContext<AppContext>({
	clients: [],
	motorcycles: [],
});

export const AppContextProvider = ({ children }: IAppContextProviderProps) => {
	const [clients, setClients] = useState(initialClients);
	const [motorcycles, setMotorcycles] = useState(initialMotorcycles);

	const context: AppContext = {
		clients,
		motorcycles,
	};

	return (
		<AppContext.Provider value={context}>{children}</AppContext.Provider>
	);
};

export const useAppContext = () => useContext(AppContext);
