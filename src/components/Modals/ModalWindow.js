import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Modal,
  Backdrop,
  Fade,
  Paper,
  Typography,
  Divider,
} from "@material-ui/core";
import { ClearRounded } from "@material-ui/icons";
import { colors } from "../../data/colors";
import { createBorderTop, rem } from "../../helpers/style";

const useStyles = makeStyles(
  (theme) => ({
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    container: {
      backgroundColor: colors.white,
      borderTop: createBorderTop(theme),
      width: rem(700),
    },
    header: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: `${rem(20)} ${rem(30)}`,
    },
    content: {
      padding: `${rem(20)} ${rem(30)}`,
    },
    footer: {
      display: "flex",
      justifyContent: "flex-end",
      padding: `${rem(20)} ${rem(30)}`,
    },
    icon: {
      cursor: "pointer",
      fontSize: rem(30),
      transition: "all 100ms",
      "&:hover": {
        color: theme.palette.primary.main,
      },
    },
  }),
  { name: "ModalWindow" }
);

export default function ModalWindow(props) {
  const styles = useStyles();
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Modal
      className={styles.modal}
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <Paper className={styles.container} elevation={3} variant="outlines">
          <div className={styles.header}>
            <Typography variant="h4">{props.title}</Typography>
            <ClearRounded
              className={styles.icon}
              onClick={handleClose}
              size="lg"
            />
          </div>
          <Divider />
          <div className={styles.content}>{props.children}</div>
          <div className={styles.footer}>{props.button}</div>
        </Paper>
      </Fade>
    </Modal>
  );
}
