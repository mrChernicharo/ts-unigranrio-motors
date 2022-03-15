import {
	IClient,
	IMotorcycle,
	ITransaction,
	IPartialClient,
	IPartialMotorcycle,
	IPartialTransaction,
} from '../utils/interfaces';

export interface IGlobal {
	clients: IClient[];
	motorcycles: IMotorcycle[];
	transactions: ITransaction[];

	getClient: (id: string) => void;
	createClient: (clientData: IPartialClient) => void;
	updateClient: (clientData: IClient) => void;
	deleteClient: (id: string) => void;

	getMoto: (id: string) => void;
	createMotorcycle: (motorcycleData: IPartialMotorcycle) => void;
	updateMotorcycle: (motorcycleData: IMotorcycle) => void;
	deleteMotorcycle: (id: string) => void;

	createTransaction: (TransactionData: IPartialTransaction) => void;
	updateTransaction: (TransactionData: IPartialTransaction) => void;
	deleteTransaction: (id: string) => void;
}

export const setGlobalState = (globalData: IGlobal) => {
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
};

const Global = {
	clients: [],
	motorcycles: [],
	transactions: [],
	getClient: () => {},
	createClient: () => {},
	updateClient: () => {},
	deleteClient: () => {},
	getMoto: () => {},
	createMotorcycle: () => {},
	updateMotorcycle: () => {},
	deleteMotorcycle: () => {},
	createTransaction: () => {},
	updateTransaction: () => {},
	deleteTransaction: () => {},
} as IGlobal;

export default Global;
