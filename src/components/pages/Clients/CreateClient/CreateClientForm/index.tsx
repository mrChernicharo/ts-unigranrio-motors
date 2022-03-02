import { Field, Form, Formik, FormikProps } from 'formik';
import { nanoid } from 'nanoid';
import { IClient } from '../../../../../utils/interfaces';
import TextField from '../../../../shared/TextField';

export default function CreateClientForm() {
	return (
		<div>
			<h5>Cadastrar Cliente</h5>

			<Formik
				initialValues={{ firstName: '', lastName: '', email: '' }}
				onSubmit={(values, actions) => {
					console.log({ values, actions });
				}}
			>
				{({
					values,
					isValidating,
					isSubmitting,
					errors,
					touched,
					isValid,
				}: FormikProps<Partial<IClient>>) => {
					return (
						<Form>
							<TextField
								id={nanoid()}
								name="firstName"
								error={!!errors.firstName && touched.firstName}
							/>
							<TextField
								id={nanoid()}
								name="lastName"
								error={!!errors.lastName && touched.lastName}
							/>
							<TextField
								id={nanoid()}
								name="email"
								error={!!errors.email && touched.email}
							/>

							<button type="submit">Salvar</button>
						</Form>
					);
				}}
			</Formik>
		</div>
	);
}
