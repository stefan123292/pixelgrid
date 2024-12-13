import { roadmapData } from "./data";
import {RoadmapStyles} from "./RoadMapStyles";
import wagImg from "../../assets/images/el.png"
import {useEffect, useRef} from "react";
import { gsap } from "gsap";

const RoadMap = () => {
    const roadmapRefs = useRef([]);

    useEffect(() => {
        gsap.fromTo(
            roadmapRefs.current,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1, stagger: 0.3, ease: "power2.out" }
        );
    }, []);
    return (
        <RoadmapStyles>
            <h1>PixelGrid Roadmap</h1>
            <div className="roadmap-container">
                {roadmapData.map((item, index) => (
                    <div className="roadmap-item" key={index}>
                        <h2>{item.phase}</h2>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>
            <img src={wagImg} alt="wen"/>
        </RoadmapStyles>
    );
};

export default RoadMap;
