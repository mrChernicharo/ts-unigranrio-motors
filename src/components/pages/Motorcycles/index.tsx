import { useAppContext } from '../../../context/AppContext';
import MotorcyclesList from './MotorcyclesList';

const Motorcycles = () => {
	const { motorcycles } = useAppContext();
	return (
		<div>
			<h1>Motorcycles</h1>

			<MotorcyclesList motorcycles={motorcycles} />
		</div>
	);
};

export default Motorcycles;
