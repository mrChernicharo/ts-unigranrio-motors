import { Field, Form, Formik, FormikProps } from 'formik';
import { nanoid } from 'nanoid';
import { useAppContext } from '../../../../../context/AppContext';
// import { ITransaction, IPartialTransaction } from '../../../../../utils/interfaces';
// import { TransactionSchema } from '../../../../../utils/schemas';
import TextField from '../../../../shared/TextField';

export default function CreateTransactionForm() {
	// const { createTransaction } = useAppContext()

	return <div></div>;

	// return (
	// 	<div>
	// 		<h5>Cadastrar Transactione</h5>

	// 		<Formik
	// 			initialValues={{ firstName: '', lastName: '', email: '' }}
	// 			validationSchema={TransactionSchema}
	// 			onSubmit={(values, actions) => {
	// 				console.log({ values, actions });

	// 				// const res = await actions.submitForm()
	// 				createTransaction(values)
	// 			}}
	// 		>
	// 			{({
	// 				values,
	// 				isValidating,
	// 				isSubmitting,
	// 				errors,
	// 				touched,
	// 				isValid,
	// 			}: FormikProps<IPartialTransaction>) => {
	// 				return (
	// 					<Form>
	// 						<TextField
	// 							id={nanoid()}
	// 							name="firstName"
	// 							label="Nome"
	// 							placeholder="Nome"
	// 							error={Boolean(errors.firstName && touched.firstName)}
	// 							errorMessage={errors.firstName}
	// 						/>
	// 						<TextField
	// 							id={nanoid()}
	// 							name="lastName"
	// 							placeholder="Sobrenome"
	// 							label="Sobrenome"
	// 							error={Boolean(errors.lastName && touched.lastName)}
	// 							errorMessage={errors.lastName}

	// 						/>
	// 						<TextField
	// 							id={nanoid()}
	// 							name="email"
	// 							label="Email"
	// 							placeholder="email"
	// 							error={Boolean(errors.email && touched.email)}
	// 							errorMessage={errors.email}
	// 						/>

	// 						<button type="submit">Salvar</button>
	// 					</Form>
	// 				);
	// 			}}
	// 		</Formik>
	// 	</div>
	// );
}
