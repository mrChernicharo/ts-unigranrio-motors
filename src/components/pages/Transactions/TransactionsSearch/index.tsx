import { ITransaction } from '../../../../utils/interfaces';

interface ITransactionSearchProps {
	onChange: (value: string) => void;
}

export default function TransactionsSearch({
	onChange,
}: ITransactionSearchProps) {
	const handleChange = (e: any) => onChange(e.target.value.trim());
	return (
		<>
			<>🔎</>

			<input type="text" onChange={handleChange}></input>
		</>
	);
}
