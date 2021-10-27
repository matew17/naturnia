import { ThemedProps } from '@styles/theme';
import { down } from 'styled-breakpoints';
import styled from 'styled-components';

interface NosotrosStyled extends ThemedProps {}

export const NosotrosStyled = styled.main<NosotrosStyled>`
    .hero {
        background-color: ${({ theme }) => theme.colors.pantone};
        padding-top: 20rem;
        text-align: center;

        &__title {
            font-size: 4rem;
            font-weight: 300;
            color: ${({ theme }) => theme.colors.white};
        }

        &__text-container {
            display: block;
            padding-bottom: 5rem;
            margin-left: auto;
            margin-right: auto;
        }

        &__image-container {
            display: flex;
            justify-content: center;
            position: relative;

            &:before {
                content: '';
                position: absolute;
                background-color: #fff;
                left: 0;
                bottom: 0;
                width: 100%;
                height: 50%;
                transform: none;
            }
        }

        &__image {
            width: 100%;
            height: 50vh;
            max-width: 50rem;
            position: relative;
        }
    }

    .text {
        text-align: center;

        p {
            width: 60%;
            margin: 0 auto;
            margin-top: 3.75rem;
            margin-bottom: 3.75rem;
            line-height: 1.5;
        }
    }

    .grid {
        width: 70%;
        margin-left: auto;
        margin-right: auto;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-areas:
                'soyOrganicaImage soyConcienteText soyArtesanalImage soyLocalText'
                'soyOrganicaText soyConcienteImage soyArtesanalText soyLocalImage';

        &__item {
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 300px;
            text-align: center;
            line-height: 1;

            &:nth-child(1) {
                grid-area: soyArtesanalImage;
            }

            &:nth-child(2) {
                grid-area: soyOrganicaText;
                background: ${({ theme }) => theme.colors.lulo};
            }

            &:nth-child(3) {
                grid-area: soyLocalImage;
            }

            &:nth-child(4) {
                grid-area: soyConcienteText;
                background: ${({ theme }) => theme.colors.pantone};
            }

            &:nth-child(5) {
                grid-area: soyArtesanalText;
                background: ${({ theme }) => theme.colors.tamarindo};
            }

            &:nth-child(6) {
                grid-area: soyOrganicaImage;
            }

            &:nth-child(7) {
                grid-area: soyLocalText;
                background: ${({ theme }) => theme.colors.uchuva1};
            }

            &:nth-child(8) {
                grid-area: soyConcienteImage;
            }
        }

        &__image {
            position: relative;
            width: 100%;
            height: 100%;
        }
    }

    .team {
        text-align: center;
        padding-top: 15rem;
        padding-bottom: 15rem;
        color: white;

        &__title {
            margin-bottom: 5rem;
        }

        &__members {
            display: flex;
            justify-content: center;
        }

        &__member {
            margin: 0 3rem;

            &-name {
                display: block;
                font-weight: bold;
                margin-bottom: 5px;
                text-transform: uppercase;
            }

            &-rol {
                display: block;
                font-size: 16px;
            }
        }

        &__image-wrapper {
            position: relative;
            width: 200px;
            height: 200px;
            margin-bottom: 1rem;
        }
        
        &__image {
            border-radius: 50%;
        }
    }

    ${down('lg')} {
        .hero {
            &__image {
                width: 80%;
            }
        }

        .text {
            p {
                width: 90%;
            }
        }

        .grid {
            grid-template-columns: repeat(2, 1fr);
            grid-template-areas:
                'soyOrganicaImage soyOrganicaText'
                'soyConcienteText soyConcienteImage'
                'soyArtesanalImage soyArtesanalText'
                'soyLocalText soyLocalImage';
        }

        .team {
            &__member {
                margin: 0 2rem;
            }
        }
    }

    ${down('md')} {
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
            grid-template-columns: repeat(1, 1fr);
            grid-template-areas:
                'soyOrganicaText'
                'soyOrganicaImage'
                'soyConcienteText'
                'soyConcienteImage'
                'soyArtesanalText'
                'soyArtesanalImage'
                'soyLocalText'
                'soyLocalImage';

            &__item { 
                min-height: 280px;
            }
        }

        .team {
            padding-top: 5rem;
            padding-bottom: 5rem;

            &__members {
                flex-direction: column;
                align-items: center;
            }

            &__member {
                margin-bottom: 2rem;
            }
        }
    }

    ${down('sm')} {
        .grid {
            width: 100%;
        }
    }
`;
