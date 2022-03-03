import { Field, FieldProps, Form, Formik, FormikProps } from "formik";
import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import { FiPlus, FiTrash, FiX } from "react-icons/fi";
import { useAppContext } from "../../../../../context/AppContext";
import {
	ITransaction,
	IPartialTransaction,
	ITransactionMotorcycle,
} from "../../../../../utils/interfaces";
import { transactionSchema } from "../../../../../utils/schemas";
import DropdownField, {
	IDropdownOption,
} from "../../../../shared/DropdownField";
import NumberField from "../../../../shared/NumberField";
import TextField from "../../../../shared/TextField";
import "./create-transaction-form.scss";

export default function CreateTransactionForm() {
	const { clients, motorcycles, createTransaction } = useAppContext();

	const [clientOpts, setClientOpts] = useState<IDropdownOption[]>([]);
	const [motorcycleOpts, setMotorcycleOpts] = useState<IDropdownOption[]>([]);
	const [motorcycleFields, setMotorcycleFields] = useState<
		ITransactionMotorcycle[]
	>([]);

	const handleAddMotorcycleField = () => {
		setMotorcycleFields([...motorcycleFields, { id: "", quantity: 1 }]);
	};
	const handleRemoveMotorcycleField = (index: number) => (e: any) => {
		if (motorcycleFields.length) {
			setMotorcycleFields(motorcycleFields.filter((moto, i) => i !== index));
		}
	};

	useEffect(() => {
		setClientOpts(
			clients.map((client) => ({
				id: client.id,
				name: `${client.firstName} ${client.lastName}`,
				value: client.id,
			}))
		);
	}, [clients]);

	useEffect(() => {
		setMotorcycleOpts(
			motorcycles.map((motorcycle) => ({
				id: motorcycle.id,
				name: motorcycle.name,
				value: motorcycle.id,
			}))
		);
	}, [motorcycles]);

	return (
		<div className="create-transaction-form-container">
			<h5>Cadastrar Venda</h5>

			<Formik
				initialValues={{
					clientId: "",
					motorcycles: [],
				}}
				validationSchema={transactionSchema}
				onSubmit={(values, actions) => {
					console.log("createTransaction!", { values, actions });
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
						<>
							<Form>
								<DropdownField
									id={nanoid()}
									name="client"
									label="Cliente"
									options={clientOpts}
									onChange={(e) => {
										console.log(e);
									}}
								/>

								<div>
									{motorcycleFields.map((field, i) => (
										<div key={nanoid()}>
											<Field name="motorcycles">
												{({ form }: FieldProps) => {
													// console.log({ i, field, form })
													return (
														<>
															<DropdownField
																id={nanoid()}
																name={`motorcycles[${i}].id`}
																label="Motocicleta"
																options={motorcycleOpts}
																onChange={handleChange}
															/>

															<NumberField
																id={nanoid()}
																name={`motorcycles[${i}].quantity`}
																label="Quantidade"
																min={1}
																handleBlur={handleBlur}
																handleChange={handleChange}
															// value={values.quantity}
															/>

															<button
																type="button"
																onClick={handleRemoveMotorcycleField(i)}
															>
																<FiTrash />
															</button>
														</>
													)
												}}
											</Field>
										</div>
									))}
									<hr />

									<button type="button" onClick={handleAddMotorcycleField}>
										Adicionar moto ao pedido
									</button>
								</div>

								<button type="submit">Salvar</button>
							</Form>
						</>
					)
				}}
			</Formik>
		</div>
	);
}
{
	/* <TextField
										  id={nanoid()}
										  name="clientId"
										  label="Nome"
										  placeholder="Nome"
										  error={Boolean(
											  errors.clientId && touched.clientId
										  )}
										  errorMessage={errors.clientId}
									  /> */
}

{
	/* <TextField
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
									  /> */
}
