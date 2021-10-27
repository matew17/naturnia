import styled from "styled-components";

import { Font } from "@styles/abstracts/mixins";
import { ThemedProps } from "../theme";

interface Custom404Styled extends ThemedProps {}

export const Custom404Styled = styled.section<Custom404Styled>`
    height: 100vh;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    background: ${({ theme }) => theme.colors.pantone2};
    padding: 16px;

    h1 {
        ${Font(50, 55, 0.5, 700)};
        color: ${({ theme }) => theme.colors.white};
        text-align: center;
    }
`;
