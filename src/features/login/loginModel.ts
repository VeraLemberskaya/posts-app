export type LoginModel = {
  email: string;
  password: string;
  remember: boolean;
};

export const initialValues: LoginModel = {
  email: "",
  password: "",
  remember: false,
};
