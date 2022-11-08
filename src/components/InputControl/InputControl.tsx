import { FC } from "react";
import { Box, FormHelperText, TextField, TextFieldProps } from "@mui/material";
import { useField } from "formik";

import PasswordTextField from "../PasswordTextField";

type Props = Omit<TextFieldProps, "name"> & {
  name: string;
};

const InputControl: FC<Props> = ({ type, ...props }) => {
  const [field, meta] = useField({ name: props.name, type });

  const isError = !!(meta.touched && meta.error);

  return (
    <Box sx={{ display: "inline-block", width: "100%" }}>
      {type === "password" ? (
        <PasswordTextField {...props} {...field} error={isError} />
      ) : (
        <TextField type={type} {...props} {...field} error={isError} />
      )}
      <FormHelperText error={isError}>
        {isError ? meta.error : " "}
      </FormHelperText>
    </Box>
  );
};

export default InputControl;
