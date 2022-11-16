import { Grid, Paper } from "@mui/material";

import Lake from "../../assets/lake.jpg";

import LoginForm from "./LoginForm";
import FormPanel from "../../components/FormPanel";

const Login = () => {
  return (
    <Grid component="main" sx={{ height: "100vh" }} container>
      <Grid
        component={Paper}
        xs={12}
        sm={8}
        md={5}
        alignItems="center"
        justifyContent="center"
        container
        item
      >
        <FormPanel>
          <LoginForm />
        </FormPanel>
      </Grid>
      <Grid
        sm={4}
        md={7}
        sx={{
          backgroundImage: `url(${Lake})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        item
      />
    </Grid>
  );
};

export default Login;
