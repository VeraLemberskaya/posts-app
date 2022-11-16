import { Button, Grid, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { Form, Formik } from "formik";

import FormControl from "../../components/FormControl";
import FlexForm from "../../components/Form";
import { SIGNUP_ROUTE } from "../../constants/routesPath";

import { LoginModel, initialValues } from "./loginModel";
import { validationSchema } from "./validationSchema";

const LoginForm = () => {
  const handleSubmit = (data: LoginModel) => {
    console.log(data);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <FlexForm component={Form}>
        <FormControl name="email" label="Email address" />
        <FormControl type="password" name="password" label="Password" />
        <FormControl type="checkbox" name="remember" label="Remember me" />
        <Button
          type="submit"
          variant="contained"
          size="large"
          sx={{ mt: 2, mb: 2 }}
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
            <Link component={RouterLink} to={SIGNUP_ROUTE}>
              Don't have an account? Sign Up
            </Link>
          </Grid>
        </Grid>
      </FlexForm>
    </Formik>
  );
};

export default LoginForm;
