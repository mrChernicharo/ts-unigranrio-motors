import { IClient } from '../../../../../utils/interfaces';

interface IClientProps {
	client: IClient;
}

export default function Client({ client }: IClientProps) {
	const { firstName, lastName, email } = client;
	return (
		<div className="client-container">
			<h5>
				{firstName} {lastName}
			</h5>
			<p>{email}</p>
		</div>
	);
}
