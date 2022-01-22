import Highlight from '../Styles/Highlight'
import { gsap, ScrollTrigger } from "gsap/all";
import { useEffect } from 'react';

export default function Banner() {
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: "main",
                pin: true,
                start: "top top",
                end: "500",
                markers: true,
                scrub: 1
            }
        });

        tl.addLabel("start")
            .fromTo("h1", { css: { filter: "blur(0)" } }, { css: { filter: "blur(10px)" }, duration: 1, ease: "power2.inOut" })
        //.fromTo("h1", { opacity: 1 }, { opacity: 0, duration: 1 });
        // filter:blur(2px);
    }, []);



    return <div className="h-screen flex items-center justify-center">
        <h1 className="text-10xl">Hey,</h1>
        {/* ,<br /><Highlight>I'm ChampDecay</Highlight> */}
    </div>;
}
