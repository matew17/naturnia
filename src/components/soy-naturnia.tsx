import Image from "next/image";

import { SoyNaturniaStyled } from "@styles/components/SoyNaturnia";
import PageElements from "@utils/gluetexts/soy-naturnia";

const SoyNaturnia: React.FC = () => {
    return (
        <SoyNaturniaStyled>
            <h1>{PageElements.title}</h1>
            <div className="soy">
                {PageElements.items.map(({ desc, image }) => (
                    <div key={desc} className="soy__item">
                        <Image
                            src={image}
                            alt={desc}
                            width="350px"
                            height="350px"
                        />
                        <p>{desc}</p>
                    </div>
                ))}
            </div>
        </SoyNaturniaStyled>
    );
};

export default SoyNaturnia;
