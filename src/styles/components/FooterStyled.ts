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
    justify-content: center;
    align-items: center;

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
                ${Font(24, 28, 0.1, 400)};
                margin: 8px 0;
                text-align: center;
            }
        }

        &__contact {
            width: 100%;
            text-align: center;

            p {
                margin: 16px 0;
            }

            a {
                ${Font(24, 28, 0.1, 500)};
            }
        }
    }

    ${down("md")} {
        flex-flow: column;

        .item {
            &__logos {
                width: 100%;
            }
        }
    }

    ${down("sm")} {
        .item {
            &__contact {
                p {
                    ${Font(24, 26, 0.1, 700)};
                    margin: 16px;
                }
            }
        }
    }
`;
