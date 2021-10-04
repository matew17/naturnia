import { createGlobalStyle } from "styled-components";

import { colors } from "./abstracts/functions";

export const ResetStyle = createGlobalStyle`
    /**
    * reset.scss
    * Contains the sitewide css reset
    */

    html,
    body,
    div,
    span,
    object,
    iframe,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    blockquote,
    pre,
    abbr,
    address,
    address,
    cite,
    code,
    del,
    dfn,
    em,
    img,
    ins,
    kbd,
    q,
    samp,
    small,
    strong,
    sub,
    sup,
    var,
    b,
    i,
    dl,
    dt,
    dd,
    ol,
    ul,
    li,
    fieldset,
    form,
    label,
    legend,
    table,
    caption,
    tbody,
    tfoot,
    thead,
    tr,
    th,
    td,
    article,
    aside,
    canvas,
    details,
    figcaption,
    figure,
    footer,
    header,
    hgroup,
    menu,
    nav,
    section,
    summary,
    time,
    mark,
    audio,
    video {
        background: ${colors("transparent")};
        border: 0;
        margin: 0;
        outline: 0;
        padding: 0;
        vertical-align: baseline;
    }

    article,
    aside,
    details,
    figcaption,
    figure,
    footer,
    header,
    hgroup,
    img,
    menu,
    nav,
    section {
        display: block;
    }

    ol,
    ul {
        list-style: none;
    }

    blockquote,
    q {
        quotes: none;

        :before,
        :after {
            content: none;
        }
    }

    a {
        cursor: pointer;
        background: colors("transparent");
        margin: 0;
        padding: 0;
        text-decoration: none;
        touch-action: manipulation;
        vertical-align: baseline;
    }

    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    hr {
        border: 0;
        display: block;
        height: 1px;
        margin: 1em 0;
        padding: 0;
    }

    input,
    select {
        vertical-align: middle;
    }

    address {
        font-style: normal;
    }

    input {
        &::-ms-clear {
            display: none;
        }
    }

    button {
        background: none;
        border: 0;
        padding: 0;
    }

    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    textarea:-webkit-autofill,
    textarea:-webkit-autofill:hover,
    textarea:-webkit-autofill:focus,
    select:-webkit-autofill,
    select:-webkit-autofill:hover,
    select:-webkit-autofill:focus {
        -webkit-box-shadow: 0 0 0px 1000px transparent inset;
        -webkit-text-fill-color: white;
        box-shadow: 0 0 0px 1000px transparent inset;
        transition: background-color 5000s ease-in-out 0s;
    }

    /* Customize website's scrollbar like Mac OS
    Not supports in Firefox and IE */

    .windows,
    .linux {
        /* total width */
        ::-webkit-scrollbar {
            width: 4px;
        }

        /* background of the scrollbar except button or resizer */
        ::-webkit-scrollbar-track {
            background-color: transparent;
        }
        ::-webkit-scrollbar-track:hover {
            background-color: transparent;
        }

        /* scrollbar itself */
        ::-webkit-scrollbar-thumb {
            background-color: transparent;
            border-radius: 8px;
            border: 4px solid #707683;
        }

        ::-webkit-scrollbar-thumb:hover {
            background-color: transparent;
        }

        /* set button(top and bottom of the scrollbar) */
        ::-webkit-scrollbar-button {
            display: none;
        }
    }

    input[type="time"]::-webkit-calendar-picker-indicator {
        background: none;
        display: none;
    }
`;
