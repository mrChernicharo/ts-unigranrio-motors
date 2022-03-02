import { IMotorcycle } from '../../../../../utils/interfaces';
import './motorcycle.scss';

interface IMotorcycleProps {
	motorcycle: IMotorcycle;
}
export default function Motorcycle({ motorcycle }: IMotorcycleProps) {
	const { name, description, year, price, imgURL } = motorcycle;
	return (
		<div className="motorcycle-container">
			<h5>
				{name}
				<p>{year}</p>
			</h5>
			<p>{description}</p>

			<img src={imgURL} />
			<p>R${price}</p>
		</div>
	);
}
