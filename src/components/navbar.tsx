import React from "react";

import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

import { globals } from "@utils/constants";
import { NavbarStyled } from "@styles/components/Navbar";
import Logo from "@components/logo";
import logosData from "@utils/gluetexts/logos";

interface NavbarProps {
    position?: string;
}

const Navbar: React.FC<NavbarProps> = ({ position }) => {
    const router = useRouter();
    return (
        <NavbarStyled position={position}>
            <div className="menu">
                <div className="menu__items">
                    <div className="menu__ig">
                        <Logo
                            alt={logosData.ig.alt}
                            height={logosData.ig.heigth}
                            width={logosData.ig.width}
                            url={logosData.ig.url}
                            src={logosData.ig.src}
                        />
                    </div>
                </div>
            </div>

            <div className="menu-logo">
                <ul>
                    <li
                        className={`hiden-mobile  menu__items--list 
                                ${
                                    router.asPath === "/catalogo" &&
                                    "menu__items--active"
                                }`}
                    >
                        <Link href="/catalogo">Catalogo</Link>
                    </li>
                    <Link href="/" passHref>
                        <div>
                            <Image
                                src={`${globals.cloudinaryBaseUrl}/v1633615397/naturnia/logos/logo-white.png`}
                                alt="Logo de naturnia"
                                width="200"
                                height="150"
                            ></Image>
                        </div>
                    </Link>
                    <li
                        className={`hiden-mobile menu__items--list 
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
                <div className="hiden-mobile  menu__items">
                    <ul>
                        <li className="menu__items--list">Tienda </li>
                    </ul>
                </div>
            </div>
        </NavbarStyled>
    );
};

export default Navbar;
