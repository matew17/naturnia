import Image from "next/image";

import { ClientesStyled } from "@styles/components/Clientes";
import PageElements from "@utils/gluetexts/clients";

const Clientes: React.FC = () => {
    return (
        <ClientesStyled>
            <h1>{PageElements.title}</h1>
            <div className="clients">
                {PageElements.items.map(({ desc, image, url }) => (
                    <div key={desc} className="clients__item">
                        <a href={url} target="_blank" rel="noreferrer">
                            <div className="clients__item--image">
                                <Image
                                    src={image}
                                    alt={desc}
                                    layout="fill"
                                    objectFit="contain"
                                />
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </ClientesStyled>
    );
};

export default Clientes;
