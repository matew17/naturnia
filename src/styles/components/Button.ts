import { css } from "styled-components";
import styled from "styled-components";

import { ThemedProps } from "../theme";

interface LinkButton extends ThemedProps {
    primary?: boolean;
    secondary?: boolean;
}

export const LinkButton = styled.a<LinkButton>`
    background: transparent;
    color: ${({ theme }) => theme.colors.black};
    border: 2px solid ${({ theme }) => theme.colors.black};
    padding: 16px 24px;
    border-radius: 24px;

    &:hover {
        color: ${({ theme }) => theme.colors.blackLight};
    }

    ${({ primary }) =>
        primary &&
        css`
            background: ${({ theme }) => theme.colors.pantone2};
            color: ${({ theme }) => theme.colors.white};
            border: none;

            &:hover {
                background: ${({ theme }) => theme.colors.pantone};
                color: ${({ theme }) => theme.colors.pantone2};
            }
        `}
`;
