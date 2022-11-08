import { FC } from "react";
import {
  Checkbox,
  CheckboxProps,
  FormControlLabel,
  FormHelperText,
} from "@mui/material";
import { useField } from "formik";

type Props = Omit<CheckboxProps, "name"> & {
  name: string;
  label: string;
};

const CheckboxControl: FC<Props> = (props) => {
  const { name, label } = props;
  const [field, meta] = useField({ name, type: "checkbox" });

  const isError = !!(meta.touched && meta.error);

  return (
    <>
      <FormControlLabel
        control={<Checkbox {...props} {...field} />}
        label={label}
      />
      <FormHelperText error={isError}>
        {isError ? meta.error : " "}
      </FormHelperText>
    </>
  );
};

export default CheckboxControl;
