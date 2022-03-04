export interface IClient {
	id: string;
	firstName: string;
	lastName: string;
	email: string;
}

export type IPartialClient = Omit<IClient, 'id'>;

export interface IMotorcycle {
	id: string;
	name: string;
	description: string;
	year: number;
	price: number;
	imgURL: string;
}

export type IPartialMotorcycle = Omit<IMotorcycle, 'id'>;
export type ITransactionMotorcycle = { id: string; quantity: number };
export type ITransactionCompleteMotorcycle = {
	motorcycle: IMotorcycle;
	quantity: number;
};

export interface ITransaction {
	id: string;
	clientId: string;
	motorcycles: ITransactionMotorcycle[];
	total: number;
	createdAt: Date;
}

export interface ICompleteTransaction {
	id: string;
	client: IClient;
	motorcycles: ITransactionCompleteMotorcycle[];
	total: number;
	createdAt: Date;
}

export type IPartialTransaction = Omit<ITransaction, 'id' | 'createdAt'>;
