import Nav from "./components/shared/Nav";
import Global, { IGlobal } from "./hooks/Global";
import useClients from "./hooks/useClients";
import useMotorcycles from "./hooks/useMotorcycles";
import useTransactions from "./hooks/useTransactions";
import Router from "./Router";


const setGlobalState = (globalData: IGlobal) => {
	Global.clients = globalData.clients;
	Global.createClient = globalData.createClient;
	Global.deleteClient = globalData.deleteClient;
	Global.updateClient = globalData.updateClient;
	Global.motorcycles = globalData.motorcycles;
	Global.createMotorcycle = globalData.createMotorcycle;
	Global.deleteMotorcycle = globalData.deleteMotorcycle;
	Global.updateMotorcycle = globalData.updateMotorcycle;
	Global.transactions = globalData.transactions;
	Global.createTransaction = globalData.createTransaction;
	Global.deleteTransaction = globalData.deleteTransaction;
	Global.updateTransaction = globalData.updateTransaction;
}



const App = () => {
	const clients = useClients();
	const motos = useMotorcycles();
	const trans = useTransactions();

	setGlobalState({ ...clients, ...motos, ...trans })

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

