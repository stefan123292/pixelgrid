import styled, { keyframes } from 'styled-components';

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
        box-shadow: 0 0 10px rgba(0, 209, 255, 0.4), 0 0 20px rgba(0, 209, 255, 0.2);
    }
    50% {
        box-shadow: 0 0 15px rgba(0, 209, 255, 0.6), 0 0 25px rgba(0, 209, 255, 0.4);
    }
    100% {
        box-shadow: 0 0 10px rgba(0, 209, 255, 0.4), 0 0 20px rgba(0, 209, 255, 0.2);
    }
`;

// Styled Components
export const HowToBuyContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    color: #e0e0e0;
    background: linear-gradient(135deg, #0d0d0d, #1a1a1a);
    padding: 3rem 2rem;
    text-align: center;
    overflow: hidden;
`;

export const Title = styled.h1`
    font-size: 3rem;
    margin-bottom: 2rem;
    color: #00d1ff;
    text-shadow: 0 0 10px rgba(0, 209, 255, 0.6);
    animation: ${fadeInUp} 1s ease-out;
`;

export const StepsContainer = styled.ol`
    background: rgba(255, 255, 255, 0.05);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    padding: 2rem;
    max-width: 700px;
    width: 100%;
    line-height: 1.8;
    font-size: 1.2rem;
    text-align: left;
    color: rgba(255, 255, 255, 0.9);
    animation: ${fadeInUp} 1.2s ease-out;
`;

export const Step = styled.li`
    margin-bottom: 1.5rem;
    position: relative;
    padding-left: 1.5rem;

    &::before {
        content: "•";
        position: absolute;
        left: 0;
        top: 0;
        color: #00d1ff;
        font-size: 1.5rem;
        animation: ${pulseGlow} 2s infinite;
    }

    strong {
        color: #00ffc6;
    }
`;

export const CTAButton = styled.a`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-top: 3rem;
    padding: 12px 25px;
    color: #111;
    background: linear-gradient(90deg, #00d1ff, #00ffc6);
    border-radius: 8px;
    font-size: 1.1rem;
    font-weight: bold;
    text-decoration: none;
    transition: all 0.3s ease;
    box-shadow: 0 0 10px rgba(0, 209, 255, 0.3);
    animation: ${fadeInUp} 1.5s ease-out;

    &:hover {
        background: linear-gradient(90deg, #00ffc6, #00d1ff);
        transform: scale(1.05);
        box-shadow: 0 0 20px rgba(0, 209, 255, 0.6);
    }

    img {
        width: 30px;
        height: auto;
        margin-right: 10px;
        filter: drop-shadow(0 0 5px rgba(0, 209, 255, 0.6));
    }
`;
