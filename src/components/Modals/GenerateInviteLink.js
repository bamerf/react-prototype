import React from "react";
import ModalWindow from "./ModalWindow";
import CheckBox from "../CheckBox/CheckBox";
import Button from "../Button/Button";
import Bold from "../Bold/Bold";
import { rem } from "../../helpers/style";
import { makeStyles, Typography } from "@material-ui/core";

const checkBoxLables = [
  "Sales",
  "Support",
  "Billing",
  "Operations",
  "Failed phishing learners",
  "Victoria",
  "Administrators",
  "Hosting Australia staff",
  "Systems",
];

const useStyles = makeStyles(
  (theme) => ({
    button: {
      marginLeft: "1rem",
    },
    description: {
      margin: `${rem(16)} ${0}`,
    },
    checkboxParent: {
      width: rem(670),
      display: "flex",
      justifyContent: "center",
    },
    checkBoxContainer: {
      margin: `${rem(20)} ${rem(20)}`,
      listStyle: "none",
      width: "100%",
    },
    checkbox: {
      width: rem(310),
      display: "inline-block",
    },
  }),
  { name: "generateLinkModal" }
);

export default function GenerateInviteLink(props) {
  const open = true;
  const styles = useStyles();

  // const [checked, setChecked] = useState({
  //   checkedA: true,
  //   checkedB: true,
  //   checkedF: true,
  //   checkedG: true,
  // });

  // const handleChange = (event) => {
  //   setChecked({ ...checked, [event.target.name]: event.target.checked });
  // };

  return (
    <ModalWindow
      open={open}
      title="Generate Invite Link"
      width={700}
      button={
        <div>
          <Button thick={true} kind="secondary" className={styles.button}>
            Cancel
          </Button>
          <Button thick={true} kind="primary" className={styles.button}>
            Generate Link
          </Button>
        </div>
      }
    >
      <Typography varinat="body2" className={styles.description}>
        Select {"tag(s)"} for learners who use this link to sign up. Press{" "}
        <Bold variant="body2" text="Generate Link" /> to get a sign-up link
      </Typography>
      <div className={styles.checkboxParent}>
        <div className={styles.checkBoxContainer}>
          {checkBoxLables.map((label) => (
            <div className={styles.checkbox}>
              <CheckBox label={label} />
            </div>
          ))}
        </div>
      </div>
    </ModalWindow>
  );
}
