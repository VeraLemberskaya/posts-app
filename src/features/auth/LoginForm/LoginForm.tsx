import { FC } from "react";
import { Box, Button, Grid, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { Form, Formik } from "formik";

import { LoginModel, initialValues } from "../loginModel";
import { validationSchema } from "../validationSchema";
import FormControl from "../../../components/FormControl";

const LoginForm: FC = () => {
  const handleSubmit = (data: LoginModel) => {
    console.log(data);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Box component={Form}>
        <FormControl name="email" label="Email address" />
        <FormControl type="password" name="password" label="Password" />
        <FormControl type="checkbox" name="remember" label="Remember me" />
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
