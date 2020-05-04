import React, { useState } from 'react';
import { ManageClientsIcon } from "../../assets/svg/PartnerPortalIcons";
import { colors } from "../../data/colors";
import { rem, createBorderTop } from "../../helpers/style";
import Button from "../Button/Button";
import CustomTable from '../CustomTable';
import AttachmentIcon from '@material-ui/icons/Attachment';
import AddIcon from '@material-ui/icons/Add';
import CloudIcon from '@material-ui/icons/Cloud';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import AddClientTemplate from "../AddClientTemplate";

const paddingSides = 28;

const rows = [
  { name: "Graham Chee", bussines: "Knowledge1", reseller: "BCyber Pty Ltd", date: "24/04/2020", solution: "Free", learned: "200 learners" },
  { name: "Graham Chee", bussines: "Knowledge2", reseller: "BCyber Pty Ltd", date: "24/04/2020", solution: "Free", learned: "201 learners" },
  { name: "Graham Chee", bussines: "Knowledge3", reseller: "BCyber Pty Ltd", date: "24/04/2020", solution: "Free", learned: "206 learners" },
  { name: "Graham Chee", bussines: "Knowledge4", reseller: "BCyber Pty Ltd", date: "24/04/2020", solution: "Free", learned: "206 learners" },
  { name: "Graham Chee", bussines: "Knowledge5", reseller: "BCyber Pty Ltd", date: "24/04/2020", solution: "Free", learned: "209 learners" },
  { name: "Graham Chee", bussines: "Knowledge6", reseller: "BCyber Pty Ltd", date: "24/04/2020", solution: "Free", learned: "223 learners" },
  { name: "Graham Chee", bussines: "Knowledge7", reseller: "BCyber Pty Ltd", date: "24/04/2020", solution: "Free", learned: "256 learners" },
  { name: "Graham Chee", bussines: "Knowledge8", reseller: "BCyber Pty Ltd", date: "24/04/2020", solution: "Free", learned: "213 learners" },
  { name: "Graham Chee", bussines: "Knowledge9", reseller: "BCyber Pty Ltd", date: "24/04/2020", solution: "Free", learned: "211 learners" },
]

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: colors.white,
    boxShadow: "none",
    borderTop: createBorderTop(theme),
    borderRadius: 8,
    overflow: "hidden",
  },
  top: {
    padding: rem(paddingSides),
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  },
  main: {
    padding: rem(paddingSides),
  },
  manageTitle: {
    display: "flex",
    alignItems: "center",
  },
  buttonsWrapper: {
    display: "flex",
  },
  manageButton: {
    fontSize: rem(13),
    marginLeft: 10,
    border: "1px solid #E0E0E0",
    boxSizing: "border-box",
    borderRadius: 4,
    padding: "11px 19px",
    "& svg": {
      color: theme.palette.primary.main,
    },
  },
  manageIcon: {
    paddingRight: 25,
  },
}));

export default function ManageClients() {
  const styles = useStyles();
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className={styles.root}>
      <div className={styles.top}>
        <div className={styles.manageTitle}>
          <ManageClientsIcon className={styles.manageIcon} />
          <Typography variant="h4">Manage Clients</Typography>
        </div>
        <div className={styles.buttonsWrapper}>
          <Button
            kind="secondary"
            className={styles.manageButton}
            startIcon={<AttachmentIcon className={styles.sendIcon} size="small" />}
          >
            Shareable Link
            </Button>
          <Button
            kind="secondary"
            onClick={() => setOpenModal(true)}
            className={styles.manageButton}
            startIcon={<AddIcon className={styles.sendIcon} size="small" />}
          >
            Add Client
            </Button>
          <AddClientTemplate open={openModal} callBack={setOpenModal} />
          <Button
            kind="secondary"
            className={styles.manageButton}
            startIcon={<CloudIcon className={styles.sendIcon} size="small" />}
          >
            Add Client
            </Button>
        </div>
      </div >
      <div className={styles.main}>
        <CustomTable rows={rows} />
      </div>
    </div>
  );
}
