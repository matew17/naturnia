import "styled-components";

interface Colors {
    black: string;
    blackAlpha: string;
    pantone: string;
    pantone1: string;
    pantone2: string;
    pantone3: string;
    lulo: string;
    lulo1: string;
    lulo2: string;
    lulo3: string;
    tamarindo: string;
    tamarindo1: string;
    tamarindo2: string;
    tamarindo3: string;
    uchuva: string;
    uchuva1: string;
    uchuva2: string;
    uchuva3: string;
    araza: string;
    araza1: string;
    araza2: string;
    araza3: string;
    white: string;
}
declare module "styled-components" {
    export interface DefaultTheme {
        colors: Colors;
    }
}
