import { Box } from "@mui/material";

type Props = {
  component: React.ElementType;
  children: React.ReactNode;
};

const Form = ({ component = "form", children }: Props) => {
  return (
    <Box
      component={component}
      sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}
    >
      {children}
    </Box>
  );
};

export default Form;
