import { useState } from 'react';
import { IClient } from '../../../../../utils/interfaces';
import ClientDetails from '../../ClientDetails';

interface IClientProps {
	client: IClient;
}

export default function Client({ client }: IClientProps) {
	const { firstName, lastName, email } = client;

	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

	const handleDetailsModalOpen = (e: any) => {
		setIsModalOpen(true);
	};
	const handleDetailsModalClose = (e: any) => {
		e.stopPropagation();
		setIsModalOpen(false);
	};

	const handleDeleteClient = (id: string) => {
		console.log(`delete id: ${id}`);
	};

	return (
		<div
			className="client-container app-card"
			onClick={handleDetailsModalOpen}
		>
			<h5>
				{firstName} {lastName}
			</h5>
			<p>{email}</p>

			{isModalOpen && (
				<ClientDetails
					client={client}
					onClose={handleDetailsModalClose}
					onDelete={handleDeleteClient}
				/>
			)}
		</div>
	);
}
