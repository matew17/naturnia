import Head from "next/head";
import Image from "next/image";
import type { NextPage } from "next";

import { CatalogoStyled } from "@styles/components/CatalogoStyled";
import PageElements from "@utils/gluetexts/catalogo-keys";
import { LinkButton } from "@styles/components/LinkButtonStyled";

const Catalogo: NextPage = () => {
    const scrollToCategory = (id: string) => {
        const element = document.querySelector(id);

        element?.scrollIntoView({
            behavior: "smooth",
        });
    };

    return (
        <CatalogoStyled>
            <Head>
                <title>Naturnia.com | Catalogo</title>
                <meta
                    name="Catalogo de productos Naturnia.com"
                    content="Sitio oficial de Naturnia.com"
                />
                <link rel="icon" href="/favicon.png" />
            </Head>

            <section className="banner">
                <div className="banner__title">
                    <h1>{PageElements.title}</h1>
                    <h2>{PageElements.subtitle}</h2>
                </div>
                <Image
                    src={PageElements.banner.image}
                    alt={PageElements.banner.alt}
                    layout="fill"
                    objectFit="cover"
                    loading="eager"
                />
            </section>

            <nav className="categories-nav">
                {PageElements.menuCats.map((menu, index) => (
                    <LinkButton
                        className="categories-nav__btn"
                        key={index}
                        onClick={() => scrollToCategory(menu.src)}
                    >
                        {menu.name}
                    </LinkButton>
                ))}
            </nav>

            {PageElements.categories.map((cat, index) => (
                <section
                    key={`${cat.id}/${index}`}
                    id={cat.id}
                    className="categories"
                >
                    <section className="categories__item">
                        <section className="categories__item--banner">
                            <div className="categories__item--image-wrapper">
                                <Image
                                    className="image-elements"
                                    src={cat.image}
                                    alt={cat.name}
                                    layout="fill"
                                    objectFit="cover"
                                    loading="eager"
                                />
                            </div>

                            <div className="categories__item--description">
                                <div className="categories__item--description--text">
                                    <h3>{cat.name}</h3>
                                    <p>{cat.description}</p>
                                </div>
                                <div className="categories__item--description--image">
                                    <Image
                                        className="image-elements"
                                        src={cat.altImage}
                                        alt={cat.description}
                                        layout="fill"
                                        objectFit="cover"
                                        loading="eager"
                                    />
                                </div>
                            </div>
                        </section>

                        <section className="categories__item--products">
                            {cat.products.map((prod, i) => (
                                <div
                                    key={`${prod.name}/${i}`}
                                    className={`${
                                        prod.bg
                                            ? "categories__item--products--item-full"
                                            : ""
                                    } categories__item--products--item`}
                                >
                                    <div className="categories__item--products--image">
                                        <Image
                                            className="image-elements"
                                            src={prod.image}
                                            alt={prod.name}
                                            layout="fill"
                                            objectFit="cover"
                                            loading="eager"
                                        />
                                    </div>
                                    <p className="categories__item--products--text">
                                        <span>{prod.name}</span> {prod.desc}
                                    </p>
                                </div>
                            ))}
                        </section>
                    </section>
                </section>
            ))}
        </CatalogoStyled>
    );
};

export default Catalogo;
