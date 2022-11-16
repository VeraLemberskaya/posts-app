import { Box, Typography } from "@mui/material";
import Copyright from "./Copyright";
import Logo from "./Logo";

type Props = {
  children: React.ReactNode;
};

const FormPanel = ({ children }: Props) => {
  return (
    <Box
      sx={{
        mx: 2,
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
      {children}
      <Copyright sx={{ mt: 5, textAlign: "center" }} />
    </Box>
  );
};

export default FormPanel;
