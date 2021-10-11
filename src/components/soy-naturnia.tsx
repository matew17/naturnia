import Image from "next/image";

import { SoyNaturniaStyled } from "@styles/components/SoyNaturnia";
import PageElements from "@utils/gluetexts/soy-naturnia";

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
                            priority={true}
                        />
                        <p>{desc}</p>
                    </div>
                ))}
            </div>
        </SoyNaturniaStyled>
    );
};

export default SoyNaturnia;
