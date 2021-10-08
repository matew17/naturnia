import { down } from "styled-breakpoints";
import styled from "styled-components";

import { Font } from "@styles/abstracts/mixins";
import { ThemedProps } from "../theme";

interface CompraStyled extends ThemedProps {}

export const CompraStyled = styled.section<CompraStyled>`
    display: flex;
    height: 450px;

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
        background: ${({ theme }) => theme.colors.white};

        h1 {
            margin: 16px 0;
            ${Font(60, 62, 0.6, 500)};
        }
    }

    ${down("lg")} {
        height: 1300px;
        flex-flow: column;

        .info,
        .image {
            flex: 1;
        }
    }

    ${down("sm")} {
        .info {
            padding: 24px;
        }
    }
`;
