import Nav from "./components/shared/Nav";
import Global from "./hooks/Global";
import useClients from "./hooks/useClients";
import useMotorcycles from "./hooks/useMotorcycles";
import useTransactions from "./hooks/useTransactions";
import Router from "./Router";

interface Props { }

const App = () => {
	const { clients, createClient, deleteClient, updateClient } = useClients();
	const { motorcycles, createMotorcycle, deleteMotorcycle, updateMotorcycle } =
		useMotorcycles();
	const {
		transactions,
		createTransaction,
		deleteTransaction,
		updateTransaction,
	} = useTransactions();

	Global.clients = clients;
	Global.createClient = createClient;
	Global.deleteClient = deleteClient;
	Global.updateClient = updateClient;
	Global.motorcycles = motorcycles;
	Global.createMotorcycle = createMotorcycle;
	Global.deleteMotorcycle = deleteMotorcycle;
	Global.updateMotorcycle = updateMotorcycle;
	Global.transactions = transactions;
	Global.createTransaction = createTransaction;
	Global.deleteTransaction = deleteTransaction;
	Global.updateTransaction = updateTransaction;

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
