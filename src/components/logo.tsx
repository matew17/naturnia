import Image from "next/image";

type Props = {
    alt: string;
    height: number;
    src: string;
    url: string;
    width: number;
};

const Logo: React.FC<Props> = ({ alt, src, url, width, height }) => {
    return (
        <a href={url} target="_blank" rel="noreferrer">
            <Image src={src} alt={alt} width={width} height={height}></Image>
        </a>
    );
};

export default Logo;
