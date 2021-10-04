import styled from "styled-components";

import { ThemedProps } from "../theme";

interface HomeStyled extends ThemedProps {}

export const HomeStyled = styled.nav<HomeStyled>`
    .bg-section {
        height: 50vh;
    }
`;
