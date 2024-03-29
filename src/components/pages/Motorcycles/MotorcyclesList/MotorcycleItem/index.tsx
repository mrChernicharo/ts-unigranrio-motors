import { useEffect, useState } from 'react';
import { IMotorcycle } from '../../../../../utils/interfaces';
import './motorcycle.scss';
import MotorcycleDetails from '../../MotorcycleDetails';
import { toCurrency } from '../../../../../utils/functions';

interface IMotorcycleProps {
	motorcycle: IMotorcycle;
	onDelete: (id: string) => void;
}
export default function MotorcycleItem({
	motorcycle,
	onDelete,
}: IMotorcycleProps) {
	const { name, description, year, price, imgURL } = motorcycle;
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

	const handleDetailsModalOpen = (e: any) => {
		setIsModalOpen(true);
	};
	const handleDetailsModalClose = (e: any) => {
		e.stopPropagation();
		setIsModalOpen(false);
	};

	// useEffect(() => console.log(isModalOpen), [isModalOpen]);

	return (
		<>
			<div
				className="motorcycle-container app-card"
				onClick={handleDetailsModalOpen}
			>
				<h5>
					{name}
					<p>{year}</p>
				</h5>
				<p>{description}</p>

				<img src={imgURL} />
				<p>{toCurrency(price)}</p>
			</div>
			{isModalOpen && (
				<MotorcycleDetails
					motorcycle={motorcycle}
					onClose={handleDetailsModalClose}
					onDelete={onDelete}
				/>
			)}
		</>
	);
}
