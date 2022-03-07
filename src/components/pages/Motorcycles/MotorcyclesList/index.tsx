import * as React from 'react';
import { useAppContext } from '../../../../context/AppContext';
import Global from '../../../../hooks/Global';
import { IMotorcycle } from '../../../../utils/interfaces';
import MotorcycleItem from './MotorcycleItem';
import './motorcycles-list.scss';

interface IMotorcyclesListProps {
	motorcycles: IMotorcycle[];
}

const MotorcyclesList = ({ motorcycles }: IMotorcyclesListProps) => {
	const { deleteMotorcycle } = Global;

	const handleDeletedMotorcycle = (id: string) => deleteMotorcycle(id);
	return (
		<div className="motorcycles-list-container list-container">
			{motorcycles.map(motorcycle => (
				<MotorcycleItem
					key={motorcycle.id}
					motorcycle={motorcycle}
					onDelete={handleDeletedMotorcycle}
				/>
			))}
		</div>
	);
};

export default MotorcyclesList;
