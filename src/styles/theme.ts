import { DefaultTheme } from "styled-components";

export const defaultTheme: DefaultTheme = {
    colors: {
        black: "#000",
        blackAlpha: "rgba(0,0 ,0, 0.9)",
        green: "#C0BD07",
        greenDarken: "#5B571C",
        greenLighten: "#F3E62A",
        orange: "#C05217",
        orangeDarken: "#8E3F14",
        orangeLighten: "#F18B16",
        pink: "#AE6680",
        pinkDarken: "#681E4B",
        pinkLighten: "#CD8CA6",
        red: "#904439",
        redDarken: "#551621",
        redLighten: "#EEAD79",
        white: "#FFF",
        yellow: "#EEA100",
        yellowDarken: "#DAAB03",
        yellowLighten: "#F8EB9B",
    },
};

export interface ThemedProps {
    theme?: DefaultTheme;
}
