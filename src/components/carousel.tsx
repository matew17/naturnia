import { breakpoints } from "@styles/abstracts/variables";
import { CarouselStyled } from "@styles/components/CarouselStyled";
import { globals } from "@utils/constants";

const slides = [
    {
        id: "slide-1",
        desktop: `${globals.cloudinaryBaseUrl}v1633963061/naturnia/slide_-05_bg.png`,
        mobile: `${globals.cloudinaryBaseUrl}v1633963056/naturnia/slide_-05_sm.png`,
    },
    {
        id: "slide-2",
        desktop: `${globals.cloudinaryBaseUrl}v1633489247/naturnia/slide_2.jpg`,
        mobile: `${globals.cloudinaryBaseUrl}v1633489247/naturnia/slide_2.jpg`,
    },
    {
        id: "slide-3",
        desktop: `${globals.cloudinaryBaseUrl}v1633489247/naturnia/slide_3.jpg`,
        mobile: `${globals.cloudinaryBaseUrl}v1633489247/naturnia/slide_3.jpg`,
    },
    {
        id: "slide-4",
        desktop: `${globals.cloudinaryBaseUrl}v1634680548/naturnia/slide_6.jpg`,
        mobile: `${globals.cloudinaryBaseUrl}v1634680548/naturnia/slide_6.jpg`,
    },
];

const fadeDuration = 2;
const visibleDuration = 4;

interface CarouselProps {
    displayOverlay?: boolean;
}

const Carousel: React.FC<CarouselProps> = ({ displayOverlay = true }) => {
    return (
        <CarouselStyled
            fadeDuration={fadeDuration}
            visibleDuration={visibleDuration}
            totalSlides={slides.length}
        >
            <div className="slider" aria-hidden="true">
                <div className="slider__gallery">
                    {slides.map((slide) => (
                        <div className="slider__item" key={slide.id}>
                            <picture>
                                <source
                                    media={`(min-width:${breakpoints.sm})`}
                                    srcSet={slide.desktop}
                                />
                                <img
                                    src={slide.mobile}
                                    alt={slide.id}
                                    className="slider__img"
                                />
                            </picture>
                        </div>
                    ))}
                </div>
                {displayOverlay && <div className="slider__overlay"></div>}
            </div>
        </CarouselStyled>
    );
};

export default Carousel;
