import { Field, FieldProps, FormikProps } from 'formik';
import { capitalize } from '../../../utils/functions';
import './text-field.scss';

interface Props {
	id: string;
	name: string;
	min: number;
	label?: string;
	error?: boolean;
	errorMessage?: string;
	handleBlur: Function;
	handleChange: Function;
}

const NumberField = ({
	label,
	name,
	id,
	error,
	min,
	errorMessage,
}: Props) => {
	return (
		<div className="Number-field-container">
			<label htmlFor={name}>{capitalize(label || name)}</label>
			<input id={id} type="number" name={name} min={min} />
			{error && <span className="error-message">{errorMessage}</span>}
		</div>
	);
};

export default NumberField;
