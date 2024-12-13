import {CommunityContainer, CommunityLink, Description, LinksContainer, Title} from "./CommunityStyles";
import telegramIcon from "../../assets/images/telegram.png";
import xIcon from "../../assets/images/twitter.png";
import pumpFunLogo from "../../assets/images/pump.png";

const Community = () => {
    return (
        <CommunityContainer>
            <Title>Join the PixelGrid Community</Title>
            <Description>
                Be part of the most fun and engaging crypto community! Whether you love sharing memes, chatting with fellow enthusiasts, or learning about crypto, we’re here to make it enjoyable for everyone.
            </Description>
            <LinksContainer>
                <div className="buttons-container">
                    <a href="https://t.me/+lDlEvpHhZA9mYWUy" target="_blank" rel="noopener noreferrer">
                        <img src={telegramIcon} alt="Telegram"/>
                    </a>
                    <a href="https://x.com/NeuroGrid1" target="_blank" rel="noopener noreferrer">
                        <img src={xIcon} alt="X"/>
                    </a>
                    <a href="#pump-fun">
                        <img src={pumpFunLogo} alt="Pump Fun"/>
                    </a>
                </div>
            </LinksContainer>
        </CommunityContainer>
    );
};

export default Community;
