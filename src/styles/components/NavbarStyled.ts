import { down } from "styled-breakpoints";
import styled from "styled-components";

import { Font } from "@styles/abstracts/mixins";
import { ThemedProps } from "../theme";
import { zindex } from "@styles/abstracts/functions";

interface NavbarStyled extends ThemedProps {
    position?: string;
}

export const NavbarStyled = styled.nav<NavbarStyled>`
    .menu-wrapper {
        position: ${({ position }) => position || "relative"};
        top: 0;
        z-index: ${zindex("menu")};
        color: ${({ theme }) => theme.colors.white};
        background-color: ${({ theme }) => theme.colors.pantone2}99;
        width: 100%;
        height: auto;
        padding: 4px 0;
    }

    .flex-container {
        display: flex;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .menu {
        flex: 0.25;
        padding: 0 16px;
        display: flex;
        justify-content: flex-start;

        &__items {
            flex: 1;
            display: flex;
            align-items: center;

            &--list {
                border-top: 2px solid transparent;
                padding-top: 8px;
                cursor: pointer;
                text-align: center;
                width: 140px;

                &:hover {
                    border-top: 2px solid ${({ theme }) => theme.colors.white};
                }
            }

            &--active {
                border-top: 2px solid ${({ theme }) => theme.colors.white};
                padding-top: 8px;
            }
        }

        &__ig {
            flex: 0.2;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
        }
    }

    .menu-right {
        position: relative;

        ul {
            flex: 1;
            display: flex;
            justify-content: flex-end;
        }

        &__button {
            display: none;
        }
    }

    .menu-logo {
        flex: 0.5;
        display: flex;
        justify-content: center;
        cursor: pointer;

        ul {
            display: flex;
            flex: 1;
            align-items: center;
            justify-content: space-between;
        }

        &__img {
            position: relative;
            width: 200px;
            height: 150px;
            transition: all 0.5s;
        }
    }

    .menu--small {
        background-color: ${({ theme }) => theme.colors.pantone2}F2;

        .menu-logo__img {
            width: 50px;
            height: 50px;
            transition: all 0.5s;
        }
    }

    .menu-mobile {
        display: none;
    }

    ${down("md")} {
        .hiden-mobile {
            display: none;
        }

        .menu {
            flex: 0.4;

            &__ig {
                flex: 1;
                justify-content: flex-start;
                align-items: flex-start;
            }
        }

        .menu-logo {
            flex: 0.6;

            ul {
                justify-content: center;
            }

            &__img {
                width: 140px;
                height: 100px;
            }
        }

        .menu-right {
            justify-content: flex-end;

            &__button {
                cursor: pointer;
                position: relative;
                display: flex;
                justify-content: center;
                align-items: center;
                color: ${({ theme }) => theme.colors.white};
                width: 30px;
                height: 30px;
            }
        }

        .menu-mobile {
            ${Font(40, 45, 0.5, 500)};
            display: block;
            overflow: hidden;
            max-height: 100vh;
            height: 100vh;
            transform: scaleY(1);
            transition: transform 0.3s ease, max-height 0.3s ease;
            background: ${({ theme }) => theme.colors.pantone2}F2;

            li {
                padding: 40px 0;
                text-align: center;
            }

            &--hide {
                max-height: 0;
                transform: scaleY(0);
            }
        }
    }
`;
