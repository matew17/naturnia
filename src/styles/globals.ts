import { createGlobalStyle } from "styled-components";
import { up, only } from "styled-breakpoints";

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: Grafier;
        src: url("/fonts/grafier/PPGrafier-Regular.otf") format("opentype");
    }

    * {
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        background-repeat: no-repeat;
        box-sizing: border-box;
        text-rendering: optimizeLegibility;

        &:before,
        &:after {
            box-sizing: border-box;
        }
    }

    html {
        //Prevent iOS text size adjust after orientation change, without disabling user zoom.
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
        font-size: 16px;
        line-height: 1.2rem;
        height: 100%;

        body {
            padding: 0;
            margin: 0;
            font-family: Livvic, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
                Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;


            h1, h2, h3, h4, h5, h6, nav {
                font-family: Grafier, Livvic, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
                    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif; 
            }

            h1 {
                font-size: 2em;
            }

            h2 {
                font-size: 1.5em;
            }

            h3 {
                font-size: 1.25em;
            }

            a {
                color: inherit;
                text-decoration: none;
            }

            ${only("md")} {
                font-size: 18px;
            }

            ${up("lg")} {
                font-size: 20px;
            }
        }
    }
`;
