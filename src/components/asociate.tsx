import Image from "next/image";

import { AsociateStyled } from "@styles/components/Asociate";
import PageElements from "@utils/gluetexts/connect";
import { LinkButton } from "@styles/components/Button";

const Asociate: React.FC = () => {
    return (
        <AsociateStyled>
            <p>{PageElements.subtitle}</p>
            <h1>{PageElements.title}</h1>

            <div className="connect">
                {PageElements.items.map(({ desc, image }) => (
                    <div key={desc} className="connect__item">
                        <div className="connect__item--image">
                            <Image
                                className="img"
                                src={image}
                                alt={desc}
                                layout="fill"
                                objectFit="cover"
                                priority={true}
                            />
                        </div>
                        <p>{desc}</p>
                    </div>
                ))}
            </div>

            <div className="contact">
                <div className="contact__item">
                    <p>
                        {PageElements.connect}{" "}
                        <b>{PageElements.connectName} </b>
                        {PageElements.connectWorldEmabssor}
                    </p>
                    <LinkButton
                        primary
                        href={`tel:${PageElements.connectPhone}`}
                    >
                        {PageElements.connectText}
                    </LinkButton>
                </div>
            </div>
        </AsociateStyled>
    );
};

export default Asociate;
