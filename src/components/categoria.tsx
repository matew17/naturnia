import Image from "next/image";

import { CategoriaStyled } from "@styles/components/Categoria";

type Props = {
    categoryImage: string;
    categoryName: string;
    descriptionBody: string;
    descriptionBodyAlt?: string;
    inverted?: boolean;
    title: string;
    usage?: {
        title?: string;
        usages: string[];
    };
};

const Categoria: React.FC<Props> = ({
    categoryImage,
    categoryName,
    descriptionBody,
    descriptionBodyAlt,
    inverted,
    title,
    usage,
}) => {
    return (
        <CategoriaStyled className={`${inverted && "inverted"}`}>
            <div className="info">
                <div className="info__description">
                    <div className="info__description--title">
                        <p>{title}</p>
                        <h1>{categoryName}</h1>
                    </div>
                    <p className="info__description--body">{descriptionBody}</p>

                    {descriptionBodyAlt && (
                        <p className="info__description--body info__description--no-margin">
                            {descriptionBodyAlt}
                        </p>
                    )}

                    {usage?.usages && (
                        <div className="info__description--usage">
                            <h2>{usage?.title}</h2>
                            <ul>
                                {usage.usages.map((usage) => (
                                    <li key={usage}>{usage}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>

            <div className="image">
                <Image
                    src={categoryImage}
                    alt={categoryName}
                    layout="fill"
                    objectFit="cover"
                />
            </div>
        </CategoriaStyled>
    );
};

export default Categoria;
