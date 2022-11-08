import { useField } from "formik";
import { Box, FormHelperText } from "@mui/material";
import { ControlType, CONTROL_MAP } from "./controlMap";

type Props = {
  name: string;
  type?: ControlType;
  label?: string;
};
const FormControl = (props: Props) => {
  const { name, type = "text" } = props;

  const [field, meta] = useField({ name, type });

  const isError = !!(meta.touched && meta.error);

  const Control = CONTROL_MAP[type];

  return (
    <Box sx={{ display: "inline-block", width: "100%" }}>
      <Control {...field} {...props} error={isError} />
      <FormHelperText error={isError}>
        {isError ? meta.error : " "}
      </FormHelperText>
    </Box>
  );
};

export default FormControl;
