import { FiX } from 'react-icons/fi';
import { IMotorcycle } from '../../../../../../utils/interfaces';
import './motorcycle-details.scss';

interface IProps {
	motorcycle: IMotorcycle;
	onClose: (e: any) => void;
}
export default function MotorcycleDetails({ motorcycle, onClose }: IProps) {
	const { name, description, year, price, imgURL } = motorcycle;

	return (
		<>
			<div className="motorcycle-details-modal-container">
				<button onClick={onClose}>
					<FiX />
				</button>

				<h5>
					{name}
					<p>{year}</p>
				</h5>
				<p>{description}</p>

				<img src={imgURL} />
				<p>R${price}</p>
			</div>

			<div className="overlay" onClick={onClose}></div>
		</>
	);
}
