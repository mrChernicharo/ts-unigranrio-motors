import { BrowserRouter, Routes, Route } from "react-router-dom";
import Clients from "./components/pages/Clients";
import Home from "./components/pages/Home";
import Motorcycles from "./components/pages/Motorcycles";
import TransactionsPage from "./components/pages/Transactions";
import Nav from "./components/shared/Nav";
import "./global.scss";

function Router() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/clients" element={<Clients />} />
			<Route path="/motorcycles" element={<Motorcycles />} />
			<Route path="/transactions" element={<TransactionsPage />} />
		</Routes>
	);
}

export default Router;
