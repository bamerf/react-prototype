import React, { useState } from "react";
import PersonIcon from "@material-ui/icons/Person";
import Button from "../../components/Button/Button";
import {
  Paper,
  makeStyles,
  Typography,
  Divider,
  TextField,
  Link,
  fade,
} from "@material-ui/core";
import { colors } from "../../data/colors";
import { createBorderTop, rem } from "../../helpers/style";
import InputLabel from "../../components/InputLabel/InputLabel";

const useStyles = makeStyles(
  (theme) => ({
    root: {
      borderTop: createBorderTop(theme),
      width: rem(506),
      height: rem(472),
      marginLeft: rem(87),
      marginTop: rem(80),
      marginBottom: rem(76),
      boxShadow: "0px 10px 50px #ababab",
    },
    top: {
      display: "flex",
      alignItems: "center",
      marginTop: rem(30),
      marginBottom: rem(29),
      marginLeft: rem(38),
    },
    icon: {
      marginRight: rem(24),
    },
    divider: {
      backgroundColor: fade(colors.gray2, 0.1),
    },
    form: {
      padding: `${rem(16)} ${rem(24)} ${rem(32)}`,
      "& > *:not(:last-child)": {
        marginBottom: rem(16),
      },
    },
    button: {
      height: rem(70),
      width: rem(127),
    },
    inputLabel: {
      marginTop: rem(15),
    },
    forgotPasswordAndLogin: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: rem(45),
      paddingBottom: rem(57),
    },
    link: {
      cursor: "pointer",
    },
  }),
  { name: "LoginForm" }
);

export default function LoginForm() {
  const styles = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = () => {};

  return (
    <Paper className={styles.root}>
      <div className={styles.top}>
        <PersonIcon color="primary" className={styles.icon} fontSize="large" />
        <Typography variant="h4">Log in</Typography>
      </div>
      <Divider className={styles.divider} />
      <form className={styles.form} onSubmit={submit}>
        <InputLabel label="Email" className={styles.inputLabel}>
          <TextField
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            variant="outlined"
            fullWidth
            placeholder="john@email.com"
          />
        </InputLabel>
        <InputLabel label="Password" className={styles.inputLabel}>
          <TextField
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            variant="outlined"
            fullWidth
            placeholder="•••••••••••••"
          />
        </InputLabel>
        <div className={styles.forgotPasswordAndLogin}>
          <Typography variant="h6">
            <Link className={styles.link}>Forgotten your password?</Link>
          </Typography>
          <Button kind="primary" type="submit" className={styles.button}>
            Login
          </Button>
        </div>
      </form>
    </Paper>
  );
}