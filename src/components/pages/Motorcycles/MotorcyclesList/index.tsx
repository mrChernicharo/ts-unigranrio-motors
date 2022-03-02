import * as React from 'react';
import { IMotorcycle } from '../../../../utils/interfaces';
import Motorcycle from './Motorcycle';
import './motorcycles-list.scss';

interface IMotorcyclesListProps {
	motorcycles: IMotorcycle[];
}

const MotorcyclesList = ({ motorcycles }: IMotorcyclesListProps) => {
	return (
		<div className="motorcycles-list-container">
			{motorcycles.map(motorcycle => (
				<Motorcycle motorcycle={motorcycle} />
			))}
		</div>
	);
};

export default MotorcyclesList;
