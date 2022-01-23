import Highlight from '../Styles/Highlight'
import { gsap, ScrollTrigger } from "gsap/all";
import { useEffect } from 'react';

export default function Banner() {
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: "main",
                start: "top top",
                end: "300",
                scrub: 1
            }
        });

        tl.addLabel("start")
            .fromTo("#greet", { css: { filter: "blur(0px)", transform: "translate3D(0, 0, 0)" } }, { css: { filter: "blur(20px)", transform: "translate3D(0, -200px, 0)" }, duration: 2, ease: "none" })
            .fromTo("#IntroContent", { y: 200 }, { y: 0, duration: 0.5 })

    }, []);



    return <>
        <section className='container'>
            <h1 className="text-10xl min-h-screen flex items-center justify-center" id="greet">Hey,</h1>
            <div class="grid grid-cols-5 gap-8 pb-48" id="IntroContent">
                <div class="col-span-1 text-right">
                    <h3 className="text-3xl pt-5">Intro</h3>
                </div>
                <div class="col-span-4 text-left">
                    <h3 className="text-7xl font-bold leading-tight"><Highlight>I'm ChampDecay, a JavaScript Developer focusing on web solutions and purposeful experiences for tomorrow's brands.</Highlight></h3>
                </div>
            </div>
        </section>
        {/* <section className='container'>
            <h1 className="text-10xl min-h-screen flex items-center justify-center" id="greet">Hey,</h1>
        </section>
        <section className='container' id="intro">
            <div class="grid grid-cols-5 gap-8 min-h-screen">
                <div class="col-span-1 text-right">
                    <h3 className="text-3xl pt-5">Intro</h3>
                </div>
                <div class="col-span-4 text-left">
                    <h3 className="text-7xl font-bold leading-tight" id="IntroContent"><Highlight>I'm ChampDecay, a freelance digital designer focused on creating digital solutions and purposeful experiences for tomorrow’s brands.</Highlight></h3>
                </div>
            </div>
        </section> */}
    </>
}
