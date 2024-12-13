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

const pulse = keyframes`
    0% {
        box-shadow: 0 0 10px rgba(255, 255, 255, 0.2);
    }
    50% {
        box-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
    }
    100% {
        box-shadow: 0 0 10px rgba(255, 255, 255, 0.2);
    }
`;

export const KeyFeaturesStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
  background: linear-gradient(135deg, #0f0f0f, #1c1c1c); /* Gradient background */
  color: #fff;
  font-family: "Arial", sans-serif;
  overflow: hidden;

  h1 {
    font-size: 3rem;
    margin-bottom: 40px;
    text-align: center;
    color: #00ffc6; /* Highlighted text color */
    text-shadow: 0 0 15px rgba(0, 255, 198, 0.6);
    animation: ${fadeIn} 1s ease-in-out;
  }

  .features-container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    width: 100%;
    max-width: 1200px;

    & > .feature-card:nth-child(odd) {
      animation: ${fadeIn} 1s ease-in-out 0.2s;
    }

    & > .feature-card:nth-child(even) {
      animation: ${fadeIn} 1s ease-in-out 0.5s;
    }
  }

  .feature-card {
    background: linear-gradient(135deg, #222, #333); /* Darker card gradient */
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 15px;
    padding: 25px;
    text-align: center;
    width: 280px;
    transition: transform 0.4s ease, box-shadow 0.4s ease;
    cursor: pointer;

    &:hover {
      transform: translateY(-15px) scale(1.05);
      box-shadow: 0px 10px 25px rgba(0, 255, 198, 0.3);
      animation: ${pulse} 1.5s infinite alternate;
    }

    h2 {
      font-size: 1.75rem;
      margin-bottom: 12px;
      color: #00ffc6;
      text-shadow: 0 0 10px rgba(0, 255, 198, 0.5);
    }

    p {
      font-size: 1rem;
      line-height: 1.6;
      color: rgba(255, 255, 255, 0.8);
    }
  }
`;
