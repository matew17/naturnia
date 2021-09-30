import styled from 'styled-components';

import { ThemedProps } from '../theme';

interface NavbarStyled extends ThemedProps {}

export const NavbarStyled = styled.nav<NavbarStyled>`
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.black};
`;
