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
        ${Font(40, 40, 0.5, 700)};
    }

    .soy {
        display: flex;
        width: 100%;
        margin: 32px 0;

        &__item {
            flex: 0.33;
            display: flex;
            flex-flow: column;
            align-items: center;
            justify-content: center;
            ${Font(30, 32, 0.5, 700)};
        }
    }

    ${down("lg")} {
        .soy {
            flex-wrap: wrap;

            &__item {
                min-width: 100%;
                margin: 60px 0;
            }
        }
    }
`;
