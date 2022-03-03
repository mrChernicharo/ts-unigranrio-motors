import { Field, Form, Formik, FormikProps } from 'formik';
import { nanoid } from 'nanoid';
import { useAppContext } from '../../../../context/AppContext';
import { IMotorcycle, IPartialMotorcycle } from '../../../../utils/interfaces';
import { motorcycleSchema } from '../../../../utils/schemas';
import TextField from '../../../shared/TextField';
import './motorcycle-form.scss';

interface IMotorcyclesFormProps {
	motorcycle?: IMotorcycle;
}

export default function MotorcycleForm({ motorcycle }: IMotorcyclesFormProps) {
	const { createMotorcycle, updateMotorcycle } = useAppContext();

	let motoId = '';
	if (motorcycle) motoId = motorcycle.id;

	return (
		<div>
			<h5>Cadastrar Moto</h5>

			<Formik
				initialValues={{
					name: motorcycle?.name || '',
					description: motorcycle?.description || '',
					year: motorcycle?.year || 2022,
					price: motorcycle?.price || 0,
					imgURL: motorcycle?.imgURL || '',
				}}
				validationSchema={motorcycleSchema}
				onSubmit={(values, actions) => {
					console.log({ values, actions });

					// const res = await actions.submitForm()
					if (motoId) updateMotorcycle({ ...values, id: motoId });
					if (!motoId) createMotorcycle(values);
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
