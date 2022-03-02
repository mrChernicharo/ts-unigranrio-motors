import { useAppContext } from '../../../context/AppContext';
import MotorcyclesList from './MotorcyclesList';
import CreateMotorcycle from './CreateMotorcycle';

const Motorcycles = () => {
	const { motorcycles } = useAppContext();
	return (
		<div>
			<h1>Motocicletas</h1>

			<MotorcyclesList motorcycles={motorcycles} />

			<CreateMotorcycle />
		</div>
	);
};

export default Motorcycles;
