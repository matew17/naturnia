import { globals } from "@utils/constants";

export default {
    title: "Naturnia",
    subtitle: "Alimentos y cosmética natural",
    banner: {
        image: `${globals.cloudinaryBaseUrl}v1634923620/naturnia/catalogo/Banner.jpg`,
        alt: "Foto de banner - Catalogo Naturnia",
    },
    menuCats: [
        {
            name: "Salsas",
            src: "#salsas",
        },
        {
            name: "Infusiones",
            src: "#infusiones",
        },
        {
            name: "Bálsamo labial",
            src: "#balsamos",
        },
    ],
    categories: [
        {
            id: "salsas",
            name: "Salsas",
            image: `${globals.cloudinaryBaseUrl}v1634923620/naturnia/catalogo/Banner.jpg`,
            altImage: `${globals.cloudinaryBaseUrl}v1635179430/naturnia/catalogo/IMG_6916.jpg`,
            description:
                "Salsa de frutas 3 usos 100% natural. Úsame para aromática, mermelada y aderezo.",
            products: [
                {
                    name: "Tamarindo",
                    image: `${globals.cloudinaryBaseUrl}v1635172393/naturnia/catalogo/IMG_6879.jpg`,
                    desc: "Salsa de frutas 315gr",
                },
                {
                    name: "Lulo",
                    image: `${globals.cloudinaryBaseUrl}v1635172391/naturnia/catalogo/IMG_6882.jpg`,
                    desc: "Salsa de frutas 315gr",
                },
                {
                    name: "Lulo arazá",
                    image: `${globals.cloudinaryBaseUrl}v1635172391/naturnia/catalogo/IMG_6874.jpg`,
                    desc: "Salsa de frutas 315gr",
                },
                {
                    name: "Mora",
                    image: `${globals.cloudinaryBaseUrl}v1635172391/naturnia/catalogo/IMG_6866.jpg`,
                    desc: "Salsa de frutas 315gr",
                },
                {
                    name: "Arazá",
                    image: `${globals.cloudinaryBaseUrl}v1635172390/naturnia/catalogo/IMG_6872.jpg`,
                    desc: "Salsa de frutas 315gr",
                },
                {
                    name: "Uchuva",
                    image: `${globals.cloudinaryBaseUrl}v1635172390/naturnia/catalogo/IMG_6869.jpg`,
                    desc: "Salsa de frutas 315gr",
                },

                {
                    name: "Kit",
                    image: `${globals.cloudinaryBaseUrl}v1635172761/naturnia/catalogo/_MG_8377.jpg`,
                    desc: "salsas x 3 con endulzante",
                    bg: true,
                },
                {
                    name: "Kit",
                    image: `${globals.cloudinaryBaseUrl}v1635172761/naturnia/catalogo/_MG_8381.jpg`,
                    desc: "salsas x 3 sin endulzante",
                    bg: true,
                },
            ],
        },
        {
            id: "infusiones",
            name: "Infusiones",
            image: `${globals.cloudinaryBaseUrl}v1635172952/naturnia/catalogo/IMG_6717.jpg`,
            altImage: `${globals.cloudinaryBaseUrl}v1635179397/naturnia/catalogo/IMG_6852.jpg`,
            description:
                "plantas aromáticas libres de químicos, deshojadas a mano, deshidratadas en hornos solares artesanales con mezclas de frutas deshidratadas y especias.",
            products: [
                {
                    name: "Respira:",
                    image: `${globals.cloudinaryBaseUrl}v1635173026/naturnia/catalogo/IMG_6824.jpg`,
                    desc: "para relajarte",
                },
                {
                    name: "Renuévate:",
                    image: `${globals.cloudinaryBaseUrl}v1635173025/naturnia/catalogo/IMG_6834.jpg`,
                    desc: "activante",
                },
                {
                    name: "Ligereza:",
                    image: `${globals.cloudinaryBaseUrl}v1635173026/naturnia/catalogo/IMG_6817.jpg`,
                    desc: "digestiva",
                },
            ],
        },
        {
            id: "balsamos",
            name: "Bálsamo labial",
            image: `${globals.cloudinaryBaseUrl}v1635172869/naturnia/catalogo/Labiales.jpg`,
            altImage: `${globals.cloudinaryBaseUrl}v1635179509/naturnia/catalogo/IMG_6663.jpg`,
            description:
                "humecta tus labios y protégelos del sol y del viento. Elaborado con caléndula, manzanilla y extractos botánicos 100% naturales.",
            products: [
                {
                    name: "Bálsamo:",
                    image: `${globals.cloudinaryBaseUrl}v1635173132/naturnia/catalogo/IMG_6886.jpg`,
                    desc: "caléndula, manzanilla ",
                },
            ],
        },
    ],
};
