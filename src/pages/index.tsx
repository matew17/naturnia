import Head from "next/head";
import type { NextPage } from "next";

import { HomeStyled } from "@styles/components/Home";
import Asociate from "@components/asociate";
import Carousel from "@components/carousel";
import Categorias from "@components/categorias";
import Clientes from "@components/clientes";
import Compra from "@components/compra";
import Navbar from "@components/navbar";
import SoyNaturnia from "@components/soy-naturnia";

const Home: NextPage = () => {
    return (
        <HomeStyled>
            <Head>
                <title>Naturnia.com | Inicio</title>
                <meta
                    name="Bienvenidos a  Naturnia.com"
                    content="Sitio oficial de Naturnia.com"
                />
                <link rel="icon" href="/favicon.png" />
            </Head>

            <section className="carousel">
                <Navbar />
                <Carousel />
            </section>

            <section className="home-section soy-naturnia">
                <SoyNaturnia />
            </section>

            <section className="home-section categories">
                <Categorias />
            </section>

            <section className="home-section asociate">
                <Asociate />
            </section>

            <section className="home-section clients">
                <Clientes />
            </section>

            <section className="home-section">
                <Compra />
            </section>
        </HomeStyled>
    );
};

export default Home;
