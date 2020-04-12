import brandLady from "../../assets/images/brandLady.png";
import { css, jsx } from "@emotion/core";
/** @jsx jsx */

export default function LoginLady() {
  return <img src={brandLady} alt="brand lady" css={styles.lady} />;
}

const styles = {
  lady: css`
    position: absolute;
    right: 0%;
    top: 2.22%;
    z-index: -1;
  `,
};
