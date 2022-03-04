import { useAppContext } from '../../../context/AppContext';
import MotorcyclesList from './MotorcyclesList';
import CreateMotorcycle from './CreateMotorcycle';

const Motorcycles = () => {
	const { motorcycles } = useAppContext();
	return (
		<div className="page-container">
			<h1>Motocicletas</h1>

			<MotorcyclesList motorcycles={motorcycles} />

			<CreateMotorcycle />
		</div>
	);
};

export default Motorcycles;
