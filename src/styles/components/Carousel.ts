import styled, { css } from 'styled-components';

import { ThemedProps } from '../theme';

interface CarouselStyled extends ThemedProps {
    fadeDuration: number;
    visibleDuration: number;
    totalSlides: number;
}

const Fade = (num: number, fade: number, visible: number) => {
    const a = 100 / ((fade + visible) * num);

    let childs = '';

    for (let index = 1; index <= num; index++) {
        childs += `
            &:nth-child(${index}) {
                animation-delay: ${(fade + visible) * (index - 1)}s;
            }
        `;
    }

    return css`
        @keyframes fade {
            0%   { opacity: 0; }
            ${a * fade + '%'}   { opacity: 1; }
            ${a * (fade + visible) + '%'}  { opacity: 1; }
            ${a * (fade + visible + fade) +  '%'}  { opacity: 0; }
            100% { opacity: 0; }
        }

        animation-name: fade;
        animation-duration: ${((fade + visible) * num)}s;

        ${childs}
    `;
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
            animation-timing-function: linear;
            animation-iteration-count: infinite;
            animation-duration: normal;
            animation-play-state: running;
            animation-fill-mode: forwards;
            ${({totalSlides, fadeDuration, visibleDuration}) => Fade(totalSlides, fadeDuration, visibleDuration)}
        }

        &__item-wrapper {
            position: relative;
            width: 100%;
            height: 100%;
        }
     }
`;
