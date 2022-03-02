import { Field, FieldProps, FormikProps } from 'formik';
import { capitalize } from '../../../utils/functions';
import './index.css';

interface Props {
	id: string;
	name: string;
	placeholder?: string;
	label?: string;
	error?: boolean;
	errorMessage?: string;
}

const TextField = ({
	label,
	name,
	id,
	placeholder,
	error,
	errorMessage,
}: Props) => {
	return (
		<>
			<label htmlFor={name}>{capitalize(label || name)}</label>
			<Field id={id} type="text" name={name} placeholder={placeholder} />
			{error && <span className="error-message">{errorMessage}</span>}
		</>
	);
};

export default TextField;
