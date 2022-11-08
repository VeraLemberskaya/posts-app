import { Checkbox, CheckboxProps, FormControlLabel } from "@mui/material";

type Props = Omit<CheckboxProps, "name"> & {
  name: string;
  label?: string;
};

const CheckboxControl = ({ label, ...props }: Props) => {
  return <FormControlLabel control={<Checkbox {...props} />} label={label} />;
};

export default CheckboxControl;
