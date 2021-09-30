import "styled-components";

interface Colors {
    black: string;
    blackAlpha: string;
    green: string;
    greenDarken: string;
    greenLighten: string;
    orange: string;
    orangeDarken: string;
    orangeLighten: string;
    pink: string;
    pinkDarken: string;
    pinkLighten: string;
    red: string;
    redDarken: string;
    redLighten: string;
    white: string;
    yellow: string;
    yellowDarken: string;
    yellowLighten: string;
}

declare module "styled-components" {
    export interface DefaultTheme {
        colors: Colors;
    }
}
