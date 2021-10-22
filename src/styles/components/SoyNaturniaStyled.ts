import { down } from "styled-breakpoints";
import styled from "styled-components";

import { Font } from "@styles/abstracts/mixins";
import { ThemedProps } from "../theme";

interface SoyNaturniaStyled extends ThemedProps {}

export const SoyNaturniaStyled = styled.section<SoyNaturniaStyled>`
    display: flex;
    flex-flow: column;
    align-items: center;

    h1 {
        ${Font(50, 54, 0.5, 700)};
    }

    .desc {
        ${Font(40, 45, 0.5, 500)};
        text-align: center;
        margin: 60px 0 0 0;
        max-width: 70%;
    }

    .soy {
        display: flex;
        width: 100%;
        margin: 32px 0;

        &__item {
            ${Font(30, 32, 0.5, 700)};
            flex: 0.33;
            display: flex;
            flex-flow: column;
            align-items: center;
            justify-content: center;
            position: relative;

            p {
                position: absolute;
                bottom: -45px;
            }
        }
    }

    ${down("sm")} {
        padding: 40px 0;

        .soy {
            flex-wrap: wrap;

            &__item {
                margin: 0;
                min-width: 100%;
            }
        }
    }
`;
