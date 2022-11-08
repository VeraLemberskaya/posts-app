import * as yup from "yup";

import { VALIDATION } from "../../constants/validation";

export const validationSchema = yup.object().shape({
  email: yup.string().required(VALIDATION.required).email(VALIDATION.email),
  password: yup
    .string()
    .required(VALIDATION.required)
    .min(6, VALIDATION.min(6)),
  remember: yup.boolean().required(),
});
