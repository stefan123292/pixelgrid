import styled, { keyframes } from "styled-components";

// Keyframe Animations
const fadeInUp = keyframes`
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;

const pulseGlow = keyframes`
    0% {
        box-shadow: 0 0 15px rgba(0, 209, 255, 0.3), 0 0 30px rgba(0, 209, 255, 0.2);
    }
    50% {
        box-shadow: 0 0 20px rgba(0, 209, 255, 0.5), 0 0 40px rgba(0, 209, 255, 0.3);
    }
    100% {
        box-shadow: 0 0 15px rgba(0, 209, 255, 0.3), 0 0 30px rgba(0, 209, 255, 0.2);
    }
`;

const backgroundAnimation = keyframes`
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
`;

// Styled Components
export const LandingContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
    background: linear-gradient(135deg, #000000, #0b0f2f, #001f3f);
    background-size: 300% 300%;
    animation: ${backgroundAnimation} 15s infinite ease-in-out;
`;

export const Universe = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 1;
    background-image: radial-gradient(circle, rgba(0, 209, 255, 0.1) 1px, transparent 1px);
    background-size: 30px 30px; /* Pixel-like grid effect */
    opacity: 0.6;
`;

export const Content = styled.div`
    z-index: 2;
    text-align: center;
    animation: ${fadeInUp} 1.5s ease-out;
`;

export const Title = styled.h1`
    font-size: 3rem;
    margin-bottom: 20px;
    font-family: "Antonio", sans-serif;
    color: #00d1ff;
    text-shadow: 0 0 10px rgba(0, 209, 255, 0.7);
`;

export const Subtitle = styled.p`
    font-size: 1.2rem;
    margin-bottom: 30px;
    font-family: "Spartan", sans-serif;
    color: rgba(255, 255, 255, 0.85);
`;

export const CTAButton = styled.button`
    padding: 12px 20px;
    background: linear-gradient(90deg, #00d1ff, #00ffc6);
    color: #111;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 600;
    box-shadow: 0 4px 15px rgba(0, 209, 255, 0.4);
    transition: all 0.3s ease;

    &:hover {
        transform: scale(1.1);
        background: linear-gradient(90deg, #00ffc6, #00d1ff);
        box-shadow: 0 0 25px rgba(0, 209, 255, 0.7);
    }

    &:active {
        transform: scale(1);
    }
`;

export const Token = styled.div`
    width: 250px;
    height: 250px;
    border-radius: 50%;
    box-shadow: 0 0 20px rgba(0, 209, 255, 0.5);
    margin-top: 20px;
    position: relative;
    animation: ${pulseGlow} 2s infinite alternate ease-in-out;
    z-index: 2;
`;

export const TokenImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    animation: ${fadeInUp} 1s ease-out;
`;
