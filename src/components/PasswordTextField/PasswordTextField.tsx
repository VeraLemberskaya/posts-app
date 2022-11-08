import { useState } from "react";
import {
  IconButton,
  InputAdornment,
  TextField,
  TextFieldProps,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

type PasswordPostfixProps = {
  isVisible: boolean;
  onClick: () => void;
};

const PasswordPostfix = ({ isVisible, onClick }: PasswordPostfixProps) => {
  return (
    <InputAdornment position="end" sx={{ cursor: "pointer" }}>
      <IconButton onClick={onClick}>
        {isVisible ? <VisibilityOff /> : <Visibility />}
      </IconButton>
    </InputAdornment>
  );
};

type Props = Omit<TextFieldProps, "type">;

const PasswordTextField = (props: Props) => {
  const [visible, setVisible] = useState<boolean>(false);

  const toggleVisibility = () => {
    setVisible((prevState) => !prevState);
  };

  return (
    <TextField
      type={visible ? "text" : "password"}
      InputProps={{
        endAdornment: (
          <PasswordPostfix isVisible={visible} onClick={toggleVisibility} />
        ),
      }}
      {...props}
    />
  );
};

export default PasswordTextField;
