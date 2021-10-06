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
        height: 80vh;
    }

    .soy-naturnia {
        background: ${({ theme }) => theme.colors.white};
        color: ${({ theme }) => theme.colors.pantone2};
    }

    .categories {
        background: ${({ theme }) => theme.colors.pantone};
    }

    .asociate {
        background: ${({ theme }) => theme.colors.white};
        color: ${({ theme }) => theme.colors.tamarindo3};
    }

    ${down("sm")} {
        .categories {
            padding: 16px;
        }
    }
`;
