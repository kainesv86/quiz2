import * as React from "react";
import "./style.scss";

export interface SlideShowProps {}
interface imagesProps {
        current: number;
        img: string[];
}

export const SlideShow: React.FunctionComponent<SlideShowProps> = () => {
        const [images, setImages] = React.useState<imagesProps>({
                current: 0,
                img: [
                        "/images/slideShow/slideShow1.png",
                        "/images/slideShow/slideShow2.png",
                        "/images/slideShow/slideShow3.png",
                        "/images/slideShow/slideShow4.png",
                        "/images/slideShow/slideShow5.png",
                ],
        });

        const [contents, setContent] = React.useState({
                topic: ["Organize your study", "2", "3", "4", "5"],
                info: [
                        "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.",
                        "22",
                        "33",
                        "44",
                        "55",
                ],
                links: ["google.com", "google.com", "google.com", "google.com", "google.com"],
        });

        const [currentDot, setCurrentDot] = React.useState(0);
        const [prevDot, setPrevDot] = React.useState(0);

        const handleDotClicked = React.useCallback(
                (index) => {
                        setPrevDot(currentDot);
                        setCurrentDot(index);
                },
                [setPrevDot, currentDot]
        );

        return (
                <div className="slideshow">
                        <div className="slideshow__slide">
                                <div
                                        style={{ transform: `translateX(-${currentDot * 100}%)` }}
                                        className={prevDot !== currentDot ? "slideshow__slide__container slide-in" : "slideshow__slide__container"}
                                >
                                        <img src={images.img[0]} alt="" />
                                        <img src={images.img[1]} alt="" />
                                        <img src={images.img[2]} alt="" />
                                        <img src={images.img[3]} alt="" />
                                        <img src={images.img[4]} alt="" />
                                </div>
                        </div>
                        <div className="slideshow__content">
                                <div className="dots">
                                        {contents.info.map((_, index) => {
                                                return (
                                                        <span
                                                                key={index}
                                                                className={index === currentDot ? "dots__dot dots__dot--active" : "dots__dot"}
                                                                onClick={() => handleDotClicked(index)}
                                                        ></span>
                                                );
                                        })}
                                </div>
                                <div className="slideshow__info">
                                        <h3>{contents.topic[currentDot]}</h3>
                                        <p>{contents.info[currentDot]}</p>
                                        <a href={contents.links[currentDot]}>Learn more →</a>
                                </div>
                        </div>
                </div>
        );
};
