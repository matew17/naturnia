import { colors as appColors, zindex as appZindex } from './variables';

export function calculateRem(size: number, baseSize = 20) {
    const remSize = size / baseSize;

    return `${remSize}rem`;
}

export function colors(color: string) {
    if (!appColors[color]) throw new Error(`No color found for ${color}`);

    return appColors[color];
}

export function zindex(layer: string) {
    if (!appZindex[layer]) throw new Error(`No z-index found for ${layer}`);

    return appZindex[layer];
}