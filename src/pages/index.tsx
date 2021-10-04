import Head from "next/head";
import type { NextPage } from "next";

import { HomeStyled } from "@styles/components/Home";
import Asociate from "@components/asociate";
import Carousel from "@components/carousel";
import Categorias from "@components/categorias";
import Clientes from "@components/clientes";
import SoyNaturnia from "@components/soy-naturnia";
import Compra from "@components/compra";

const Home: NextPage = () => {
    return (
        <HomeStyled>
            <Head>
                <title>Naturnia.com | Inicio</title>
                <meta
                    name="Bienvenidos a  Naturnia.com"
                    content="Sitio oficial de Naturnia.com"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <section className="bg-section">
                <Carousel />
            </section>

            <section className="bg-section">
                <SoyNaturnia />
            </section>

            <section className="bg-section">
                <Categorias />
            </section>

            <section className="bg-section">
                <Asociate />
            </section>

            <section className="bg-section">
                <Clientes />
            </section>

            <section className="bg-section">
                <Compra />
            </section>
        </HomeStyled>
    );
};

export default Home;
