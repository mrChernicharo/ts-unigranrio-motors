import { nanoid } from 'nanoid';
import {
	useState,
	useEffect,
} from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import {
	initialMotorcycles,
} from '../utils/constants';
import {
	IMotorcycle,
	IPartialMotorcycle,
} from '../utils/interfaces';


const useMotorcycles = () => {
	const [storedMotorcycles, setStoredMotorcycles] = useLocalStorage<
		IMotorcycle[]
	>('@motorcycles', initialMotorcycles);


	const [motorcycles, setMotorcycles] = useState<IMotorcycle[]>([]);

	const createMotorcycle = (motorcycleData: IPartialMotorcycle) => {
		const newMoto: IMotorcycle = { id: nanoid(), ...motorcycleData };
		const updatedMotos = [...motorcycles, newMoto];

		setStoredMotorcycles(updatedMotos);
		setMotorcycles(updatedMotos);
	};
	const updateMotorcycle = (motorcycleData: IMotorcycle) => {
		console.log('update', motorcycleData);
		const { id } = motorcycleData;
		setMotorcycles(
			motorcycles.map(moto => (moto.id === id ? motorcycleData : moto))
		);
	};
	const deleteMotorcycle = (id: string) => {
		return setMotorcycles(motorcycles.filter(moto => moto.id !== id));
	};

	// helpers

	const getMoto = (id: string) => motorcycles.find(moto => moto.id === id);

	useEffect(() => {
		setMotorcycles(
			(storedMotorcycles.length && storedMotorcycles) ||
			initialMotorcycles
		);
	}, []);

	useEffect(() => {
		setStoredMotorcycles(motorcycles)
	}, [motorcycles])


	return {
		motorcycles,
		getMoto,
		createMotorcycle,
		updateMotorcycle,
		deleteMotorcycle,

	}
}

export default useMotorcycles