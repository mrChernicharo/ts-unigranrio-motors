import { Field, Form, Formik, FormikProps } from 'formik';
import { nanoid } from 'nanoid';
import { useAppContext } from '../../../../../context/AppContext';
import {
	IMotorcycle,
	IPartialMotorcycle,
} from '../../../../../utils/interfaces';
import { motorcycleSchema } from '../../../../../utils/schemas';
import TextField from '../../../../shared/TextField';
import './create-motorcycle-form.scss';

export default function CreateMotorcycleForm() {
	const { createMotorcycle } = useAppContext();

	return (
		<div>
			<h5>Cadastrar Moto</h5>

			<Formik
				initialValues={{
					name: '',
					description: '',
					year: 2022,
					price: 0,
					imgURL: '',
				}}
				validationSchema={motorcycleSchema}
				onSubmit={(values, actions) => {
					console.log({ values, actions });

					// const res = await actions.submitForm()
					createMotorcycle(values);
				}}
			>
				{({
					errors,
					touched,
					values,
				}: FormikProps<IPartialMotorcycle>) => {
					return (
						<Form>
							<TextField
								id={nanoid()}
								name="name"
								label="Nome"
								placeholder="Nome"
								error={Boolean(errors.name && touched.name)}
								errorMessage={errors.name}
							/>
							<TextField
								id={nanoid()}
								name="description"
								placeholder="Descrição"
								label="Descrição"
								error={Boolean(
									errors.description && touched.description
								)}
								errorMessage={errors.description}
							/>
							<TextField
								id={nanoid()}
								name="year"
								label="Ano"
								placeholder="Ano"
								error={Boolean(errors.year && touched.year)}
								errorMessage={errors.year}
							/>
							<TextField
								id={nanoid()}
								name="price"
								label="Preço"
								placeholder="Preço"
								error={Boolean(errors.price && touched.price)}
								errorMessage={errors.price}
							/>
							<TextField
								id={nanoid()}
								name="imgURL"
								label="URL Imagem"
								placeholder="URL Imagem"
								error={Boolean(errors.imgURL && touched.imgURL)}
								errorMessage={errors.imgURL}
							/>

							<div className="preview-container">
								{values.imgURL && <img src={values.imgURL} />}
							</div>

							<button type="submit">Salvar</button>
						</Form>
					);
				}}
			</Formik>
		</div>
	);
}
