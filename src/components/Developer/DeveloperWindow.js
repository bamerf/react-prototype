import React from "react";
// import HeaderNav from "../Nav/HeaderNav";
// import ModalWindow from "../Modals/ModalWindow";
// import GenerateInviteLink from "../Modals/GenerateInviteLink";
import ResendWelcomeEmails from "../Modals/ResendWelcomeEmails";

export default function DeveloperWindow() {
  return (
    <div style={styles}>
      <ResendWelcomeEmails />
      {/* <GenerateInviteLink /> */}
    </div>
  );
}

const styles = {
  display: "flex",
  height: "100vh",
  justifiyContent: "center",
  marginTop: "10rem",
};
