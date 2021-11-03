import { down } from "styled-breakpoints";
import styled from "styled-components";

import { Font } from "@styles/abstracts/mixins";
import { ThemedProps } from "@styles/theme";

interface NosotrosStyled extends ThemedProps {}

export const NosotrosStyled = styled.main<NosotrosStyled>`
    .hero {
        background-color: ${({ theme }) => theme.colors.pantone2};
        padding-top: 16rem;
        text-align: center;

        &__title-wrapper {
            display: flex;
            justify-content: center;
            margin: 0 0 80px 0;
        }

        &__title {
            ${Font(80, 85, 0.5, 500)};
            color: ${({ theme }) => theme.colors.white};
        }

        &__image-container {
            display: flex;
            justify-content: center;
            position: relative;

            &:before {
                content: "";
                position: absolute;
                background: ${({ theme }) => theme.colors.white};
                left: 0;
                bottom: 0;
                width: 100%;
                height: 50%;
                transform: none;
            }
        }

        &__image {
            position: relative;
            width: 100%;
            height: 80vh;
            max-width: 50rem;
        }
    }

    .about-text {
        color: ${({ theme }) => theme.colors.pantone2};
        max-width: 992px;
        margin: 5rem auto 15rem;
        text-align: center;

        p {
            ${Font(40, 45, 0.5, 500)};
        }
    }

    .values {
        width: 100%;
        display: flex;
        flex-flow: column;
        align-items: center;
        padding: 15rem 0;
        background: ${({ theme }) => theme.colors.greyAlt};
        color: ${({ theme }) => theme.colors.white};

        h2 {
            ${Font(60, 65, 1, 500)};
        }
    }

    .grid {
        margin: 10rem auto;
        width: 95%;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-areas:
            "soyOrganicaImage  soyConcienteText   soyArtesanalImage  soyLocalText"
            "soyOrganicaText   soyConcienteImage soyArtesanalText  soyLocalImage";

        &__item {
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 300px;
            border-radius: 4px;

            p {
                ${Font(35, 50, 1, 500)};
                color: ${({ theme }) => theme.colors.white};
            }

            &:nth-child(1) {
                grid-area: soyOrganicaImage;
            }

            &:nth-child(2) {
                grid-area: soyOrganicaText;
                background: ${({ theme }) => theme.colors.pantone3};
            }

            &:nth-child(3) {
                grid-area: soyConcienteImage;
            }

            &:nth-child(4) {
                grid-area: soyConcienteText;
                background: ${({ theme }) => theme.colors.pantone2};
            }

            &:nth-child(5) {
                grid-area: soyArtesanalImage;
            }

            &:nth-child(6) {
                grid-area: soyArtesanalText;
                background: ${({ theme }) => theme.colors.lulo2};
            }

            &:nth-child(7) {
                grid-area: soyLocalImage;
            }

            &:nth-child(8) {
                background: ${({ theme }) => theme.colors.araza2};
                grid-area: soyLocalText;
            }
        }

        &__image {
            position: relative;
            width: 100%;
            height: 100%;
        }

        .image-element {
            border-radius: 4px;
        }
    }

    .grid-text {
        text-align: center;
        width: 60%;

        p {
            ${Font(40, 45, 0.5, 500)};
        }
    }

    .team {
        padding: 15rem 0;
        display: flex;
        flex-flow: column;
        align-items: center;
        background: ${({ theme }) => theme.colors.pantone2};
        color: ${({ theme }) => theme.colors.white};

        &__title {
            ${Font(60, 65, 1.5, 500)};
            margin-bottom: 10rem;
        }

        &__members {
            max-width: 992px;
            display: flex;
            flex-flow: column;
        }

        &__member {
            display: flex;
            width: 100%;
            align-items: center;

            &-avatar-wrapper {
                width: 100%;
                display: flex;
                flex-flow: column;
                position: relative;
                padding: 16px;
            }

            &-image-wrapper {
                position: relative;
                width: 100%;
                height: 550px;
            }

            &-image {
                border-radius: 4px;
            }

            &-texts {
                position: absolute;
                background: ${({ theme }) => theme.colors.white};
                bottom: 16px;
                left: 16px;
                height: 60px;
                width: 40%;
                padding: 16px;
            }

            span {
                display: block;
            }

            &-name {
                ${Font(24, 28, 0.5, 700)};
                color: ${({ theme }) => theme.colors.pantone2};
            }

            &-rol {
                ${Font(18, 22, 0.5, 500)};
                color: ${({ theme }) => theme.colors.pantone};
            }

            &-presentation {
                ${Font(24, 30, 0.5, 500)};
                padding: 34px;
                width: 100%;
            }
        }

        &__member-reversed {
            flex-flow: row-reverse;

            .team__member-texts {
                left: unset;
                right: 16px;
                text-align: right;
            }
        }
    }

    ${down("lg")} {
        .hero {
            &__image {
                width: 80%;
            }
        }

        .about-text,
        .grid-text {
            width: 70%;
        }

        .grid {
            width: 80%;
            grid-template-columns: repeat(2, 1fr);
            grid-template-areas:
                "soyOrganicaImage soyOrganicaText"
                "soyConcienteText soyConcienteImage"
                "soyArtesanalImage soyArtesanalText"
                "soyLocalText soyLocalImage";

            &__item {
                min-height: 350px;
            }
        }
    }

    ${down("md")} {
        .hero {
            padding-top: 15rem;

            &__title {
                font-size: 3rem;
            }

            &__image {
                width: 90%;
            }
        }

        .grid {
            width: 80%;

            &__item {
                p {
                    ${Font(40, 50, 1, 700)};
                }
            }
        }

        .team {
            &__members {
                max-width: 768px;
            }
        }
    }

    ${down("sm")} {
        .hero {
            &__title {
                ${Font(40, 45, 1, 700)};
            }
        }

        .about-text,
        .grid-text {
            width: 90%;
        }

        .values {
            h2 {
                ${Font(45, 50, 1, 700)};
            }
        }

        .grid {
            width: 100%;
        }

        .team {
            &__title {
                ${Font(55, 50, 1.5, 500)};
            }

            &__members {
                max-width: 100%;
            }

            &__member {
                flex-flow: column;
            }
        }
    }

    ${down("xs")} {
        .grid {
            grid-template-columns: repeat(1, 1fr);
            grid-template-areas:
                "soyOrganicaText"
                "soyOrganicaImage"
                "soyConcienteText"
                "soyConcienteImage"
                "soyArtesanalText"
                "soyArtesanalImage"
                "soyLocalText"
                "soyLocalImage";

            &__item {
                min-height: 450px;
            }
        }
    }
`;
