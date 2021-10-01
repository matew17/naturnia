import { css } from 'styled-components';
import { calculateRem } from './functions';

// @mixin from-breakpoint($bp) {
//     @if ($bp == "x-small") {
//         @content;
//     }
//     @if ($bp == "ie-only") {
//         @media screen and (-ms-high-contrast: active),
//             (-ms-high-contrast: none) {
//             @content;
//         }
//     } @else {
//         @if map-has-key($breakpoints, $bp) {
//             $list: map-get($breakpoints, $bp);
//             $bp: nth($list, 1);
//         }
//         @media screen and (min-width: #{$bp}) {
//             @content;
//         }
//     }
// }

export const Font = (size = 14, line = 18, spacing = 0.1, weight = 500) => {
    const baseFont = 20;
    const fontSize = `#${size}px`;
    const lineHeight = `#${line}px`;
    const letterSpacing = `#${spacing}px`;

    return css`
        font-size: ${fontSize};
        font-size: ${calculateRem(size, baseFont)} !important;
        line-height: ${lineHeight};
        line-height: ${calculateRem(line, baseFont)} !important;
        font-weight: ${weight} !important;
        letter-spacing: ${letterSpacing} !important;
    `;
};
