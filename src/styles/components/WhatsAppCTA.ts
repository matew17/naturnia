import styled from "styled-components";

import { ThemedProps } from "../theme";

interface WhatsAppCTAStyled extends ThemedProps {}

export const WhatsAppCTAStyled = styled.div<WhatsAppCTAStyled>`
    position: fixed;
    right: 16px;
    bottom: 16px;
`;
