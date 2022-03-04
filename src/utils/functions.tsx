import { useAppContext } from '../context/AppContext';
import {
	IClient,
	IMotorcycle,
	IPartialTransactionMotorcycle,
	ITransactionMotorcycle,
} from './interfaces';

export const capitalize = (str: string) =>
	`${str[0].toUpperCase()}${str.substring(1)}`;

export const currency = (num: number) => 'R$' + num.toLocaleString('pt-BR');

// export const getTotal = (
// 	motos: IPartialTransactionMotorcycle[]
// ) => {
// 	return motos.reduce((acc, moto) => {
// 		acc +=
// 			(getMoto(moto.id)?.price || 0) * moto.quantity;
// 		return acc;
// 	}, 0);
// };

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
