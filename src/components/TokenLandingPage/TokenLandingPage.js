import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import wagImg from "../../assets/images/el.png";
import { useHistory } from 'react-router-dom';
import {
    Content,
    CTAButton,
    LandingContainer,
    Subtitle,
    Title,
    Token,
    TokenImage,
    Universe
} from "./TokenLandingPageStyles";

const StarryTokenLanding = () => {
    const tokenRef = useRef(null);
    const buttonRef = useRef(null);
    const universeRef = useRef(null);
    const history = useHistory();

    const handleClick = () => {
        history.push('/about');
    };

    useEffect(() => {
        // GSAP WOW Animation for the token
        gsap.timeline({ repeat: -1, yoyo: true })
            .to(tokenRef.current, {
                scale: 1.2,
                duration: 1.5,
                ease: "power1.inOut",
                boxShadow: "0px 0px 20px 5px rgba(255, 255, 255, 0.8)",
            })
            .to(tokenRef.current, {
                rotation: 15,
                duration: 1,
                ease: "power1.inOut"
            })
            .to(tokenRef.current, {
                rotation: -15,
                duration: 1,
                ease: "power1.inOut"
            });

        // GSAP animation for the button
        gsap.from(buttonRef.current, {
            opacity: 0,
            y: 50,
            duration: 1.5,
            delay: 1,
            ease: "power3.out",
        });

        // Pixelated grid background effect
        const pixelCount = 200; // Total number of pixels
        const universe = universeRef.current;
        const width = window.innerWidth;
        const height = window.innerHeight;

        for (let i = 0; i < pixelCount; ++i) {
            const pixel = document.createElement("div");
            const size = Math.random() * 20 + 5; // Random pixel size
            const xpos = Math.random() * width;
            const ypos = Math.random() * height;
            const color = `rgba(255, 255, 255, ${Math.random() * 0.7 + 0.3})`; // Random transparency

            pixel.style.position = "absolute";
            pixel.style.height = `${size}px`;
            pixel.style.width = `${size}px`;
            pixel.style.backgroundColor = color;
            pixel.style.top = `${ypos}px`;
            pixel.style.left = `${xpos}px`;

            universe.appendChild(pixel);

            gsap.to(pixel, {
                opacity: Math.random(),
                x: Math.random() * 50 - 25, // Slight horizontal movement
                y: Math.random() * 50 - 25, // Slight vertical movement
                duration: Math.random() * 2 + 1,
                repeat: -1,
                yoyo: true,
                ease: "power1.inOut",
            });
        }
    }, []);

    return (
        <LandingContainer>
            <Universe ref={universeRef} />
            <Content>
                <Title>Welcome to PixelGrid</Title>
                <Subtitle>The AI-powered token where pixels connect humans, robots, and innovation.</Subtitle>
                <div style={{ marginBottom: '15px' }}>
                    <CTAButton onClick={handleClick} ref={buttonRef}>Join the Grid</CTAButton>
                </div>
            </Content>
            <Token ref={tokenRef}>
                <TokenImage src={wagImg} alt="Token" />
            </Token>
        </LandingContainer>
    );
};

export default StarryTokenLanding;
