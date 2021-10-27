import { globals } from "@utils/constants";

export default {
    title: "Acerca de Nosotros",
    banner: `${globals.cloudinaryBaseUrl}v1635344232/naturnia/nosotros/IMG_6791.jpg`,
    acercaDe:
        "Naturnia la armonía con la naturaleza, el ser humano y aquello que es lo invisible. Nos conectamos con la esencia de las plantas transformándolas en alimentos y cosmética natural para brindar bienestar a tu cuerpo y alma.",
    values: {
        title: "Nuestros valores",
        desc: "En Naturnia, nuestros campesinos son guardianes de semillas nativas, cultivan sin químicos, actúan acorde con la agricultura biodinámica que está en los astros y les indica que hacer en cada momento. En nuestro taller de creación, ubicado en Guarne Antioquia, nuestra alquimista crea con sus manos recetas mágicas para ti, productos 100% artesanales sin aditivos ni conservantes. Creemos en las energías sutiles, al usar nuestros productos también llevas nuestra energía contigo. Por eso cuando estamos en el taller, lo hacemos con la mejor vibra y buena música.",
        org: {
            title: "Soy Organica",
            image: `${globals.cloudinaryBaseUrl}v1633615008/naturnia/categories/salsas.jpg`,
        },
        conc: {
            title: "Soy Conciente",
            image: `${globals.cloudinaryBaseUrl}v1635355305/naturnia/nosotros/IMG_6752.jpg`,
        },
        art: {
            title: "Soy Artesanal",
            image: `${globals.cloudinaryBaseUrl}v1635355303/naturnia/nosotros/IMG_6702.jpg`,
        },
        loc: {
            title: "Soy Local",
            image: `${globals.cloudinaryBaseUrl}v1633615336/naturnia/categories/infusiones.jpg`,
        },
    },
    team: {
        title: "Nuestro Equipo",
        members: [
            {
                avatar: `${globals.cloudinaryBaseUrl}v1635355188/naturnia/nosotros/Marce.png`,
                name: "Marcela",
                role: "Co-Fundadora",
                intro: "Hola soy Marce, amante de la naturaleza, la familia, la buena conversación con amigos alrededor de la comida. Vivo en una cabaña de madera en un bosque encantado en el Retiro Antioquia con mi pareja y dos gatitas que llenan mi corazón. Soy comercial de profesión y sicóloga por intuición… practico kundalini yoga, descubrí a través del canto de mantras mi conexión con lo infinito y también con mi voz. Me encanta conversar, tejer relaciones. En Naturnia soy enlazadora de mundos, conecto los productos que hace mi socia Alexa con ustedes...",
                reversed: false,
            },
            {
                avatar: `${globals.cloudinaryBaseUrl}v1635355187/naturnia/nosotros/Alexa.png`,
                name: "Alexa",
                role: "Fundadora",
                intro: "Me llamo Alexa, soy mamá de dos hermosos hijos, Lúkas y Maria Clara. Aunque viví en Medellín hasta mis 20 años, siempre he sentido que el campo y la agricultura forman parte de mí esencia. Desde hace mas de 15 años, he tenido la fortuna de trabajar con comunidades campesinas, promoviendo una agricultura sana y natural; posteriormente mi inquietud por la alimentación saludable, me llevó a convertirme en unahacedora de diversas preparaciones, y a buscar maneras de darle a los alimentos sabor, color y belleza. Amo a Naturnia porque forma parte de mi estilo de vida, y además me permite compartir lo que hacemos, y lo que somos con la gente, así estamos en sintonía con la construcción de una nueva tierra consciente y sostenible.",
                reversed: true,
            },
        ],
    },
};
