import { down } from "styled-breakpoints";
import styled from "styled-components";

import { Font } from "@styles/abstracts/mixins";
import { ThemedProps } from "../theme";

interface CatalogoStyled extends ThemedProps {}

export const CatalogoStyled = styled.section<CatalogoStyled>`
    background: ${({ theme }) => theme.colors.black};

    ${down("md")} {
    }

    ${down("sm")} {
    }
`;
