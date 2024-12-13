import {CTAButton, HowToBuyContainer, Step, StepsContainer, Title} from "./HowToBuyStyles";
import pumpFunLogo from "../../assets/images/pump.png";

const HowToBuy = () => {
    return (
        <HowToBuyContainer>
            <Title>How to Buy PixelGrid</Title>
            <StepsContainer>
                <Step>1. Go to <strong>pump.fun</strong>, the trusted platform for buying PixelGrid.</Step>
                <Step>2. Connect your crypto wallet.</Step>
                <Step>3. Search for <strong>PixelGrid</strong> on the platform.</Step>
                <Step>4. Follow the prompts to complete your purchase.</Step>
                <Step>5. Hold your PixelGrid and join our community to share the fun!</Step>
            </StepsContainer>
            <CTAButton href="#pump-fun" target="_blank" rel="noreferrer">
                <div className="buttos-container">
                    <img src={pumpFunLogo} alt="Pump Fun"/>
                </div>
            </CTAButton>
        </HowToBuyContainer>
);
};

export default HowToBuy;
