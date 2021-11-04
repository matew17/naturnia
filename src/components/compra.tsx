import Image from "next/image";

import { CompraStyled } from "@styles/components/CompraStyled";
import { LinkButton } from "@styles/components/LinkButtonStyled";
import PageElements from "@utils/gluetexts/compra-keys";

const Compra: React.FC = () => {
    return (
        <CompraStyled>
            <div className="image">
                <Image
                    src={PageElements.image}
                    alt={PageElements.paragraph}
                    layout="fill"
                    objectFit="cover"
                    loading="eager"
                />
            </div>

            <div className="info">
                <div>
                    {/* <p>{PageElements.paragraph}</p> */}
                    <h1>{PageElements.title}</h1>
                </div>
                <LinkButton
                    secondary
                    href={PageElements.url}
                    target="_blank"
                    rel="noreferrer"
                >
                    {PageElements.btnText}
                </LinkButton>
            </div>
        </CompraStyled>
    );
};

export default Compra;
