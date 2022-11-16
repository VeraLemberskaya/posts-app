import { TextField, TextFieldProps } from "@mui/material";

type Props = Omit<TextFieldProps, "name"> & {
  name: string;
};

const InputControl = (props: Props) => {
  return <TextField variant="outlined" margin="normal" fullWidth {...props} />;
};

export default InputControl;
