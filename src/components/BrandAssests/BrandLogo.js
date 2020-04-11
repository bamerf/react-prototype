import React from "react";
import logo from "../../assets/images/Logo.png";
import { css, jsx } from "@emotion/core";
/** @jsx jsx */

export default function BrandAssets() {
  return <img src={logo} alt="logo" css={styles.logo} />;
}

const styles = {
  logo: css`
    width: 420px;
    margin-top: 80px;
    margin-left: 88px;
  `,
};
