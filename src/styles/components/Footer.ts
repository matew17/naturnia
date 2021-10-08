import styled from "styled-components";

import { Font } from "@styles/abstracts/mixins";
import { ThemedProps } from "../theme";
import { down } from "styled-breakpoints";

interface Footer extends ThemedProps {}

export const Footer = styled.footer<Footer>`
    display: flex;
    background: ${({ theme }) => theme.colors.pantone2};
    color: ${({ theme }) => theme.colors.white};
    padding: 60px 0;

    .item {
        flex: 0.33;
        display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: center;

        &__logos {
            display: flex;
            justify-content: space-evenly;
            width: 20%;
        }

        &__list {
            display: flex;
            flex-flow: column;

            li {
                ${Font(24, 28, 0.1, 700)};
                margin: 8px 0;
                text-align: center;
            }
        }

        &__contact {
            margin: 24px 0 0 0;
            width: 80%;

            p {
                ${Font(30, 34, 0.1, 700)};
                margin: 16px 0;
            }

            a {
                margin: 0 8px;
                ${Font(24, 28, 0.1, 500)};
            }
        }
    }

    .item-end {
        justify-content: flex-end;
    }

    ${down("lg")} {
        flex-flow: column;

        .item {
            &__contact {
                width: 50%;
                text-align: center;
            }
        }
    }

    ${down("sm")} {
        .item {
            &__contact {
                width: 80%;
            }
        }
    }
`;
