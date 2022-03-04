import { useAppContext } from '../context/AppContext';
import { IClient, IMotorcycle, ITransactionMotorcycle } from './interfaces';

export const capitalize = (str: string) =>
	`${str[0].toUpperCase()}${str.substring(1)}`;

export const currency = (num: number) => 'R$' + num.toLocaleString('pt-BR');

// export const calcTotal = (motorcycles: ITransactionMotorcycle[]) =>
// 	motorcycles.reduce((acc, next) => {
// 		acc += (getMoto(next.id)?.price || 0) * next.quantity;
// 		return acc;
// 	}, 0);

export const getClientById = (clients: IClient[], id: string) => {
	return clients.find(client => client.id === id);
};

export const getMotoById = (motorcycles: IMotorcycle[], id: string) => {
	return motorcycles.find(moto => moto.id === id);
};

// export const getCient = (id: string) => {
// 	const { clients } = useAppContext();

// 	return clients.find(client => client.id === id);
// };
