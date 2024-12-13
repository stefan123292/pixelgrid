import styled, { keyframes } from "styled-components";

// Keyframe Animations
const fadeIn = keyframes`
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;

const glowPulse = keyframes`
  0% {
    box-shadow: 0 0 10px rgba(0, 209, 255, 0.3), 0 0 20px rgba(0, 209, 255, 0.2);
  }
  50% {
    box-shadow: 0 0 20px rgba(0, 209, 255, 0.5), 0 0 30px rgba(0, 209, 255, 0.3);
  }
  100% {
    box-shadow: 0 0 10px rgba(0, 209, 255, 0.3), 0 0 20px rgba(0, 209, 255, 0.2);
  }
`;

// Styled Components for Roadmap
export const RoadmapStyles = styled.div`
    background: linear-gradient(135deg, #0d0d0d, #1a1a1a);
    color: #fff;
    font-family: "Arial", sans-serif;
    padding: 60px 20px;
    text-align: center;
    overflow: hidden;

    h1 {
        font-size: 3rem;
        margin-bottom: 40px;
        color: #00d1ff;
        text-shadow: 0 0 15px rgba(0, 209, 255, 0.7);
        animation: ${fadeIn} 1s ease-in-out;
    }

    .roadmap-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        margin: 0 auto;
        max-width: 900px;

        &::before {
            content: "";
            position: absolute;
            top: 0;
            left: 50%;
            width: 4px;
            height: 100%;
            background: linear-gradient(180deg, #00d1ff, transparent);
            transform: translateX(-50%);
            z-index: 0;

            @media (max-width: 768px) {
                left: 20px;
            }
        }
    }

    .roadmap-item {
        background: rgba(255, 255, 255, 0.08);
        padding: 25px;
        border: 1px solid rgba(255, 255, 255, 0.15);
        border-radius: 15px;
        margin: 20px 0;
        width: 100%;
        max-width: 450px;
        position: relative;
        z-index: 1;
        animation: ${fadeIn} 1s ease-in-out;
        transition: transform 0.4s ease, box-shadow 0.4s ease;

        &:hover {
            transform: translateY(-10px) scale(1.02);
            box-shadow: 0 10px 30px rgba(0, 209, 255, 0.3);
        }

        h2 {
            font-size: 1.6rem;
            margin-bottom: 10px;
            color: #00d1ff;
        }

        p {
            font-size: 1.1rem;
            line-height: 1.6;
            color: rgba(255, 255, 255, 0.8);
        }

        &::before {
            content: "";
            position: absolute;
            top: 20px;
            left: -40px;
            width: 20px;
            height: 20px;
            background-color: #00d1ff;
            border-radius: 50%;
            animation: ${glowPulse} 2s infinite ease-in-out;

            @media (max-width: 768px) {
                left: -25px;
            }
        }
    }

    .roadmap-item:nth-child(even) {
        align-self: flex-end;

        @media (max-width: 768px) {
            align-self: flex-start;
            margin-left: 40px;
        }
    }

    img {
        width: 100%;
        max-width: 600px;
        height: auto;
        margin-top: 40px;
        border-radius: 15px;
        box-shadow: 0 0 15px rgba(0, 209, 255, 0.2);
        animation: ${fadeIn} 1.5s ease-in-out;

        @media (max-width: 768px) {
            max-width: 90%;
        }
    }
`;
