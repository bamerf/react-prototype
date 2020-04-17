import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import DialogModal from "../Modals/DialogModal";
import Button from "../Button/Button";
import { Error } from "@material-ui/icons";
import { rem } from "../../helpers/style";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles(
  (theme) => ({
    icon: {
      color: theme.palette.error.main,
    },
    button: {
      marginLeft: "1rem",
      "& span": {
        padding: `${rem(5)} ${rem(3)}`,
      },
    },
    description: {
      marginBottom: rem(5),
    },
  }),
  { name: "ResendEmail" }
);

export default function ResendWelcomeEmails() {
  const styles = useStyles();
  const theme = useTheme();

  return (
    <DialogModal
      title="Resend welcome emails?"
      icon={<Error className={styles.icon} />}
      color={theme.palette.error.main}
      button={
        <div>
          <Button kind="secondary" className={styles.button}>
            Cancel
          </Button>
          <Button kind="primary" className={styles.button}>
            Send
          </Button>
        </div>
      }
    >
      <Typography varinat="body2" className={styles.description}>
        This action will resend the welcome email to all learners. Use with
        caution
      </Typography>
    </DialogModal>
  );
}
