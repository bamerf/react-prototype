import React from "react";
import { LoginImage } from "../../assets/svg/LoginImage";
import { useTheme } from "@material-ui/core/styles";

export default function LoginLady() {
  // const styles = useStyles();
  const theme = useTheme();
  return (
    <div >
      <LoginImage color={theme.palette.primary.main} />
    </div>
  );
}
