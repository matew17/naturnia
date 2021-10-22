import type { NextPage } from "next";
import Head from "next/head";

import { CatalogoStyled } from "@styles/components/CatalogoStyled";

const Catalogo: NextPage = () => {
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
        </CatalogoStyled>
    );
};

export default Catalogo;
