import { down } from "styled-breakpoints";
import styled from "styled-components";

import { Font } from "@styles/abstracts/mixins";
import { ThemedProps } from "../theme";
import { zindex } from "@styles/abstracts/functions";

interface CatalogoStyled extends ThemedProps {}

export const CatalogoStyled = styled.section<CatalogoStyled>`
    .banner {
        height: 100vh;
        position: relative;

        &__title {
            position: absolute;
            bottom: 0;
            display: flex;
            flex-flow: column;
            align-items: center;
            width: 100%;
            z-index: ${zindex("base")};
            color: ${({ theme }) => theme.colors.white};
            background: ${({ theme }) => theme.colors.blackLight};
            padding: 24px 0;
            text-align: center;

            h1 {
                ${Font(90, 110, 0.5, 500)};
            }

            h2 {
                ${Font(50, 60, 0.5, 500)};
            }
        }
    }

    .categories-nav {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: ${({ theme }) => theme.colors.whiteLight};
        border-bottom: 1px solid ${({ theme }) => theme.colors.grey};
        padding: 16px;
        position: -webkit-sticky;
        position: sticky;
        top: 58px;
        z-index: ${zindex("base")};

        &__btn {
            ${Font(24, 28, 1, 700)};
            margin: 0 16px;
        }
    }

    .categories {
        display: flex;
        flex-flow: column;
        align-items: center;

        &__item {
            width: 1200px;
            min-width: 1200px;
            margin: 140px 0;
        }

        &__item--banner {
            display: flex;
        }

        &__item--image-wrapper {
            min-height: 80vh;
            position: relative;
            width: 792px;
            min-width: 792px;
            margin: 8px 8px 0 0;
        }

        &__item--description {
            display: flex;
            flex-flow: column;
            justify-content: space-between;
        }

        &__item--description,
        &__item--products--item {
            width: 392px;
            min-width: 392px;
            margin: 8px 8px 0 0;
        }

        &__item--products--item-full {
            width: 592px;
        }

        &__item--description--text {
            padding: 0 16px;
            text-align: center;

            h3 {
                ${Font(40, 45, 1, 700)};
                color: ${({ theme }) => theme.colors.pantone2};
                padding: 26px 0 8px 0;
            }

            p {
                ${Font(24, 28, 1, 500)};
            }
        }

        &__item--description--image {
            position: relative;
            flex: 0.8;
        }

        &__item--products {
            display: flex;
            flex-wrap: wrap;
            justify-content: flex-start;
        }

        &__item--products--item {
            display: flex;
            flex-flow: column;
            height: 550px;
        }

        &__item--products--image {
            position: relative;
            flex: 0.8;
        }

        &__item--products--text {
            ${Font(24, 28, 0.5, 500)};
            text-align: center;
            flex: 0.2;
            padding: 24px 0;

            span {
                ${Font(24, 28, 0.5, 700)};
                color: ${({ theme }) => theme.colors.pantone2};
            }
        }
    }

    .image-elements {
        border-radius: 4px;
    }

    .compra {
        width: 100%;
        padding: 150px 60px;
    }

    ${down("lg")} {
        .banner {
            &__title {
                h1 {
                    ${Font(90, 100, 1, 700)};
                }

                h2 {
                    ${Font(45, 55, 1, 700)};
                }
            }
        }

        .categories {
            &__item {
                min-width: 768px;
                width: 768px;
            }

            &__item--image-wrapper {
                min-width: 504px;
                width: 504px;
            }

            &__item--description,
            &__item--products--item {
                width: 248px;
                min-width: 248px;
            }

            &__item--products--item-full {
                min-width: 100%;
                width: 100%;
            }
        }
    }

    ${down("sm")} {
        .banner {
            &__title {
                h1 {
                    ${Font(65, 75, 1, 700)};
                }

                h2 {
                    ${Font(30, 40, 1, 700)};
                }
            }
        }

        .categories-nav {
            &__btn {
                ${Font(20, 24, 1, 700)};
            }
        }

        .categories {
            &__item {
                min-width: 100%;
                width: 100%;
                padding: 16px;
                margin: 70px 0;
            }

            &__item--banner {
                flex-flow: column;
            }

            &__item--image-wrapper {
                min-width: 100%;
                width: 100%;
                order: 2;
                margin: 36px 0;
            }

            &__item--description {
                justify-content: center;
                width: 100%;
                margin: 0;
                padding: 0 36px;
            }

            &__item--description--image {
                display: none;
            }

            &__item--products {
                justify-content: space-between;
            }

            &__item--products--item {
                min-width: 48%;
            }
        }

        .compra {
            padding: 16px;
        }
    }

    ${down("xs")} {
        .banner {
            &__title {
                h1 {
                    ${Font(45, 44, 1, 700)};
                }

                h2 {
                    ${Font(20, 25, 1, 700)};
                }
            }
        }

        .categories-nav {
            padding: 8px 0;

            &__btn {
                ${Font(14, 20, 1, 700)};
                margin: 0;
            }
        }

        .categories {
            &__item--products {
                justify-content: space-between;
            }

            &__item--products--item {
                min-width: 100%;
            }
        }
    }
`;
