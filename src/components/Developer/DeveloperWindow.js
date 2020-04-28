import React from "react";
// import GenerateInviteLink from "../Modals/GenerateInviteLink";
// import ResendWelcomeEmails from "../Modals/ResendWelcomeEmails";
import Switch from "../Switch/Switch";

export default function DeveloperWindow() {
  return (
    <div style={styles}>
      {/* <ResendWelcomeEmails /> */}
      {/* <GenerateInviteLink /> */}
      <Switch />
    </div>
  );
}

const styles = {
  display: "flex",
  height: "100vh",
  justifyContent: "center",
  marginTop: "10rem",
};
