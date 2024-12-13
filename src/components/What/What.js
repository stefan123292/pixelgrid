import {GalaxyWenWrapper} from "./WhatStyles";
import telegramIcon from "../../assets/images/telegram.png";
import xIcon from "../../assets/images/twitter.png";
import pumpFunLogo from "../../assets/images/pump.png";

const GalaxyWenInfo = () => {
    return (
        <GalaxyWenWrapper>
            {/* What is PixelGrid */}
            <h1 className="section-title">What is PixelGrid?</h1>
            <p className="content">
                PixelGrid isn’t just a meme token—it’s a gateway to the future of AI and blockchain.
                Built on the concept of neural networks and inspired by the precision of digital pixels, PixelGrid connects humans and technology in a dynamic, decentralized ecosystem.
                Why chase fleeting trends when you can be part of building a smarter, AI-powered future—one connection, one pixel, one block at a time?
            </p>

            {/* Call to Action Buttons */}
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
        </GalaxyWenWrapper>
    );
};

export default GalaxyWenInfo;
