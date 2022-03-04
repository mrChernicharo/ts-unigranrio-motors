import { useAppContext } from '../context/AppContext';
import { ITransactionMotorcycle } from './interfaces';

export const capitalize = (str: string) =>
	`${str[0].toUpperCase()}${str.substring(1)}`;

export const currency = (num: number) =>
	'R$' + num.toLocaleString('pt-BR', { currency: 'BRL' });

// export const calcTotal = (motorcycles: ITransactionMotorcycle[]) =>
// 	motorcycles.reduce((acc, next) => {
// 		acc += (getMoto(next.id)?.price || 0) * next.quantity;
// 		return acc;
// 	}, 0);

// export const getMoto = (id: string) => {
// 	const { motorcycles } = useAppContext();

// 	return motorcycles.find(moto => moto.id === id);
// };

// export const getCient = (id: string) => {
// 	const { clients } = useAppContext();

// 	return clients.find(client => client.id === id);
// };
