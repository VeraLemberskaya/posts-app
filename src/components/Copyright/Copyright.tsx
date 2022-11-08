import { FC } from "react";
import { Typography, SxProps, Theme } from "@mui/material";

type Props = {
  sx?: SxProps<Theme>;
};

const Copyright: FC<Props> = (props) => {
  const currentYear = new Date().getFullYear();

  return (
    <Typography variant="body2" color="text.secondary" {...props}>
      Copyright&nbsp;©&nbsp;PostApp&nbsp;
      {currentYear}.
    </Typography>
  );
};

export default Copyright;
