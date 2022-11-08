import { FC } from "react";
import { Box, Button, Grid, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { Form, Formik } from "formik";
import * as yup from "yup";

import { VALIDATION } from "../../../constants/validation";
import InputControl from "../../../components/InputControl";
import CheckboxControl from "../../../components/CheckboxControl";

type FormData = {
  email: string;
  password: string;
  remember: boolean;
};

const validationSchema = yup.object().shape({
  email: yup.string().required(VALIDATION.required).email(VALIDATION.email),
  password: yup
    .string()
    .required(VALIDATION.required)
    .min(6, VALIDATION.min(6)),
  remember: yup.boolean().required(),
});

const LoginForm: FC = () => {
  const initialValues: FormData = {
    email: "",
    password: "",
    remember: false,
  };

  const handleSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Box component={Form}>
        <InputControl name="email" label="Email address" fullWidth />
        <InputControl
          name="password"
          label="Password"
          type="password"
          fullWidth
        />
        <CheckboxControl name="remember" label="Remember me" />
        <Button
          type="submit"
          variant="contained"
          size="large"
          sx={{ mt: 4, mb: 2 }}
          fullWidth
        >
          Sign In
        </Button>
        <Grid justifyContent="space-between" spacing={1} container>
          <Grid item>
            <Link component={RouterLink} to="/">
              Forgot password?
            </Link>
          </Grid>
          <Grid item>
            <Link component={RouterLink} to="/">
              Don't have an account? Sign Up
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Formik>
  );
};

export default LoginForm;
