import React from "react";
import "./Hero.css"; // Assuming you will style it with CSS

export default function Hero() {
    return (
        <section className="hero-section" id="home">
            <div className="container">
                <div className="left-section">
                    <div className="text">
                        <h3 className="animate-character">
                            <br />
                            Nurturing the Entrepreneur <br />
                            in you
                        </h3>
                        <a href="#welcome">
                            <script
                                src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs"
                                type="module"
                            ></script>

                            <dotlottie-player
                                src="https://lottie.host/03a99eae-a196-4fd9-a257-b58fcb9716ad/L5igv5vE8i.json"
                                background="transparent"
                                speed="0.8"
                                style={{ width: "120px", height: "120px" }}
                                loop
                                autoplay
                            ></dotlottie-player>
                        </a>
                    </div>
                </div>

                <div className="right-section">
                    <script
                        src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs"
                        type="module"
                    ></script>

                    <dotlottie-player
                        id="lottie-player"
                        src="https://lottie.host/4d1b6d14-798a-48ef-a821-ce5827d9b1d4/naVIWR3U3i.json"
                        background="transparent"
                        speed="1.5"
                        style={{ width: "500px", height: "600px" }}
                        loop
                        autoplay
                    ></dotlottie-player>
                </div>
            </div>
        </section>
    );
}
