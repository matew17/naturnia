import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

import { NavbarStyled } from "@styles/components/Navbar";

export default function Navbar() {
    const router = useRouter();
    return (
        <NavbarStyled>
            <div className="menu">
                <div className="menu__items">
                    <div className="menu__ig">
                        <Image
                            src="/images/ig.png"
                            width="40"
                            height="40"
                        ></Image>
                    </div>
                    <ul>
                        <li
                            className={`menu__items--list 
                                ${
                                    router.asPath === "/catalogo" &&
                                    "menu__items--active"
                                }`}
                        >
                            <Link href="/catalogo">Catalogo</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <Link href="/">
                <div className="logo">
                    <Image
                        src="/images/logo-three-white.png"
                        width="90"
                        height="90"
                    ></Image>
                </div>
            </Link>
            <div className="menu menu-right">
                <div className="menu__items">
                    <ul>
                        <li
                            className={`menu__items--list 
                                ${
                                    router.asPath === "/soy-naturnia" &&
                                    "menu__items--active"
                                }`}
                        >
                            <Link href="/soy-naturnia">Soy Naturnia</Link>
                        </li>
                        <li className="menu__items--list">Tienda </li>
                    </ul>
                </div>
            </div>
        </NavbarStyled>
    );
}
