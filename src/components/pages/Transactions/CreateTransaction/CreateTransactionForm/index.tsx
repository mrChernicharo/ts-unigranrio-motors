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
import { calcTotal } from '../../../../../utils/functions';
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

	const [totalPrice, setTotalPrice] = useState(0);

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
					total: 0,
				}}
				validationSchema={transactionSchema}
				onSubmit={(values, actions) => {
					console.log('createTransaction!', { values, actions });
					const { resetForm } = actions;
					const { clientId, motorcycles: motos } = values;
					createTransaction({
						clientId,
						motorcycles: motos,
						total: totalPrice,
					});
					resetForm();
				}}
			>
				{({
					errors,
					values,
					handleBlur,
					handleChange,
				}: FormikProps<IPartialTransaction>) => {
					return (
						<>
							<Form>
								{/* {console.log(errors)} */}

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

								{values.clientId ? (
									<FieldArray name="motorcycles">
										{arrayHelpers => {
											// console.log(arrayHelpers);

											return (
												<div className="motorcycles-list">
													{values?.motorcycles
														?.length > 0 ? (
														<>
															{values.motorcycles.map(
																(moto, i) => (
																	<div
																		key={nanoid()}
																		className="transaction-item"
																	>
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
																				)
																					?.name
																			}
																		</h5>
																		<DropdownField
																			id={nanoid()}
																			name={`motorcycles[${i}].id`}
																			placeholder="selecione motocicleta"
																			label="Moto"
																			options={
																				motorcycleOpts
																			}
																			onChange={
																				handleChange
																			}
																		/>
																		<ErrorMessage
																			name={`motorcycles[${i}].id`}
																			render={() => (
																				<div className="error-message">
																					selecione
																					uma
																					moto
																				</div>
																			)}
																		/>

																		<div>
																			<NumberField
																				id={nanoid()}
																				name={`motorcycles[${i}].quantity`}
																				label="Quantidade"
																				min={
																					1
																				}
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
																)
															)}
														</>
													) : null}

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
								) : null}
								<button type="submit">Cadastrar</button>

								{setTotalPrice(calcTotal(values.motorcycles))}

								<div>
									<p>Total: R${totalPrice}</p>
								</div>
							</Form>
						</>
					);
				}}
			</Formik>
		</>
	);
}
/**
 *
 */
