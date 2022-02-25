import { Global } from "@emotion/react";

const Fonts = () => (
  <Global
    styles={`
      /* latin */
      @font-face {
        font-family: 'DM_Sans';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url('./DMSans-Bold.ttf') format('ttf'), url('./DMSans-Bold.ttf') format('ttf');
      }
      `}
  />
);

export default Fonts;
