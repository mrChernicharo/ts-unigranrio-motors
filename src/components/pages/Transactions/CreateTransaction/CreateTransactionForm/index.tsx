import {
	ErrorMessage,
	Field,
	FieldArray,
	Form,
	Formik,
	FormikProps,
} from 'formik';
import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';
import { FiTrash } from 'react-icons/fi';
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
import './create-transaction-form.scss';

export default function CreateTransactionForm() {
	const { clients, motorcycles, createTransaction } = useAppContext();

	const [clientOpts, setClientOpts] = useState<IDropdownOption[]>([
		{ id: '', name: '', value: '' },
		...clients.map(client => ({
			id: client.id,
			name: `${client.firstName} ${client.lastName}`,
			value: client.id,
		})),
	]);
	const [motorcycleOpts, setMotorcycleOpts] = useState<IDropdownOption[]>([
		{ id: '', name: '', value: '' },
		...motorcycles.map(motorcycle => ({
			id: motorcycle.id,
			name: motorcycle.name,
			value: motorcycle.id,
		})),
	]);

	return (
		<>
			<h5>Cadastrar Venda</h5>

			<Formik
				initialValues={{
					clientId: '',
					motorcycles: [{ id: 'fuehfw9328hh89hawe8fh', quantity: 1 }],
				}}
				validationSchema={transactionSchema}
				onSubmit={(values, actions) => {
					console.log('createTransaction!', { values, actions });
					// createTransaction(values);
				}}
			>
				{({
					errors,
					values,
					handleBlur,
					handleChange,
				}: FormikProps<IPartialTransaction>) => {
					// console.log(values);
					return (
						<Form>
							{console.log(errors)}

							<div className="error-message">
								{errors.clientId}
							</div>
							<DropdownField
								id={nanoid()}
								name="clientId"
								label="Cliente"
								placeholder="Selecione o cliente"
								options={clientOpts}
								onChange={handleChange}
							/>

							<FieldArray name="motorcycles">
								{arrayHelpers => {
									// console.log(arrayHelpers);
									return (
										<div className="motorcycles-list">
											{values?.motorcycles?.length > 0 ? (
												<>
													{values.motorcycles.map(
														(moto, i) => (
															<div
																key={nanoid()}
																className="transaction-item"
															>
																<ErrorMessage
																	name={`motorcycles[${i}].id`}
																/>
																<h5>
																	{
																		motorcycleOpts.find(
																			opts =>
																				opts.id ===
																				values
																					.motorcycles[
																					i
																				]
																					.id
																		)?.name
																	}
																</h5>
																<DropdownField
																	id={nanoid()}
																	name={`motorcycles[${i}].id`}
																	label="Moto"
																	options={
																		motorcycleOpts
																	}
																	onChange={
																		handleChange
																	}
																/>

																<div>
																	<NumberField
																		id={nanoid()}
																		name={`motorcycles[${i}].quantity`}
																		label="Quantidade"
																		min={1}
																		handleBlur={
																			handleBlur
																		}
																		handleChange={
																			handleChange
																		}
																		value={
																			values
																				.motorcycles[
																				i
																			]
																				.quantity
																		}
																	/>
																</div>

																<button
																	type="button"
																	onClick={() =>
																		arrayHelpers.remove(
																			i
																		)
																	}
																>
																	<FiTrash />
																</button>
															</div>
															// <div key={nanoid()}>

															// </div>
														)
													)}
												</>
											) : (
												<>nothing</>
											)}

											<button
												type="button"
												onClick={() =>
													arrayHelpers.push({
														id: '',
														quantity: 1,
													})
												}
											>
												Adicionar ao pedido
											</button>
										</div>
									);
								}}
							</FieldArray>

							<button type="submit">Cadastrar</button>
						</Form>
					);
				}}
			</Formik>
		</>
	);
}
/**
 *
 */
