import styled, { keyframes } from "styled-components";

// Keyframe Animations
const pulseGlow = keyframes`
    0% {
        text-shadow: 0 0 5px rgba(0, 209, 255, 0.3), 0 0 10px rgba(0, 209, 255, 0.2);
    }
    50% {
        text-shadow: 0 0 10px rgba(0, 209, 255, 0.5), 0 0 20px rgba(0, 209, 255, 0.3);
    }
    100% {
        text-shadow: 0 0 5px rgba(0, 209, 255, 0.3), 0 0 10px rgba(0, 209, 255, 0.2);
    }
`;

// Styled Footer Component
export const FooterWrapper = styled.footer`
  background: linear-gradient(135deg, #0d0d0d, #111); /* Subtle gradient background */
  color: rgba(255, 255, 255, 0.85);
  text-align: center;
  padding: 30px 20px;
  font-size: 1rem;
  width: 100%;
  position: relative;
  bottom: 0;

  /* Responsive font size for smaller devices */
  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 20px 10px;
  }

  p {
    margin: 8px 0;
    line-height: 1.5;
    animation: ${pulseGlow} 3s infinite ease-in-out;
  }

  a {
    color: #00d1ff; /* Highlighted link color */
    text-decoration: none;
    font-weight: 600;
    transition: color 0.3s ease, transform 0.3s ease;

    &:hover {
      color: #00ffc6;
      transform: scale(1.05); /* Slight scale on hover */
    }
  }

  /* Decorative horizontal line for visual separation */
  &::before {
    content: "";
    display: block;
    width: 50%;
    margin: 0 auto 15px;
    height: 2px;
    background: linear-gradient(90deg, transparent, #00d1ff, transparent);
    opacity: 0.7;
  }

  /* Small "Made with ❤️" animation */
  span {
    color: #ff7b00;
    animation: ${pulseGlow} 2s infinite alternate;
  }
`;
