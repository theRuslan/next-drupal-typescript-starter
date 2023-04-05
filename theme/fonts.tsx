import { Global } from "@emotion/react"

const Fonts = () => (
  <Global
    styles={`
        @font-face {
          font-family: "AkzidenzGroteskPro";
          font-style: normal;
          font-weight: 300;
          font-display: swap;
          src: url(/fonts/akzidenz-grotesk/AkzidenzGroteskPro-LightEx.woff)
              format("woff"),
            url(/fonts/akzidenz-grotesk/AkzidenzGroteskPro-LightEx.ttf)
              format("truetype");
        }

        @font-face {
          font-family: "AkzidenzGroteskPro";
          font-style: normal;
          font-weight: 500;
          font-display: swap;
          src: url(/fonts/akzidenz-grotesk/AkzidenzGroteskPro-MdEx.woff)
              format("woff"),
            url(/fonts/akzidenz-grotesk/AkzidenzGroteskPro-MdEx.ttf)
              format("truetype");
        }
      `}
  />
)

export default Fonts
