import React, { useEffect, useState } from "react";

import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

import { globals } from "@utils/constants";
import { NavbarStyled } from "@styles/components/NavbarStyled";
import Logo from "@components/logo";
import logosData from "@utils/gluetexts/logos-keys";

interface NavbarProps {
    position?: string;
}

const Navbar: React.FC<NavbarProps> = ({ position }) => {
    const router = useRouter();
    const [scrolled, setScrolled] = useState(false);
    const [isMenuDisplay, setIsMenuDisplay] = useState(false);

    const handleOnScroll = () => {
        const offeset = 100;
        window.pageYOffset > offeset ? setScrolled(true) : setScrolled(false);
    };

    useEffect(() => {
        addEventListener("scroll", handleOnScroll);

        return () => {
            removeEventListener("scroll", handleOnScroll);
        };
    }, []);

    const handleButtonClick = () => {
        isMenuDisplay ? setIsMenuDisplay(false) : setIsMenuDisplay(true);
    };

    return (
        <NavbarStyled position={position}>
            <div
                className={
                    scrolled ? "menu-wrapper menu--small" : "menu-wrapper"
                }
            >
                <div className="flex-container">
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
                                <div className="menu-logo__img">
                                    <Image
                                        src={
                                            scrolled
                                                ? `${globals.cloudinaryBaseUrl}/v1633615397/naturnia/logos/logo-three-white.png`
                                                : `${globals.cloudinaryBaseUrl}/v1633615397/naturnia/logos/logo-white.png`
                                        }
                                        alt="Logo de naturnia"
                                        layout="fill"
                                        loading="eager"
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
                                <Link href="/nosotros">Nosotros</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="menu menu-right">
                        <div className="hiden-mobile  menu__items">
                            <ul>
                                <li className="menu__items--list">
                                    <a
                                        href={globals.storeUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Tienda
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <button
                            className="menu-right__button"
                            onClick={handleButtonClick}
                        >
                            <Image
                                src="/menu.png"
                                alt="menu"
                                layout="fill"
                                color="white"
                            />
                        </button>
                    </div>
                </div>

                <div
                    className={
                        isMenuDisplay
                            ? "menu-mobile"
                            : "menu-mobile menu-mobile--hide"
                    }
                >
                    <ul>
                        <li onClick={handleButtonClick}>
                            <Link href="/catalogo">Catalogo</Link>
                        </li>
                        <li onClick={handleButtonClick}>
                            <Link href="/nosotros">Nosotros</Link>
                        </li>
                        <li onClick={handleButtonClick}>
                            <a
                                href={globals.storeUrl}
                                target="_blank"
                                rel="noreferrer"
                            >
                                Tienda
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </NavbarStyled>
    );
};

export default Navbar;
