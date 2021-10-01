import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
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
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
                Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;

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

            @include from-breakpoint("medium") {
                font-size: 18px;
            }

            @include from-breakpoint("large") {
                font-size: 20px;
            }
        }
    }
`;
