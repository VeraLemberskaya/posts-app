import { Avatar } from "@mui/material";

import LogoIcon from "../assets/logo.svg";

type LogoSize = "small" | "medium" | "large";

type Props = {
  size?: LogoSize;
};

const LOGO_SIZES = {
  small: {
    width: 36,
    height: 36,
  },
  medium: {
    width: 46,
    height: 46,
  },
  large: {
    width: 56,
    height: 56,
  },
};

const Logo = ({ size = "medium" }: Props) => {
  return <Avatar src={LogoIcon} alt="logo" sx={{ ...LOGO_SIZES[size] }} />;
};

export default Logo;
