import { Field, Form, Formik, FormikProps } from 'formik';
import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';
import { useAppContext } from '../../../../../context/AppContext';
import {
	ITransaction,
	IPartialTransaction,
} from '../../../../../utils/interfaces';
import { transactionSchema } from '../../../../../utils/schemas';
import DropdownField, {
	IDropdownOption,
} from '../../../../shared/DropdownField';
import NumberField from '../../../../shared/NumberField';
import TextField from '../../../../shared/TextField';

export default function CreateTransactionForm() {
	const { clients, motorcycles, createTransaction } = useAppContext();

	const [clientOpts, setClientOpts] = useState<IDropdownOption[]>([]);
	const [motorcycleOpts, setMotorcycleOpts] = useState<IDropdownOption[]>([]);

	// const clientOptions = () => clients.map(client => client.id);
	// const motorcycleOptions = () =>
	// 	motorcycles.map(motorcycle => motorcycle.id)

	useEffect(() => {
		setClientOpts(
			clients.map(client => ({
				id: client.id,
				name: `${client.firstName} ${client.lastName}`,
				value: client.id,
			}))
		);
	}, [clients]);

	useEffect(() => {
		setMotorcycleOpts(
			motorcycles.map(motorcycle => ({
				id: motorcycle.id,
				name: motorcycle.name,
				value: motorcycle.id,
			}))
		);
	}, [motorcycles]);

	return (
		<div>
			<h5>Cadastrar Venda</h5>

			<Formik
				initialValues={{
					clientId: '',
					id: '',
					quantity: 1,
				}}
				validationSchema={transactionSchema}
				onSubmit={(values, actions) => {
					console.log('createTransaction!', { values, actions });
					// createTransaction(values);
				}}
			>
				{({
					values,
					isValidating,
					isSubmitting,
					errors,
					touched,
					isValid,
					handleBlur,
					handleChange,
				}: FormikProps<any>) => {
					return (
						<Form>
							{/* <TextField
								id={nanoid()}
								name="clientId"
								label="Nome"
								placeholder="Nome"
								error={Boolean(
									errors.clientId && touched.clientId
								)}
								errorMessage={errors.clientId}
							/> */}

							<DropdownField
								id={nanoid()}
								name="client"
								label="Cliente"
								options={clientOpts}
								onChange={e => {
									console.log(e);
								}}
							/>

							<div>
								<DropdownField
									id={nanoid()}
									name="id"
									label="Motocicleta"
									options={motorcycleOpts}
									onChange={e => {
										console.log(e);
									}}
								/>

								<NumberField
									id={nanoid()}
									name="quantity"
									label="Quantidade"
									min={1}
									handleBlur={handleBlur}
									handleChange={handleChange}
									value={values.quantity}
									// error={Boolean(
									// 	errors.quantity && touched.quantity
									// )}
									// errorMessage={errors.quantity}
								/>
							</div>

							{/* <TextField
								id={nanoid()}
								name="lastName"
								placeholder="Sobrenome"
								label="Sobrenome"
								error={Boolean(errors.lastName && touched.lastName)}
								errorMessage={errors.lastName}

							/>
							<TextField
								id={nanoid()}
								name="email"
								label="Email"
								placeholder="email"
								error={Boolean(errors.email && touched.email)}
								errorMessage={errors.email}
							/> */}

							<button type="submit">Salvar</button>
						</Form>
					);
				}}
			</Formik>
		</div>
	);
}
