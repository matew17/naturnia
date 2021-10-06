import styled from 'styled-components';

import { ThemedProps } from '../theme';

interface CarouselStyled extends ThemedProps {
    duration: number;
    totalSlides: number;
}

export const CarouselStyled = styled.section<CarouselStyled>`
    width: 100%;
    height: 100%;

    .slider {
        width: 100%;
        height: 100%;
        overflow: hidden;
        position: relative;

        &__gallery {
            position: relative;
            height: 100%;
        }

        &__overlay {
            position: absolute;
            top: 0;
            width: 100%;
            height: 100%;
            background: black;
            opacity: 0.3;
            z-index: 1;
        }

        &__item {
            display: block;
            width: 100%;
            height: 100%;
            position: absolute;
            opacity:0;
            top:0;
            animation-name: anim_slides;
            animation-duration: ${({ duration }) => duration }s;
            animation-timing-function: linear;
            animation-iteration-count: infinite;
            animation-duration: normal;
            animation-delay: 0;
            animation-play-state: running;
            animation-fill-mode: forwards;

            &:nth-child(2) {
                animation-delay: 6s;
            }

            &:nth-child(3) {
                animation-delay: 12s;
            }

            &:nth-child(4) {
                animation-delay: 18s;
            }
        }

        &__item-wrapper {
            position: relative;
            width: 100%;
            height: 100%;
        }
     }

    @keyframes anim_slides {
        0% {
            opacity: 0;
        }
        6% {
            opacity: 1;
        }
        24% {
            opacity: 1;
        }
        30% {
            opacity: 0;
        }
        100% {
            opacity: 0;
        }
    }
`;
