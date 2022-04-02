import { nanoid } from 'nanoid';
import { IClient, IMotorcycle, ITransaction } from './interfaces';

export const defaultMotoImgURL =
	'https://www.indianmotorcyclelakeville.com/images/indianmotorcyclelakeville-slide-scout.png';

const imgURLs = {
	redHarley:
		'https://th.bing.com/th/id/R.608fc3e6883036c692cec3a6b42a92f7?rik=IXbBlUVZdxzrsw&pid=ImgRaw&r=0',
	harley: 'https://th.bing.com/th/id/R.2e920bdfffea4dd19a965638f007b03a?rik=PnVH8B7KSD8Qfw&pid=ImgRaw&r=0',
	kawasaki:
		'https://p7.hiclipart.com/preview/830/690/451/kawasaki-klx250s-kawasaki-motorcycles-kawasaki-heavy-industries-motorcycle-engine-motorcycle.jpg',
	scavenger:
		'https://www.indianmotorcyclelakeville.com/images/indianmotorcyclelakeville-slide-scout.png',
	bg1: 'https://ak1.ostkcdn.com/images/products/is/images/direct/9880327484333fa63c73a71eed9d98663129ad9f/MotoTec-Gas-Pocket-Bike-GT-49cc-2-Stroke-Red.jpg',
	bgShadowDancer:
		'https://i1.s3stores.com/images/BTU/preview_b707d94344722ea55c062c6a8db24b56.jpeg',
	bgPathfinder:
		'https://m.media-amazon.com/images/I/717woRDSH-L._AC_SL1200_.jpg',
	dark: 'https://images.unsplash.com/photo-1607091083645-31f4e28dc9af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
	dark2: 'https://i.pinimg.com/originals/0e/40/4d/0e404d2b8da7c94e440ae492f12e9e6a.jpg',
};

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
		name: 'Avenger',
		description: 'Comedora de asfalto',
		year: 2021,
		price: 19_000,
		imgURL: imgURLs.dark2,
	},
	{
		id: 's49MCiMAU68uDBuz2_MiA',
		name: 'Shadow Dancer',
		description: 'MotoTec 49cc 2-Stroke GT Gas Powered Pocket Bike Red',
		year: 2022,
		price: 46_000,
		imgURL: imgURLs.scavenger,
	},
	{
		id: 'LcQUHTmk_A1YQhufVWQdJ',
		name: 'Pathfinder',
		description: 'Protótipo ultra high-tech',
		year: 2020,
		price: 32_000,
		imgURL: imgURLs.dark,
	},
];

export const initialTransactions: ITransaction[] = [
	{
		id: '4cQUHABNT_ewQhupe3Q21',
		client: {
			id: initialClients[2].id,
			firstName: initialClients[2].firstName,
			lastName: initialClients[2].lastName,
			email: initialClients[2].email,
		},
		createdAt: new Date(2022, 2, 1, 22, 21, 32),
		motorcycles: [
			{
				motorcycle: {
					id: initialMotorcycles[0].id,
					name: initialMotorcycles[0].name,
					description: initialMotorcycles[0].description,
					year: initialMotorcycles[0].year,
					price: initialMotorcycles[0].price,
					imgURL: initialMotorcycles[0].imgURL,
				},
				quantity: 2,
			},
		],
		total: initialMotorcycles[0].price * 2,
	},
	{
		id: 'Thfr-ABNT_ewKU6leRruY',
		client: {
			id: initialClients[1].id,
			firstName: initialClients[1].firstName,
			lastName: initialClients[1].lastName,
			email: initialClients[1].email,
		},
		createdAt: new Date(2022, 2, 2, 12, 14, 24),
		motorcycles: [
			{
				motorcycle: {
					id: initialMotorcycles[1].id,
					name: initialMotorcycles[1].name,
					description: initialMotorcycles[1].description,
					year: initialMotorcycles[1].year,
					price: initialMotorcycles[1].price,
					imgURL: initialMotorcycles[1].imgURL,
				},
				quantity: 1,
			},
			{
				motorcycle: {
					id: initialMotorcycles[2].id,
					name: initialMotorcycles[2].name,
					description: initialMotorcycles[2].description,
					year: initialMotorcycles[2].year,
					price: initialMotorcycles[2].price,
					imgURL: initialMotorcycles[2].imgURL,
				},
				quantity: 1,
			},
		],
		total: initialMotorcycles[1].price + initialMotorcycles[2].price,
	},
];
