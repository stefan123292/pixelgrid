import styled, { keyframes } from "styled-components";

// Keyframe Animations
const fadeIn = keyframes`
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;

const glowPulse = keyframes`
    0% {
        box-shadow: 0 0 5px rgba(0, 209, 255, 0.4), 0 0 10px rgba(0, 209, 255, 0.2);
    }
    50% {
        box-shadow: 0 0 10px rgba(0, 209, 255, 0.6), 0 0 20px rgba(0, 209, 255, 0.4);
    }
    100% {
        box-shadow: 0 0 5px rgba(0, 209, 255, 0.4), 0 0 10px rgba(0, 209, 255, 0.2);
    }
`;

export const GalaxyWenWrapper = styled.div`
    background: linear-gradient(135deg, #0d0d0d, #1a1a1a);
    color: #fff;
    font-family: "Arial", sans-serif;
    padding: 60px 20px;
    text-align: center;
    overflow: hidden;

    h1 {
        font-size: 3rem;
        margin-bottom: 25px;
        color: #00d1ff;
        text-shadow: 0 0 15px rgba(0, 209, 255, 0.7);
        animation: ${fadeIn} 1s ease-in-out;
    }

    .content {
        max-width: 800px;
        margin: 0 auto;
        font-size: 1.25rem;
        line-height: 1.7;
        color: rgba(255, 255, 255, 0.9);
        animation: ${fadeIn} 1.2s ease-in-out;
    }

    .buttons-container {
        margin-top: 40px;
        display: flex;
        justify-content: center;
        gap: 30px;
        flex-wrap: wrap;

        a {
            display: inline-block;
            width: 60px;
            height: 60px;
            background: rgba(0, 209, 255, 0.1);
            border-radius: 50%;
            animation: ${glowPulse} 2s infinite ease-in-out;
            transition: transform 0.4s ease, background 0.3s ease;

            &:hover {
                transform: scale(1.2);
                background: rgba(0, 209, 255, 0.2);
            }

            img {
                width: 40px;
                height: 40px;
                margin: 10px;
                filter: drop-shadow(0 0 8px rgba(0, 209, 255, 0.7));
                transition: filter 0.4s ease;

                &:hover {
                    filter: drop-shadow(0 0 15px rgba(0, 209, 255, 0.9));
                }
            }
        }
    }
`;
