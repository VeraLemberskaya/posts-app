import { Typography, SxProps, Theme } from "@mui/material";

type Props = {
  sx?: SxProps<Theme>;
};

const Copyright = (props: Props) => {
  const currentYear = new Date().getFullYear();

  return (
    <Typography variant="body2" color="text.secondary" {...props}>
      Copyright&nbsp;©&nbsp;PostApp&nbsp;
      {currentYear}.
    </Typography>
  );
};

export default Copyright;
