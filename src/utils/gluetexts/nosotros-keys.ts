import { globals } from "@utils/constants";

export default {
    title: "Acerca de Nosotros",
    banner: `${globals.cloudinaryBaseUrl}v1635344232/naturnia/nosotros/IMG_6791.jpg`,
    acercaDe:
        "Naturnia la armonía con la naturaleza, el ser humano y aquello que es lo invisible. Nos conectamos con la esencia de las plantas transformándolas en alimentos y cosmética natural para brindar bienestar a tu cuerpo y alma.",
    values: {
        title: "Soy Naturnia",
        desc: "En Naturnia, nuestros campesinos son guardianes de semillas nativas, cultivan sin químicos, actúan acorde con la agricultura biodinámica que está en los astros y les indica que hacer en cada momento. En nuestro taller de creación, ubicado en Guarne Antioquia, nuestra alquimista crea con sus manos recetas mágicas para tí, productos 100% artesanales sin aditivos ni conservantes. Creemos en las energías sutiles, al usar nuestros productos también llevas nuestra energía contigo. Por eso cuando estamos en el taller, lo hacemos con la mejor vibra y buena música.",
        org: {
            title: "Soy Orgánica",
            image: `${globals.cloudinaryBaseUrl}v1635360349/naturnia/nosotros/IMG_6780.jpg`,
        },
        conc: {
            title: "Soy Natural",
            image: `${globals.cloudinaryBaseUrl}v1635360347/naturnia/nosotros/IMG_6781.jpg`,
        },
        art: {
            title: "Soy Artesanal",
            image: `${globals.cloudinaryBaseUrl}v1635360345/naturnia/nosotros/IMG_6779.jpg`,
        },
        loc: {
            title: "Soy Local",
            image: `${globals.cloudinaryBaseUrl}v1635360344/naturnia/nosotros/IMG_6783.jpg`,
        },
    },
    team: {
        title: "Nuestro Equipo",
        members: [
            {
                avatar: `${globals.cloudinaryBaseUrl}v1635983489/naturnia/nosotros/IMG_6788.jpg`,
                name: "Alexa",
                role: "Fundadora",
                intro: "Me llamo Alexa, soy mamá de dos hermosos hijos, Lúkas y Maria Clara. Aunque viví en Medellín hasta mis 20 años, siempre he sentido que el campo y la agricultura forman parte de mi esencia. Desde hace más de 15 años, he tenido la fortuna de trabajar con comunidades campesinas, promoviendo una agricultura sana y natural; posteriormente mi inquietud por la alimentación saludable, me llevó a convertirme en una hacedora de diversas preparaciones y a buscar maneras de darle a los alimentos sabor, color y belleza. Amo a Naturnia porque forma parte de mi estilo de vida, y además me permite compartir lo que hacemos y lo que somos con la gente, así estamos en sintonía con la construcción de una nueva tierra consciente y sostenible.",
                reversed: true,
                pos: "right",
            },
            {
                avatar: `${globals.cloudinaryBaseUrl}v1635983489/naturnia/nosotros/IMG_6789.jpg`,
                name: "Marce",
                role: "Fundadora",
                intro: "Hola soy Marce, amante de la naturaleza, la familia, la buena conversación con amigos alrededor de la comida. Vivo en una cabaña de madera en un bosque encantado en el Retiro Antioquia con mi pareja y dos gatitas que llenan mi corazón. Soy comercial de profesión y sicóloga por intuición… practico kundalini yoga, descubrí a través del canto de mantras mi conexión con lo infinito y también con mi voz. Me encanta conversar, tejer relaciones. En Naturnia soy enlazadora de mundos, conecto nuestros productos con ustedes.",
                reversed: false,
                pos: "left",
            },
        ],
    },
};
