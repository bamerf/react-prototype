import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Modal, Backdrop, Fade, Paper, Typography } from "@material-ui/core";
import { ClearRounded } from "@material-ui/icons";
import { colors } from "../../data/colors";
import { createBorderTop, rem } from "../../helpers/style";
import classnames from "classnames";

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
      width: rem(500),
      outline: "none",
    },
    header: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: `${rem(20)} ${rem(10)}`,
      paddingRight: rem(20),
    },
    content: {
      padding: `${rem(0)} ${rem(30)}`,
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
    titleAndIcon: {
      display: "flex",
      alignItems: "center",
    },
    startIcon: {
      margin: `${rem(0)} ${rem(10)}`,
      color: theme.palette.primary.main,
      "& svg": {
        fontSize: rem(30),
      },
    },
  }),
  { name: "DialogModal" }
);

export default function DialogModal({
  title,
  button,
  icon,
  children,
  color,
  className,
}) {
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
        <Paper
          className={styles.container}
          elevation={3}
          variant="outlines"
          style={{ borderColor: color }}
        >
          <div className={styles.header}>
            <div className={styles.titleAndIcon}>
              <div className={classnames(styles.startIcon, className)}>
                {icon}
              </div>
              <Typography variant="h4">{title}</Typography>
            </div>
            <ClearRounded className={styles.icon} onClick={handleClose} />
          </div>
          <div className={styles.content}>{children}</div>
          <div className={styles.footer}>{button}</div>
        </Paper>
      </Fade>
    </Modal>
  );
}
