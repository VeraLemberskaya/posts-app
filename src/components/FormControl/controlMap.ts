import { FC } from "react";

import { TextField } from "@mui/material";
import CheckboxControl from "../CheckboxControl";
import PasswordTextField from "../PasswordTextField";

export type ControlType = "text" | "password" | "checkbox";

export type ControlProps = {
  name: string;
  value: any;
  error?: boolean;
  label?: string;
  onBlur: (e: React.FocusEvent<any>) => void;
  onChange: (e: React.ChangeEvent<any>) => void;
};

export type Control = FC<ControlProps>;

export const CONTROL_MAP: Record<ControlType, Control> = {
  text: TextField,
  password: PasswordTextField,
  checkbox: CheckboxControl,
};
