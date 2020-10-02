import { colors } from "../../data/colors";
import { rem } from "../../helpers/style";
import { css, jsx } from "@emotion/core";
/** @jsx jsx */

export default function LoginFooter() {
  return (
    <div css={styles.footerParent}>
      <a
        // target="_blank"
        rel="noopener noreferrer"
        href="/login"
        css={styles.footerLink}
      >
        Risk Assessment & Reporting
      </a>
      <span css={styles.footerLinkSpacer}>|</span>
      <a
        // target="_blank"
        rel="noopener noreferrer"
        href="/login"
        css={styles.footerLink}
      >
        Awareness Training & Phishing
      </a>
      <span css={styles.footerLinkSpacer}>|</span>
      <a
        // target="_blank"
        rel="noopener noreferrer"
        href="/login"
        css={styles.footerLink}
      >
        Company Material
      </a>
    </div>
  );
}

const styles = {
  footerParent: css`
    margin-bottom: ${rem(20)};
    margin-left: ${rem(88)};
    margin-top: ${rem(50)};
  `,
  footerLink: css`
    color: ${colors.gray3};
    text-decoration: none;
  `,
  footerLinkSpacer: css`
    color: ${colors.gray3};
    margin: 0 ${rem(8)};
  `,
};
