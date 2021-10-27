import { NextPage } from "next";

import { Custom404Styled } from "@styles/components/Custom404Styled";

const Custom404: NextPage = () => {
    return (
        <Custom404Styled>
            <h1>Oops, no encontramos la pagina que tratas de acceder.</h1>
        </Custom404Styled>
    );
};

export default Custom404;
