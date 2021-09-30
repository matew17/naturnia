import Image from "next/image";

import { globals } from "../utils/constants";

type Props = {
    width?: number;
    height?: number;
};

const whatsApp: React.FC<Props> = ({ width = 20, height = 20 }) => {
    const url = `${globals.wsApiUrl}${globals.wsContactNumber}&amp;text=${globals.wsMessage}`;

    return (
        <a href={url} target="_blank">
            <Image
                src="/images/ws.png"
                alt="Contactanos por whatsapp"
                width={width}
                height={height}
            />
        </a>
    );
};

export default whatsApp;
