import { down } from "styled-breakpoints";
import styled from "styled-components";

import { Font } from "@styles/abstracts/mixins";
import { ThemedProps } from "../theme";

interface AsociateStyled extends ThemedProps {}

export const AsociateStyled = styled.section<AsociateStyled>`
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: flex-start;

    h1 {
        ${Font(50, 55, 0.5, 700)};
        text-align: center;
    }

    p {
        ${Font(30, 34, 0.5, 500)};
        margin-top: 24px;
        text-align: center;
    }

    .connect {
        display: flex;
        width: 100%;
        margin: 60px 0;
        justify-content: space-evenly;
        align-items: center;

        &__item {
            ${Font(30, 32, 0.5, 700)};
            flex: 0.33;
            cursor: pointer;
            display: flex;
            flex-flow: column;
            align-items: center;
            justify-content: flex-start;

            p {
                ${Font(24, 30, 0.5, 700)};
            }
        }

        &__item--image {
            position: relative;
            width: 320px;
            height: 320px;

            .img {
                border-radius: 100%;
            }
        }
    }

    .contact {
        margin: 24px 0;
        display: flex;

        &__item {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-flow: column;

            p {
                ${Font(40, 45, 0.5, 500)};
                width: 70%;
                margin: 36px 0;
            }
        }
    }

    ${down("md")} {
        .connect {
            flex-wrap: wrap;

            &__item {
                min-width: 100%;
                margin: 60px 0;

                p {
                    ${Font(36, 38, 0.5, 700)};
                }
            }

            &__item--image {
                width: 350px;
                height: 350px;
            }
        }
    }

    ${down("sm")} {
        h1 {
            ${Font(40, 45, 0.5, 700)};
            margin-top: 16px;
        }

        .connect {
            margin: 24px 0;

            &__item {
                margin: 24px 0;
            }

            &__item--image {
                width: 300px;
                height: 300px;
            }
        }

        .contact {
            &__item {
                p {
                    margin: 24px 0;
                    ${Font(32, 34, 0.5, 500)};
                    width: 100%;
                }
            }
        }
    }
`;
