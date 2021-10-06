import { down } from "styled-breakpoints";
import styled from "styled-components";

import { ThemedProps } from "../theme";

interface HomeStyled extends ThemedProps {}

export const HomeStyled = styled.section<HomeStyled>`
    .carousel {
        height: 80vh;
    }

    .soy-naturnia {
        width: 100%;
        padding: 60px;
        background: ${({ theme }) => theme.colors.white};
        color: ${({ theme }) => theme.colors.pantone2};
    }

    .categories {
        width: 100%;
        padding: 60px;
        background: ${({ theme }) => theme.colors.pantone};
    }

    ${down("sm")} {
        .categories {
            padding: 16px;
        }
    }
`;
