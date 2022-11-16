import { useField } from "formik";
import { FormHelperText, SxProps } from "@mui/material";
import { ControlType, CONTROL_MAP } from "./controlMap";

type Props = {
  name: string;
  type?: ControlType;
  label?: string;
  sx?: SxProps;
};
const FormControl = ({ name, type = "text", ...props }: Props) => {
  const [field, meta] = useField({ name, type });

  const isError = !!(meta.touched && meta.error);

  const Control = CONTROL_MAP[type];

  return (
    <>
      <Control {...field} {...props} error={isError} />
      <FormHelperText error={isError}>
        {isError ? meta.error : " "}
      </FormHelperText>
    </>
  );
};

export default FormControl;
