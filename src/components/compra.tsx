import Image from "next/image";

import { CompraStyled } from "@styles/components/Compra";
import { LinkButton } from "@styles/components/Button";
import PageElements from "@utils/gluetexts/compra";

const Compra: React.FC = () => {
    return (
        <CompraStyled>
            <div className="image">
                <Image
                    src={PageElements.image}
                    alt={PageElements.paragraph}
                    layout="fill"
                    objectFit="cover"
                />
            </div>

            <div className="info">
                <div>
                    <p>{PageElements.paragraph}</p>
                    <h1>{PageElements.title}</h1>
                </div>
                <LinkButton
                    href={PageElements.url}
                    target="_blank"
                    rel="noreferrer"
                    primary
                >
                    {PageElements.btnText}
                </LinkButton>
            </div>
        </CompraStyled>
    );
};

export default Compra;
