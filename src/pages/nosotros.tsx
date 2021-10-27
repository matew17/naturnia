import Head from "next/head";
import Image from "next/image";
import type { NextPage } from "next";

import { NosotrosStyled } from "@styles/components/NosotrosStyled";
import PageElements from "@utils/gluetexts/nosotros-keys";

const Nosotros: NextPage = () => {
    return (
        <NosotrosStyled>
            <Head>
                <title>Naturnia.com | Acerca de nosotros</title>
                <meta
                    name="Bienvenidos a Naturnia.com"
                    content="Sitio oficial de Naturnia.com, acerca de nosotros"
                />
                <link rel="icon" href="/favicon.png" />
            </Head>

            <section className="hero">
                <div className="hero__title-wrapper">
                    <h1 className="hero__title">{PageElements.title}</h1>
                </div>

                <div className="hero__image-container">
                    <div className="hero__image">
                        <Image
                            src={PageElements.banner}
                            alt={PageElements.banner}
                            layout="fill"
                            objectFit="cover"
                            objectPosition="left"
                        ></Image>
                    </div>
                </div>
            </section>

            <section className="about-text">
                <p>{PageElements.acercaDe}</p>
            </section>

            <section className="values">
                <h2>{PageElements.values.title}</h2>

                <section className="grid">
                    <div className="grid__item">
                        <div className="grid__image">
                            <Image
                                className="image-element"
                                src={PageElements.values.org.image}
                                alt={PageElements.values.org.title}
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                    </div>

                    <div className="grid__item">
                        <p>{PageElements.values.org.title}</p>
                    </div>

                    <div className="grid__item">
                        <div className="grid__image">
                            <Image
                                className="image-element"
                                src={PageElements.values.conc.image}
                                alt={PageElements.values.conc.title}
                                layout="fill"
                                objectFit="cover"
                            ></Image>
                        </div>
                    </div>

                    <div className="grid__item">
                        <p>{PageElements.values.conc.title}</p>
                    </div>

                    <div className="grid__item">
                        <div className="grid__image">
                            <Image
                                className="image-element"
                                src={PageElements.values.art.image}
                                alt={PageElements.values.art.title}
                                layout="fill"
                                objectFit="cover"
                            ></Image>
                        </div>
                    </div>

                    <div className="grid__item">
                        <p>{PageElements.values.art.title}</p>
                    </div>

                    <div className="grid__item">
                        <div className="grid__image">
                            <Image
                                className="image-element"
                                src={PageElements.values.loc.image}
                                alt={PageElements.values.loc.title}
                                layout="fill"
                                objectFit="cover"
                            ></Image>
                        </div>
                    </div>

                    <div className="grid__item">
                        <p>{PageElements.values.loc.title}</p>
                    </div>
                </section>

                <section className="grid-text">
                    <p>{PageElements.values.desc}</p>
                </section>
            </section>

            <section className="team">
                <h2 className="team__title">{PageElements.team.title}</h2>

                <div className="team__members">
                    {PageElements.team.members.map((member, index) => (
                        <div
                            className={`${
                                member.reversed ? "team__member-reversed" : ""
                            } team__member`}
                            key={index}
                        >
                            <div className="team__member-avatar-wrapper">
                                <div className="team__member-image-wrapper">
                                    <Image
                                        className="team__member-image"
                                        src={member.avatar}
                                        alt={member.name}
                                        layout="fill"
                                        objectFit="cover"
                                    ></Image>
                                </div>

                                <div className="team__member-texts">
                                    <span className="team__member-name">
                                        {member.name}
                                    </span>
                                    <span className="team__member-rol">
                                        {member.role}
                                    </span>
                                </div>
                            </div>

                            <p className="team__member-presentation">
                                {member.intro}
                            </p>
                        </div>
                    ))}
                </div>
            </section>
        </NosotrosStyled>
    );
};

export default Nosotros;
