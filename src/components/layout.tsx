import { useRouter } from "next/router";

import Footer from "./footer";
import Navbar from "./navbar";
import WhatsApp from "./whatsapp-cta";

export default function Layout({ children }: any) {
    const router = useRouter();
    const absolutePositionRoutes = ["/", "/catalogo"];
    const position = absolutePositionRoutes.includes(router.pathname)
        ? "absolute"
        : "";

    return (
        <>
            <Navbar position={position} />
            <main>{children}</main>
            <WhatsApp width={60} height={60} />
            <Footer />
        </>
    );
}
