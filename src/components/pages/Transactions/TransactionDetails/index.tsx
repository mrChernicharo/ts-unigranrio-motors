import { ITransaction } from '../../../../utils/interfaces';
import './transaction-details.scss';

interface IProps {
	transaction: ITransaction;
	onClose: (e: any) => void;
}

export default function TransactionDetails({ transaction, onClose }: IProps) {
	return (
		<>
			<div className="container"></div>

			<div className="overlay" onClick={onClose}></div>
		</>
	);
}
