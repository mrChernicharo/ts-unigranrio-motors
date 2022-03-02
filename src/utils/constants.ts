import { nanoid } from 'nanoid';
import { IClient, IMotorcycle, ITransaction } from './interfaces';

export const initialClients: IClient[] = [
	{
		id: 'tR_PKzK7vjjChl8gokcOg',
		firstName: 'Juca',
		lastName: 'Alves',
		email: 'juca.alves@uol.com',
	},
	{
		id: 'WcH3knIIOogt-x0oEPt7i',
		firstName: 'Zé',
		lastName: 'das Couves',
		email: 'ze@couves.com',
	},
	{
		id: 'bUehc-UB9kUOebKkftz3g',
		firstName: 'Maria',
		lastName: 'do Bairro',
		email: 'maria.do.bairro@gmail.com',
	},
];

export const initialMotorcycles: IMotorcycle[] = [
	{
		id: 'DLGTfaaGz95LFr9VatMxa',
		name: 'Spitfire',
		description: 'MotoTec 49cc 2-Stroke GT Gas Powered Pocket Bike Red',
		year: 2021,
		price: 30_000,
		imgURL: 'https://ak1.ostkcdn.com/images/products/is/images/direct/9880327484333fa63c73a71eed9d98663129ad9f/MotoTec-Gas-Pocket-Bike-GT-49cc-2-Stroke-Red.jpg',
	},
	{
		id: 's49MCiMAU68uDBuz2_MiA',
		name: 'Shadow Dancer',
		description: 'MotoTec 49cc 2-Stroke GT Gas Powered Pocket Bike Red',
		year: 2022,
		price: 46_000,
		imgURL: 'https://i1.s3stores.com/images/BTU/preview_b707d94344722ea55c062c6a8db24b56.jpeg',
	},
	{
		id: 'LcQUHTmk_A1YQhufVWQdJ',
		name: 'Pathfinder',
		description: 'MotoTec 49cc 2-Stroke GT Gas Powered Pocket Bike Red',
		year: 2020,
		price: 16_000,
		imgURL: 'https://m.media-amazon.com/images/I/717woRDSH-L._AC_SL1200_.jpg',
	},
];

export const initialTransactions: ITransaction[] = [
	{
		id: '4cQUHABNT_ewQhupe3Q21',
		clientId: initialClients[2].id,
		createdAt: new Date(2022, 2, 1, 22, 21, 32),
		motorcycles: [{ id: initialMotorcycles[0].id, quantity: 1 }],
		total: initialMotorcycles[0].price,
	},
	{
		id: 'Thfr-ABNT_ewKU6leRruY',
		clientId: initialClients[0].id,
		createdAt: new Date(2022, 2, 2, 12, 14, 24),
		motorcycles: [
			{ id: initialMotorcycles[1].id, quantity: 1 },
			{ id: initialMotorcycles[2].id, quantity: 2 },
		],
		total: initialMotorcycles[1].price + initialMotorcycles[2].price * 2,
	},
];
