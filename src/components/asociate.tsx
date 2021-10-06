import Image from "next/image";

import { AsociateStyled } from "@styles/components/Asociate";
import PageElements from "@utils/gluetexts/connect";

const Asociate: React.FC = () => {
    return (
        <AsociateStyled>
            <h1>{PageElements.title}</h1>
            <p>{PageElements.subtitle}</p>

            <div className="connect">
                {PageElements.items.map(({ desc, image }) => (
                    <div key={desc} className="connect__item">
                        <div className="connect__item--image">
                            <Image
                                src={image}
                                alt={desc}
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                        <p>{desc}</p>
                    </div>
                ))}
            </div>

            <a href={`tel:${PageElements.connectPhone}`}>
                <p className="disclaimer">
                    {PageElements.connect}{" "}
                    <span>{PageElements.connectName} </span>
                    {PageElements.connectWorldEmabssor}
                </p>
            </a>
        </AsociateStyled>
    );
};

export default Asociate;
