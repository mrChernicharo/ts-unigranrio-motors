import Nav from './components/shared/Nav';
import { setGlobalState } from './hooks/Global';
import useClients from './hooks/useClients';
import useMotorcycles from './hooks/useMotorcycles';
import useTransactions from './hooks/useTransactions';
import Router from './Router';

const App = () => {
	const clients = useClients();
	const motos = useMotorcycles();
	const trans = useTransactions();

	setGlobalState({ ...clients, ...motos, ...trans });

	return (
		<>
			<div className="App">
				<Nav />
				<Router />
			</div>
		</>
	);
};

export default App;
