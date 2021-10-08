import { down } from "styled-breakpoints";
import styled from "styled-components";

import { Font } from "@styles/abstracts/mixins";
import { ThemedProps } from "../theme";

interface ClientesStyled extends ThemedProps {}

export const ClientesStyled = styled.section<ClientesStyled>`
    display: flex;
    flex-flow: column;
    align-items: center;

    h1 {
        ${Font(45, 54, 0.5, 700)};
    }

    .clients {
        display: flex;
        width: 100%;
        margin: 32px 0;
        flex-wrap: wrap;
        justify-content: space-around;

        &__item--image {
            position: relative;
            width: 380px;
            height: 380px;
        }
    }

    ${down("lg")} {
        .clients {
            &__item {
                min-width: 100%;
                margin: 60px 0;

                a {
                    width: 100%;
                    display: flex;
                    justify-content: center;
                }
            }

            &__item--image {
                width: 50%;
                height: 450px;
            }
        }
    }

    ${down("lg")} {
        h1 {
            text-align: center;
        }

        .clients {
            &__item {
                margin: 24px 0;
            }

            &__item--image {
                width: 100%;
                height: 450px;
            }
        }
    }
`;
