import * as Yup from "yup";
export const clientSchema = Yup.object({
  firstName: Yup.string().required("O Nome é obrigatório"),
  lastName: Yup.string().required("O Sobrenome é obrigatório"),
  email: Yup.string()
    .email("Insira um email válido")
    .required("O Email é obrigatório"),
});
