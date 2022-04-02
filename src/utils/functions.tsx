import {
	IClient,
	IMotorcycle,
	IPartialTransactionMotorcycle,
	ITransactionMotorcycle,
} from './interfaces';

export const capitalize = (str: string) =>
	`${str[0].toUpperCase()}${str.substring(1)}`;

export const toCurrency = (num: number) =>
	'R$' + num.toLocaleString('pt-BR') + ',00';

// prettier-ignore
export const toDate = (str: string | Date) =>
	`${new Date(str).toLocaleDateString('pt-BR')} às ${new Date(str).toLocaleTimeString('pt-BR')}`;

export const getClientById = (clients: IClient[], id: string) => {
	return clients.find(client => client.id === id);
};

export const getMotoById = (motorcycles: IMotorcycle[], id: string) => {
	return motorcycles.find(moto => moto.id === id);
};
