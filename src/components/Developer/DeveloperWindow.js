import React from "react";
// import HeaderNav from "../Nav/HeaderNav";
// import ModalWindow from "../Modals/ModalWindow";
// import GenerateInviteLink from "../Modals/GenerateInviteLink";
// import ResendWelcomeEmails from "../Modals/ResendWelcomeEmails";
import ManageTemaples from "../ManageTemplates/ManageTemplates";

export default function DeveloperWindow() {
  return (
    <div style={styles}>
      {/* <ResendWelcomeEmails /> */}
      {/* <GenerateInviteLink /> */}
      <ManageTemaples />
    </div>
  );
}

const styles = {
  display: "flex",
  height: "100vh",
  justifyContent: "center",
  marginTop: "10rem",
};
