import { FooterWrapper } from "./FooterStyles";

const Copyright = () => {
    const currentYear = new Date().getFullYear();

    return (
        <FooterWrapper>
            <p>&copy; {currentYear} PixelGrid. All Rights Reserved.</p>
            <p>
                Built with <span>❤️</span> for the community. <br />
                Follow us on{" "}
                <a href="https://x.com/NeuroGrid1" target="_blank" rel="noopener noreferrer">
                    X
                </a>{" "}
                and{" "}
                <a href="https://t.me/+lDlEvpHhZA9mYWUy" target="_blank" rel="noopener noreferrer">
                    Telegram
                </a>
                .
            </p>
        </FooterWrapper>

    );
};

export default Copyright;
