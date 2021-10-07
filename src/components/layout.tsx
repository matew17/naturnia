import Footer from "./footer";
import Navbar from "./navbar";
import WhatsApp from "./whatsapp-cta";

export default function Layout({ children }: any) {
    return (
        <>
            <main>{children}</main>
            <WhatsApp width={60} height={60} />
            {/* <Footer /> */}
        </>
    );
}
