import { breakpoints } from '@styles/abstracts/variables';
import { CarouselStyled } from '@styles/components/Carousel';

const slides = [
    {
        id: 'slide-1',
        desktop: 'https://res.cloudinary.com/teocastano/image/upload/v1633489779/naturnia/slide_1.jpg',
        mobile: 'https://res.cloudinary.com/teocastano/image/upload/v1633489779/naturnia/slide_1.jpg'
    },
    {
        id: 'slide-2',
        desktop: 'https://res.cloudinary.com/teocastano/image/upload/v1633489247/naturnia/slide_2.jpg',
        mobile: 'https://res.cloudinary.com/teocastano/image/upload/v1633489247/naturnia/slide_2.jpg'
    },
    {
        id: 'slide-3',
        desktop: 'https://res.cloudinary.com/teocastano/image/upload/v1633489247/naturnia/slide_3.jpg',
        mobile: 'https://res.cloudinary.com/teocastano/image/upload/v1633489247/naturnia/slide_3.jpg'
    },
    {
        id: 'slide-4',
        desktop: 'https://res.cloudinary.com/teocastano/image/upload/v1633489247/naturnia/slide_4.jpg',
        mobile: 'https://res.cloudinary.com/teocastano/image/upload/v1633489247/naturnia/slide_4.jpg'
    },
];

const fadeDuration = 2;
const visibleDuration = 4;

interface CarouselProps {
    displayOverlay?: boolean;
}

const Carousel: React.FC<CarouselProps> = ({ displayOverlay = true }) => {
    return (
        <CarouselStyled fadeDuration={fadeDuration} visibleDuration={visibleDuration} totalSlides={slides.length}>
            <div className="slider" aria-hidden="true">
                <div className="slider__gallery">
                    {slides.map(slide => (
                        <div className="slider__item" key={slide.id}>
                            <picture>
                                <source media={`(min-width:${breakpoints.sm})`} srcSet={slide.desktop}/>
                                <img src={slide.mobile} alt="" className="slider__img"/>
                            </picture>
                        </div>
                    ))}
                </div>
                { displayOverlay && <div className="slider__overlay"></div>}
            </div>
        </CarouselStyled>
    );
};

export default Carousel;
