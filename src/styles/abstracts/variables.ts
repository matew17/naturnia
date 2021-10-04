export const devices: { [key: string]: string } = {
    "iphone-five": "374px",
    "x-small": "480px",
    small: "588px",
    medium: "768px",
    large: "1200px",
};

// const breakpoints: (
//     x-small: (
//         null,
//         $x-small - 1,
//     ),
//     small: (
//         $x-small,
//         $small - 1,
//     ),
//     medium: (
//         $small,
//         $medium - 1,
//     ),
//     large: (
//         $medium,
//         $large - 1,
//     ),
//     x-large: (
//         $large,
//         null,
//     ),
// );

export const colors: { [key: string]: string } = {
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
};

export const zindex: { [key: string]: number } = {
    base: 1,
    menu: 2,
    overlay: 3,
    modal: 4,
    toast: 5,
    "modal-overlay": 10100,
};
