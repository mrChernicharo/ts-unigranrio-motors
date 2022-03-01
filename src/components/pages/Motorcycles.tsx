import * as React from 'react';
import { useAppContext } from '../context/AppContext';

const Motorcycles = () => {
	const { motorcycles } = useAppContext();

	return (
		<div>
			<h1>Motorcycles</h1>

			{motorcycles.map(moto => (
				<>
					<img src={moto.imgURL} height={180} />
				</>
			))}
		</div>
	);
};

export default Motorcycles;
