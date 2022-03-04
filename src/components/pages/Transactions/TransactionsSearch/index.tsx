import { FiSearch } from 'react-icons/fi';

import './transaction-search.scss';

interface ITransactionSearchProps {
	onChange: (value: string) => void;
}

export default function TransactionsSearch({
	onChange,
}: ITransactionSearchProps) {
	const handleChange = (e: any) => onChange(e.target.value.trim());
	return (
		<>
			<div className="search-input-container">
				<div className="search-input-icon">
					<FiSearch size={24} />
				</div>
				<input type="text" onChange={handleChange}></input>
			</div>
		</>
	);
}
