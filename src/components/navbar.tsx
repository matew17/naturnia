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
                        <a
                            href="https://www.instagram.com/soynaturnia/"
                            target="_blank"
                        >
                            <Image
                                src="/images/ig.png"
                                width="30"
                                height="30"
                            ></Image>
                        </a>
                    </div>
                </div>
            </div>

            <div className="menu-logo">
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
                    <Link href="/">
                        <div>
                            <Image
                                src="/images/logo-three-white.png"
                                width="90"
                                height="90"
                            ></Image>
                        </div>
                    </Link>
                    <li
                        className={`menu__items--list 
                                ${
                                    router.asPath === "/soy-naturnia" &&
                                    "menu__items--active"
                                }`}
                    >
                        <Link href="/soy-naturnia">Soy Naturnia</Link>
                    </li>
                </ul>
            </div>

            <div className="menu menu-right">
                <div className="menu__items">
                    <ul>
                        <li className="menu__items--list">Tienda </li>
                    </ul>
                </div>
            </div>
        </NavbarStyled>
    );
}
