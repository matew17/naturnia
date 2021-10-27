import { down } from "styled-breakpoints";
import styled from "styled-components";

import { Font } from "@styles/abstracts/mixins";
import { ThemedProps } from "../theme";

interface CategoriaStyled extends ThemedProps {}

export const CategoriaStyled = styled.section<CategoriaStyled>`
    height: 650px;
    display: flex;

    &.inverted {
        flex-flow: row-reverse;
    }

    .info,
    .image {
        display: flex;
        flex: 0.5;
        height: 100%;
        position: relative;
    }

    .info {
        &__description {
            display: flex;
            flex-flow: column;
            justify-content: center;
            padding: 0 40px;
        }

        &__description--title {
            p {
                ${Font(24, 28, 0.2, 500)};
                margin: 32px 0;
                color: ${({ theme }) => theme.colors.pantone};
            }

            h1 {
                ${Font(36, 38, 0.2, 700)};
                color: ${({ theme }) => theme.colors.pantone2};
                cursor: pointer;
            }
        }

        &__description--body {
            margin: 24px 0 0 0;
            text-align: left;
            color: ${({ theme }) => theme.colors.black};
            ${Font(30, 34, 0.1, 500)};
        }

        &__description--no-margin {
            margin: 0;
        }

        &__description--usage {
            margin: 24px 0 0 0;

            h2 {
                color: ${({ theme }) => theme.colors.pantone2};
                ${Font(30, 32, 0.2, 700)};
            }

            ul {
                margin: 16px 0 0 0;
                display: flex;
                flex-wrap: wrap;
            }

            li {
                margin: 0 8px;
                list-style: square inside;
                ${Font(24, 28, 0.1, 500)};
            }
        }
    }

    ${down("md")} {
        height: 850px;
        flex-flow: column;

        &.inverted {
            flex-flow: column;
        }

        .info,
        .image {
            flex: 1;
        }
    }

    ${down("sm")} {
        .info {
            &__description {
                padding: 24px;
            }
        }
    }
`;
