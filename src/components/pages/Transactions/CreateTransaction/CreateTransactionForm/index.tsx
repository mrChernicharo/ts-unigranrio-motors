import { ErrorMessage, FieldArray, Form, Formik, FormikProps } from "formik";
import { nanoid } from "nanoid";
import { FiTrash } from "react-icons/fi";
import { useAppContext } from "../../../../../context/AppContext";
import { currency, getMotoById } from "../../../../../utils/functions";
import {
  IPartialTransaction,
  IPartialTransactionMotorcycle,
} from "../../../../../utils/interfaces";
import { transactionSchema } from "../../../../../utils/schemas";
import DropdownField, {
  IDropdownOption,
} from "../../../../shared/DropdownField";
import NumberField from "../../../../shared/NumberField";
import "./create-transaction-form.scss";

export default function CreateTransactionForm() {
  const { clients, motorcycles, createTransaction } = useAppContext();

  const clientOpts: IDropdownOption[] = [
    { id: "", name: "", value: "" },
    ...clients.map((client) => ({
      id: client.id,
      name: `${client.firstName} ${client.lastName}`,
      value: client.id,
    })),
  ];

  const motorcycleOpts: IDropdownOption[] = [
    { id: "", name: "", value: "" },
    ...motorcycles.map((motorcycle) => ({
      id: motorcycle.id,
      name: motorcycle.name,
      value: motorcycle.id,
    })),
  ];

  const getMoto = (id: string) => motorcycles.find((moto) => moto.id === id);

  const getTotal = (motos: IPartialTransactionMotorcycle[]) =>
    motos.reduce(
      (acc, moto) => (acc += (getMoto(moto.id)?.price || 0) * moto.quantity),
      0
    );

  return (
    <Formik
      initialValues={
        {
          clientId: "",
          motorcycles: [{ id: "", quantity: 1 }],
          total: 0,
        } as IPartialTransaction
      }
      validationSchema={transactionSchema}
      onSubmit={(values, actions) => {
        console.log("createTransaction!", { values, actions });
        const { resetForm } = actions;

        createTransaction({
          clientId: values.clientId,
          motorcycles: values.motorcycles,
          total: getTotal(values.motorcycles),
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
          <Form>
            <h5>Cadastrar Venda</h5>

            <DropdownField
              id={nanoid()}
              name="clientId"
              label="Cliente"
              placeholder="Selecione o cliente"
              options={clientOpts}
              onChange={handleChange}
            />
            <div className="error-message">{errors.clientId}</div>
            {values.clientId ? (
              <FieldArray name="motorcycles">
                {(arrayHelpers) => {
                  // console.log({
                  // 	arrayHelpers,
                  // 	values,
                  // });

                  return (
                    <div className="motorcycles-list">
                      {values?.motorcycles?.length > 0 ? (
                        <>
                          {values.motorcycles.map((moto, i) => (
                            <div key={nanoid()} className="transaction-item">
                              {/* <h5>
									{
										motorcycleOpts.find(
										opts =>
											opts.id === values.motorcycles[i].id)?.name
									}
								</h5> */}
                              <div className="form-row">
                                <DropdownField
                                  id={nanoid()}
                                  name={`motorcycles[${i}].id`}
                                  placeholder="selecione motocicleta"
                                  label="Moto"
                                  options={motorcycleOpts}
                                  onChange={handleChange}
                                >
                                  <ErrorMessage
                                    name={`motorcycles[${i}].id`}
                                    render={() => (
                                      <div className="error-message">
                                        selecione uma moto
                                      </div>
                                    )}
                                  />
                                </DropdownField>

                                {/* prettier-ignore */}
                                <NumberField
									id={nanoid()}
									name={`motorcycles[${i}].quantity`}
									label="Quantidade"
									min={1}
									handleBlur={handleBlur}
									handleChange={handleChange}
									value={values.motorcycles[i].quantity}
								/>
                              </div>

                              <button
                                type="button"
                                onClick={() => arrayHelpers.remove(i)}
                              >
                                <FiTrash />
                              </button>
                            </div>
                          ))}
                        </>
                      ) : null}

                      <button
                        type="button"
                        onClick={() =>
                          arrayHelpers.push({
                            id: "",
                            quantity: 1,
                          })
                        }
                      >
                        Adicionar Moto ao Pedido
                      </button>
                    </div>
                  );
                }}
              </FieldArray>
            ) : null}
            <button type="submit">Cadastrar</button>

            <div>
              <p>Total: {currency(getTotal(values.motorcycles))}</p>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}
/**
 *
 */
