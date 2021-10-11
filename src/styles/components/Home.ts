import { down } from "styled-breakpoints";
import styled from "styled-components";

import { ThemedProps } from "../theme";

interface HomeStyled extends ThemedProps {}

export const HomeStyled = styled.section<HomeStyled>`
    .home-section {
        width: 100%;
        padding: 150px 60px;
    }

    .carousel {
        height: 100vh;
    }

    .soy-naturnia {
        background: ${({ theme }) => theme.colors.white};
        color: ${({ theme }) => theme.colors.pantone2};
    }

    .categories {
        background: ${({ theme }) => theme.colors.pantone2};
    }

    .asociate {
        color: ${({ theme }) => theme.colors.tamarindo3};
    }

    .clients {
        background: ${({ theme }) => theme.colors.araza1};
        color: ${({ theme }) => theme.colors.white};
    }

    .compra {
        background: ${({ theme }) => theme.colors.white};
    }

    ${down("sm")} {
        .home-section {
            width: 100%;
            padding: 16px;
        }
    }
`;
