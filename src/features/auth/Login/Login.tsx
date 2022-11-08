import { FC } from "react";
import { Box, Grid, Paper, Typography } from "@mui/material";

import Lake from "../../../assets/lake.jpg";
import Logo from "../../../components/Logo";

import Copyright from "../../../components/Copyright";
import LoginForm from "../LoginForm";

const Login: FC = () => {
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
        <Box
          sx={{
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Logo />
          <Typography variant="h5" component="h1" my={1} mb={4}>
            Sign in
          </Typography>
          <LoginForm />
          <Copyright sx={{ mt: 5, textAlign: "center" }} />
        </Box>
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
