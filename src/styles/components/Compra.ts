import { down } from "styled-breakpoints";
import styled from "styled-components";

import { Font } from "@styles/abstracts/mixins";
import { ThemedProps } from "../theme";

interface CompraStyled extends ThemedProps {}

export const CompraStyled = styled.section<CompraStyled>`
    display: flex;
    height: 450px;
    background: ${({ theme }) => theme.colors.pantone2};
    color: ${({ theme }) => theme.colors.white};

    .info,
    .image {
        display: flex;
        flex-flow: column;
        flex: 0.5;
        position: relative;
        height: 100%;
        align-items: center;
        justify-content: space-evenly;
    }

    .info {
        padding: 0 60px;
        text-align: center;
        /* background: ${({ theme }) => theme.colors.white}; */

        h1 {
            ${Font(60, 62, 0.6, 500)};
            margin: 16px 0;
        }
    }

    ${down("md")} {
        height: 800px;
        flex-flow: column;

        .info,
        .image {
            flex: 1;
        }
    }

    ${down("sm")} {
        .info {
            padding: 24px;

            h1 {
                ${Font(40, 45, 0.6, 500)};
            }
        }
    }
`;
