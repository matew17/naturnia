import styled from "styled-components";

import { ThemedProps } from "../theme";

interface CategoriasStyled extends ThemedProps {}

export const CategoriasStyled = styled.section<CategoriasStyled>`
    background: ${({ theme }) => theme.colors.white};
`;
