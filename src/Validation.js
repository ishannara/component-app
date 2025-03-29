import * as yup from "yup";

export const LoginValidation = yup.object().shape({
  user: yup.string().required(),
  email: yup.string().required(),
  password: yup.string().required(),
});
