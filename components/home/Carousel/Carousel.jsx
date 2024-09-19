"use client";

import { useState, useEffect } from "react";
import "./Carousel.css";

// Define slides outside the component to avoid re-creating them on each render
const slides = [
    {
        image: "./assets/carousel-img/1.jpg",
        alt: "Slide 1",
    },
    {
        image: "./assets/carousel-img/2.jpg",
        alt: "Slide 2",
    },
    {
        image: "./assets/carousel-img/3.jpg",
        alt: "Slide 3",
    },
    {
        image: "./assets/carousel-img/4.jpg",
        alt: "Slide 4",
    }
    
];

export default function Carousel() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const handleNext = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    };

    const handlePrev = () => {
        setCurrentSlide(
            (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
        );
    };

    // Auto-play the slides
    useEffect(() => {
        const intervalId = setInterval(() => {
            handleNext();
        }, 3000); // Adjust the interval as needed

        return () => clearInterval(intervalId); // Cleanup on unmount
    }, [currentSlide]);

    return (
        <div className="carousel">
            <main id="carousel">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`item ${
                            index === currentSlide ? "active" : ""
                        }`}
                    >
                        {slide.image ? (
                            <img src={slide.image} alt={slide.alt} />
                        ) : (
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: slide.content,
                                }}
                            />
                        )}
                    </div>
                ))}
            </main>

            <button className="carousel-prev" onClick={handlePrev}>
                &#10094;
            </button>
            <button className="carousel-next" onClick={handleNext}>
                &#10095;
            </button>
        </div>
    );
}
