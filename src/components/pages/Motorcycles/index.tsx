import useMotorcycles from '../../../hooks/useMotorcycles';
import MotorcyclesList from './MotorcyclesList';

const Motorcycles = () => {
	const { motorcycles } = useMotorcycles();
	return (
		<div>
			<h1>Motorcycles</h1>

			<MotorcyclesList motorcycles={motorcycles} />
		</div>
	);
};

export default Motorcycles;
