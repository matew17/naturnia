import { css } from "styled-components";
import { calculateRem } from "./functions";

export const Font = (size = 14, line = 18, spacing = 0.1, weight = 500) => {
    const baseFont = 20;
    const fontSize = `${size}px`;
    const lineHeight = `${line}px`;
    const letterSpacing = `${spacing}px`;

    return css`
        font-size: ${fontSize};
        font-size: ${calculateRem(size, baseFont)} !important;
        line-height: ${lineHeight};
        line-height: ${calculateRem(line, baseFont)} !important;
        font-weight: ${weight} !important;
        letter-spacing: ${letterSpacing} !important;
    `;
};
