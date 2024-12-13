import { useEffect, useState } from 'react';
import {Header, Logo, LogoLink, Container, Home} from './NavbarStyles';
import NavMobile from './NavMobile/NavMobile';
import NavDesktop from './NavDesktop/NavDesktop';
import wagImg from "../../assets/images/el.png"; // Path to your logo image

const Navbar = ({ pathName, activePlanet, onHover }) => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const tabletBreakpoint = 768;

    useEffect(() => {
        window.addEventListener('resize', () =>
            setWindowWidth(window.innerWidth)
        );
    }, [windowWidth]);

    const containerVariants = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: { delay: 1.5, duration: 4 },
        },
        exit: {
            opacity: 0,
            transition: { duration: 1 },
        },
    };

    return (
        <Header
            variants={containerVariants}
            initial={{ opacity: 0, y: -20 }} // Start slightly above and invisible
            animate={{ opacity: 1, y: 0 }}  // Animate to visible position
            transition={{ duration: 1, ease: "easeOut" }} // Adjust speed and easing
            exit="exit"
        >
            <Container>
                <Logo>
                    <LogoLink to="/">
                        <Home>
                            <img src={wagImg} alt="Wag Logo"/>
                            <p style={{ marginLeft: '15px'}}>PixelGrid</p>
                        </Home>
                    </LogoLink>
                </Logo>
                {windowWidth >= tabletBreakpoint ? (
                    <NavDesktop
                        pathName={pathName}
                        onHover={onHover}
                        activePlanet={activePlanet}
                    />
                ) : (
                    <NavMobile windowWidth={windowWidth} />
                )}
            </Container>
        </Header>
    );
};

export default Navbar;
