import { FiSearch } from 'react-icons/fi';

import './transaction-search.scss';

interface ITransactionSearchProps {
	onChange: (value: string) => void;
}

const placeholder = 'Filtrar vendas por nome, moto ou valor...';

export default function TransactionsSearch({
	onChange,
}: ITransactionSearchProps) {
	const handleChange = (e: any) => onChange(e.target.value.trim());
	return (
		<>
			<div className="search-input">
				<div className="search-input-icon">
					<FiSearch size={24} />
				</div>
				<input
					type="text"
					onChange={handleChange}
					placeholder={placeholder}
				></input>
			</div>
		</>
	);
}
