import Image from "next/image";

import { SoyNaturniaStyled } from "@styles/components/SoyNaturniaStyled";
import PageElements from "@utils/gluetexts/soy-naturnia-keys";

const SoyNaturnia: React.FC = () => {
    return (
        <SoyNaturniaStyled>
            <h1>{PageElements.title}</h1>
            <div className="soy">
                {PageElements.items.map(({ desc, image }) => (
                    <div key={image} className="soy__item">
                        <Image
                            src={image}
                            alt={desc}
                            width="320px"
                            height="320px"
                            loading="eager"
                        />
                        <p>{desc}</p>
                    </div>
                ))}
            </div>

            <p className="desc">{PageElements.desc}</p>
        </SoyNaturniaStyled>
    );
};

export default SoyNaturnia;
