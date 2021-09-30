import styled from "styled-components";

import { ThemedProps } from "../theme";

interface NavbarStyled extends ThemedProps {}

export const NavbarStyled = styled.nav<NavbarStyled>`
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.blackAlpha};
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: auto;
    padding: 8px 0;

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
                width: 120px;

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
        ul {
            flex: 1;
            display: flex;
            justify-content: flex-end;
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
            justify-content: space-evenly;
        }
    }
`;
