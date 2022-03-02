import { useEffect, useState } from 'react';
import { IMotorcycle } from '../../../../../utils/interfaces';
import './motorcycle.scss';
import MotorcycleDetails from './MotorcycleDetails';

interface IMotorcycleProps {
	motorcycle: IMotorcycle;
}
export default function Motorcycle({ motorcycle }: IMotorcycleProps) {
	const { name, description, year, price, imgURL } = motorcycle;
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

	const handleDetailsModalOpen = (e: any) => {
		setIsModalOpen(true);
	};
	const handleDetailsModalClose = (e: any) => {
		e.stopPropagation();
		setIsModalOpen(false);
	};

	useEffect(() => console.log(isModalOpen), [isModalOpen]);

	return (
		<div className="motorcycle-container" onClick={handleDetailsModalOpen}>
			<h5>
				{name}
				<p>{year}</p>
			</h5>
			<p>{description}</p>

			<img src={imgURL} />
			<p>R${price}</p>

			{isModalOpen && (
				<MotorcycleDetails
					motorcycle={motorcycle}
					onClose={handleDetailsModalClose}
				/>
			)}
		</div>
	);
}
