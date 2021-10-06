import { CarouselStyled } from '@styles/components/Carousel';
import  Image from 'next/image';

const slides = [
    {
        id: 'slide-1',
        url: 'https://res.cloudinary.com/teocastano/image/upload/v1633489779/naturnia/slide_1.jpg'
    },
    {
        id: 'slide-2',
        url: 'https://res.cloudinary.com/teocastano/image/upload/v1633489247/naturnia/slide_2.jpg'
    },
    {
        id: 'slide-3',
        url: 'https://res.cloudinary.com/teocastano/image/upload/v1633489247/naturnia/slide_3.jpg'
    },
    {
        id: 'slide-4',
        url: 'https://res.cloudinary.com/teocastano/image/upload/v1633489247/naturnia/slide_4.jpg'
    },
];

const duration = 24;

const Carousel: React.FC = () => {
    return (
        <CarouselStyled duration={duration} totalSlides={slides.length}>
            <div className="slider" aria-hidden="true">
                <div className="slider__gallery">
                    {slides.map(slide => (
                        <div className="slider__item" key={slide.id}>
                            <div className="slider__item-wrapper">
                                <Image src={slide.url} alt="" layout="fill"/>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="slider__overlay"></div>
            </div>
        </CarouselStyled>
    );
};

export default Carousel;
