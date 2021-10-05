import Image from "next/image";

import { globals } from "../utils/constants";
import { WhatsAppCTAStyled } from "@styles/components/WhatsAppCTA";

type Props = {
    width?: number;
    height?: number;
};

const whatsApp: React.FC<Props> = ({ width = 20, height = 20 }) => {
    const url = `${globals.wsApiUrl}${globals.wsContactNumber}&amp;text=${globals.wsMessage}`;

    return (
        <WhatsAppCTAStyled>
            <a href={url} target="_blank">
                <Image
                    src="/images/social-net/whatsapp.svg"
                    alt="Contactanos por whatsapp"
                    width={width}
                    height={height}
                />
            </a>
        </WhatsAppCTAStyled>
    );
};

export default whatsApp;
