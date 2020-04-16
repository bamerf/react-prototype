import React from "react";
import HeaderNav from "../Nav/HeaderNav";

export default function DeveloperWindow() {
  return (
    <div style={styles}>
      <HeaderNav />
    </div>
  );
}

const styles = {
  display: "flex",
  height: "100vh",
  justifiyContent: "center",
  marginTop: "10rem",
};
