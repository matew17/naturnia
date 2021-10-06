import styled from "styled-components";

import { ThemedProps } from "../theme";
import { zindex } from "@styles/abstracts/functions";

interface WhatsAppCTAStyled extends ThemedProps {}

export const WhatsAppCTAStyled = styled.div<WhatsAppCTAStyled>`
    position: fixed;
    right: 16px;
    bottom: 16px;
    z-index: 3;
    background: ${({ theme }) => theme.colors.blackLight};
    border-radius: 100%;
    padding: 8px;
`;
