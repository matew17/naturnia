import { NosotrosStyled } from '@styles/components/NosotrosStyled';
import { globals } from '@utils/constants';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

const Nosotros: NextPage = () => {
    return (
        <NosotrosStyled>
            <Head>
                <title>Naturnia.com | Nosotros</title>
                <meta
                    name='Bienvenidos a  Naturnia.com'
                    content='Sitio oficial de Naturnia.com'
                />
                <link rel='icon' href='/favicon.png' />
            </Head>

            <section className='hero'>
                <div className='hero__layout'>
                    <div className='hero__text-container'>
                        <h1 className='hero__title'>Nosotros</h1>
                    </div>
                </div>
                <div className='hero__image-container'>
                    <div className='hero__image'>
                        <Image
                            src={`${globals.cloudinaryBaseUrl}v1633963061/naturnia/slide_3.jpg`}
                            layout='fill'
                            objectFit='cover'
                        ></Image>
                    </div>
                </div>
            </section>

            <section className='text'>
                <p>
                    Naturnia la armonía con la naturaleza, el ser humano y
                    aquello que es lo invisible. Nos conectamos con la esencia
                    de las plantas transformándolas en alimentos y cosmética
                    natural para brindar bienestar a tu cuerpo y alma.
                </p>
            </section>

            <section className='grid'>
                <div className='grid__item'>
                    <div className='grid__image'>
                        <Image
                            src={`${globals.cloudinaryBaseUrl}v1633963061/naturnia/slide_1.jpg`}
                            layout='fill'
                            objectFit='cover'
                        ></Image>
                    </div>
                </div>
                <div className='grid__item'>
                    <h2>Soy Organica</h2>
                </div>
                <div className='grid__item'>
                    <div className='grid__image'>
                        <Image
                            src={`${globals.cloudinaryBaseUrl}v1633963061/naturnia/slide_2.jpg`}
                            layout='fill'
                            objectFit='cover'
                        ></Image>
                    </div>
                </div>
                <div className='grid__item'>
                    <h2>Soy Consciente</h2>
                </div>
                <div className='grid__item'>
                    <h2>Soy Aretesanal</h2>
                </div>
                <div className='grid__item'>
                    <div className='grid__image'>
                        <Image
                            src={`${globals.cloudinaryBaseUrl}v1633963061/naturnia/slide_3.jpg`}
                            layout='fill'
                            objectFit='cover'
                        ></Image>
                    </div>
                </div>
                <div className='grid__item'>
                    <h2>Soy Local</h2>
                </div>
                <div className='grid__item'>
                    <div className='grid__image'>
                        <Image
                            src={`${globals.cloudinaryBaseUrl}v1633963061/naturnia/slide_4.jpg`}
                            layout='fill'
                            objectFit='cover'
                        ></Image>
                    </div>
                </div>
            </section>

            <section className='text'>
                <p>
                    En Naturnia, nuestros campesinos son guardianes de semillas
                    nativas, cultivan sin químicos, actúan acorde con la
                    agricultura biodinámica que está en los astros y les indica
                    que hacer en cada momento.
                </p>
                <p>
                    En nuestro taller de creación, ubicado en Guarne Antioquia,
                    nuestra alquimista crea con sus manos recetas mágicas para
                    ti, productos 100% artesanales sin aditivos ni conservantes.{' '}
                </p>
                <p>
                    Creemos en las energías sutiles, al usar nuestros productos
                    también llevas nuestra energía contigo. Por eso cuando
                    estamos en el taller, lo hacemos con la mejor vibra y buena
                    música.{' '}
                </p>
            </section>

            <section className='team' style={{ background: `black` }}>
                <h2 className='team__title'>Nuestro Equipo</h2>
                <div className='team__members'>
                    <div className='team__member'>
                        <div className='team__image-wrapper'>
                            <Image
                                src={`${globals.cloudinaryBaseUrl}v1635305595/naturnia/user.png`}
                                layout='fill'
                                objectFit='cover'
                                className="team__image"
                            ></Image>
                        </div>
                        <span className='team__member-name'>Juan Diego</span>
                        <span className='team__member-rol'>Programador</span>
                    </div>
                    <div className='team__member'>
                        <div className='team__image-wrapper'>
                            <Image
                                src={`${globals.cloudinaryBaseUrl}v1635305595/naturnia/user.png`}
                                layout='fill'
                                objectFit='cover'
                                className="team__image"
                            ></Image>
                        </div>
                        <span className='team__member-name'>Juan Diego</span>
                        <span className='team__member-rol'>Programador</span>
                    </div>
                    <div className='team__member'>
                        <div className='team__image-wrapper'>
                            <Image
                                src={`${globals.cloudinaryBaseUrl}v1635305595/naturnia/user.png`}
                                layout='fill'
                                objectFit='cover'
                                className="team__image"
                            ></Image>
                        </div>
                        <span className='team__member-name'>Juan Diego</span>
                        <span className='team__member-rol'>Programador</span>
                    </div>
                </div>
            </section>

            <section className='text'>
                <p>
                    Hola soy Marce, amante de la naturaleza, la familia, la
                    buena conversación con amigos alrededor de la comida. Vivo
                    en una cabaña de madera en un bosque encantado en el Retiro
                    Antioquia con mi pareja y dos gatitas que llenan mi corazón.
                    Soy comercial de profesión y sicóloga por intuición…
                    practico kundalini yoga, descubrí a través del canto de
                    mantras mi conexión con lo infinito y también con mi voz. Me
                    encanta conversar, tejer relaciones. En Naturnia soy
                    enlazadora de mundos, conecto los productos que hace mi
                    socia Alexa con ustedes….
                </p>
                <p>
                    Me llamo Alexa, soy mamá de dos hermosos hijos, Lúkas y
                    Maria Clara. Aunque viví en Medellín hasta mis 20 años,
                    siempre he sentido que el campo y la agricultura forman
                    parte de mí esencia. Desde hace mas de 15 años, he tenido la
                    fortuna de trabajar con comunidades campesinas, promoviendo
                    una agricultura sana y natural; posteriormente mi inquietud
                    por la alimentación saludable,me llevó a convertirme en una
                    hacedora de diversas preparaciones, y a buscar maneras de
                    darle a los alimentos sabor, color y belleza. Amo a Naturnia
                    porque forma parte de mi estilo de vida, y además me permite
                    compartir lo que hacemos, y lo que somos con la gente, así
                    estamos en sintonía con la construcción de una nueva tierra
                    consciente y sostenible.
                </p>
            </section>
        </NosotrosStyled>
    );
};

export default Nosotros;
