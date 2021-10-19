import Image from "next/image";

import { AsociateStyled } from "@styles/components/Asociate";
import PageElements from "@utils/gluetexts/connect";
import { LinkButton } from "@styles/components/Button";
import { globals } from "@utils/constants";

const Asociate: React.FC = () => {
    const connectUrl = `${globals.wsApiUrl}${PageElements.connectPhone}&amp;text=${globals.wsMessage}`;

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
                                loading="eager"
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
                        href={`${connectUrl}`}
                        target="_blank"
                        rel="noreferrer"
                    >
                        {PageElements.connectText}
                    </LinkButton>
                </div>
            </div>
        </AsociateStyled>
    );
};

export default Asociate;
