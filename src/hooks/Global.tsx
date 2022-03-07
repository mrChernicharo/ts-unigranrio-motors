import { IClient, IMotorcycle, ITransaction, IPartialClient, IPartialMotorcycle, IPartialTransaction } from "../utils/interfaces"

interface IGlobal {
	clients?: IClient[];
	motorcycles?: IMotorcycle[];
	transactions?: ITransaction[];

	getClient?: (id: string) => void;
	createClient?: (clientData: IPartialClient) => void;
	updateClient?: (clientData: IClient) => void;
	deleteClient?: (id: string) => void;

	getMoto?: (id: string) => void;
	createMotorcycle?: (motorcycleData: IPartialMotorcycle) => void;
	updateMotorcycle?: (motorcycleData: IMotorcycle) => void;
	deleteMotorcycle?: (id: string) => void;

	createTransaction?: (TransactionData: IPartialTransaction) => void;
	updateTransaction?: (TransactionData: ITransaction) => void;
	deleteTransaction?: (id: string) => void;
}

const Global: IGlobal = {}

export default Global 