import React, { useState, useEffect } from "react";
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
      outline: "none",
      maxHeight: rem(700),
      overflowY: "scroll",
      "&::-webkit-scrollbar": {
        width: 0,
        height: 0,
      },
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
  const openModal = props.open;
  const modalCallBack = props.callBack;
  const styles = useStyles();
  const [open, setOpen] = useState(openModal);

  useEffect(() => {
    setOpen(openModal);
  }, [openModal]);

  const handleClose = () => {
    setOpen(false);
    modalCallBack(false);
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
        <Paper
          className={styles.container}
          style={{ width: rem(props.width) }}
          elevation={3}
          variant="outlines"
        >
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
