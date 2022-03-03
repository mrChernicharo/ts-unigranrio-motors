import { Field } from 'formik';
import './dropdown.scss';

export interface IDropdownOption {
	id: string;
	name: string;
	value: string | number;
}

interface ISelectProps {
	id: string;
	name: string;
	label?: string;
	options: IDropdownOption[];
	onChange: (e: any) => void;
}

export default function DropdownField({
	id,
	name,
	label,
	options,
}: ISelectProps) {
	return (
		<>
			<label htmlFor="name">{label || name}</label>
			<Field id={id} as="select" name={name} className="dropdown-select">
				{options.map(option => (
					<option
						className="dropdown-option"
						key={option.id}
						value={option.value}
					>
						{option.name}
					</option>
				))}
			</Field>
		</>
	);
}
