import styled from "styled-components";

import { ThemedProps } from "../theme";

interface HomeStyled extends ThemedProps {}

export const HomeStyled = styled.section<HomeStyled>`
    .carousel {
        height: 75vh;
    }

    .categories {
        width: 100%;
        padding: 60px;
        background: ${({ theme }) => theme.colors.pantone};
    }

    .big-section {
        margin: 16px 0;
        height: 100vh;
    }
`;
