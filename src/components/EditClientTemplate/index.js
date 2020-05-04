import React from "react";
import ModalWindow from "../Modals/ModalWindow";
import SwitchItem from "./SwitchItem";
import SelectItem from "./SelectItem";
import { colors } from "../../data/colors";
import Expansion from "../Expansion/Expansion";

import {
  Typography,
} from "@material-ui/core";
import Button from "../Button/Button";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  btnWrapper: {
    display: "flex",
    justifyContent: "flex-end",
    marginTop: "60px"
  },
  expansionTitle: {
    color: "#F2F2F2",
  },
  green: {
    color: "#84CD15"
  },
  black: {
    color: "black"
  }
}));

export default function EditClient({ open, callBack }) {
  const styles = useStyles();

  return (
    <ModalWindow
      open={open}
      callBack={callBack}
      title="Edit Client"
      width={1000}
    >
      <div>
        <SwitchItem
          title="Client Access"
          description="This will allow you to restrict login access for a client. This will not restrict learners from completting lessons." />
        <SwitchItem
          title="Health Check"
          description="This will allow you to restrict login access for a client. This will not restrict learners from completting lessons." />
        <SwitchItem
          title="Free Phishing Simulation"
          description="This will allow you to restrict login access for a client. This will not restrict learners from completting lessons." />
        <Expansion
          title={
            <Typography variant="body1" className={styles.expansionTitle}>
              <span className={styles.black}>Cyber Aware</span><span className={styles.green}>Free</span>
            </Typography>
          }
        ></Expansion>
        <SwitchItem
          title=""
          description="This will allow you to restrict login access for a client. This will not restrict learners from completting lessons."
        />
        <SelectItem
          title="Learner Limit"
          description="This will allow you to restrict login access for a client. This will not restrict learners from completting lessons00000."
        />
        <Expansion
          title={
            <Typography variant="body1" className={styles.expansionTitle}>
              <span className={styles.black}>Cyber Aware</span><span className={styles.green}>Free</span>
            </Typography>
          }
        ></Expansion>
        <div className={styles.btnWrapper}>
          <Button thick={true} kind="primary">Update Client</Button>
        </div>
      </div>
    </ModalWindow>
  );
}
