import { down } from "styled-breakpoints";
import styled from "styled-components";

import { Font } from "@styles/abstracts/mixins";
import { ThemedProps } from "../theme";

interface BlogStyled extends ThemedProps {}

export const BlogStyled = styled.section<BlogStyled>`
    background: ${({ theme }) => theme.colors.araza2};
    color: ${({ theme }) => theme.colors.white};
    padding: 60px 0;

    h1 {
        ${Font(50, 55, 0.5, 700)};
        text-align: center;
        padding: 60px 0 0 0;
    }

    p {
        ${Font(28, 34, 0.5, 500)};
        text-align: center;
        padding: 16px;
    }

    ul {
        margin: 60px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;

        li {
            margin: 24px;
            width: 350px;
        }
    }

    // pinterest style
    /* ul {
        margin: 60px 60px 0;
        overflow: hidden;
        column-count: 3;
        column-gap: 24px;
        column-fill: auto;

        li {
            background: ${({ theme }) => theme.colors.pantone2};
            margin-bottom: 24px;
            -webkit-column-break-inside: avoid;
            column-break-inside: avoid;
            width: 400px;
        }
    } */

    ${down("md")} {
        h1 {
            ${Font(40, 45, 0.5, 700)};
            margin-top: 16px;
        }
    }

    ${down("sm")} {
    }
`;
