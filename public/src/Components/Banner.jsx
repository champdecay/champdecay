import Highlight from '../Styles/Highlight'
import { gsap, ScrollTrigger } from "gsap/all";
import { useEffect } from 'react';
import Title from './Title';

export default function Banner() {
    gsap.registerPlugin(ScrollTrigger);

    // useEffect(() => {

    //     let tl = gsap.timeline({
    //         scrollTrigger: {
    //             trigger: "main",
    //             start: "top top",
    //             end: "300",
    //             scrub: 1
    //         }
    //     });

    //     tl.addLabel("start")
    //         .fromTo("#greet", { css: { filter: "blur(0px)", transform: "translate3D(0, 0, 0)" } }, { css: { filter: "blur(20px)", transform: "translate3D(0, -200px, 0)" }, duration: 2, ease: "none" })
    //         .fromTo("#IntroContent", { y: 200 }, { y: 0, duration: 0.5 })

    // }, []);



    return (
        <>
            <section id="banner" className="min-h-screen">
                <h1 className="text-9xl lg:text-10xl min-h-screen flex items-center justify-center">Hello 👋,</h1>
            </section>
            <section id="intro" className="py-12">
                <div className="grid grid-cols-1 gap-8 pb-48 lg:grid-cols-5" id="IntroContent">
                    <div className="col-span-1 lg:text-right text-center hidden lg:block">
                        <h3 className="text-3xl pt-5"><Title>Intro</Title></h3>
                    </div>
                    <div className="lg:col-span-4 text-left">
                        <h4 className="text-5xl xl:text-7xl font-bold leading-tight text-center lg:text-left"><Highlight>I'm ChampDecay, a JavaScript Developer focusing on web solutions and purposeful experiences for tomorrow's brands.</Highlight></h4>
                    </div>
                </div>
            </section>
            <section id="about" className="py-12">
                <div className="grid grid-cols-1 gap-8 pb-48 lg:grid-cols-5" id="IntroContent">
                    <div className="col-span-1 lg:text-right text-center">
                        <h3 className="text-xl lg:text-3xl pt-5"><Title>About</Title></h3>
                    </div>
                    <div className="lg:col-span-3 text-left">
                        <p className="text-3xl leading-tight text-center lg:text-left">
                            I love to work on a variety of projects that emotionally connect. After many years in the design industry, I know what's needed to make online products and experiences feasible, usable and beautiful. My work focuses on creating holistic digital experiences that people fall in love with. I currently live in Utrecht, The Netherlands and connect globally with teams & brands to create digital excellence. Do you have a project in mind? I am always on the lookout for interesting collaborations!
                        </p>
                    </div>
                </div>
            </section>
            <section id="skills" className="py-12">
                <div className="grid grid-cols-1 gap-8 pb-48 lg:grid-cols-5" id="IntroContent">
                    <div className="col-span-1 lg:text-right text-center">
                        <h3 className="text-xl lg:text-3xl pt-5"><Title>Skills</Title></h3>
                    </div>
                    <div className="lg:col-span-4 text-left">
                        <ul className="text-xl lg:text-3xl leading-tight text-center lg:text-left flex flex-wrap mb-4">
                            <li className="p-2 after:content-['•'] after:ml-3 after:text-secondary">JavaScript</li>
                            <li className="p-2 after:content-['•'] after:ml-3 after:text-secondary">Node.JS</li>
                            <li className="p-2 after:content-['•'] after:ml-3 after:text-secondary">Socket IO</li>
                            <li className="p-2 after:content-['•'] after:ml-3 after:text-secondary">ReactJS</li>
                            <li className="p-2 after:content-['•'] after:ml-3 after:text-secondary">REST</li>
                            <li className="p-2 after:content-['•'] after:ml-3 after:text-secondary">Redux</li>
                            <li className="p-2 after:content-['•'] after:ml-3 after:text-secondary">GraphQL</li>
                            <li className="p-2 after:content-['•'] after:ml-3 after:text-secondary">Mongo</li>
                            <li className="p-2 after:content-['•'] after:ml-3 after:text-secondary">MySQL</li>
                            <li className="p-2 after:content-['•'] after:ml-3 after:text-secondary">Mongoose</li>
                            <li className="p-2 after:content-['•'] after:ml-3 after:text-secondary">Sequelize</li>
                            <li className="p-2 after:content-['•'] after:ml-3 after:text-secondary">Git</li>
                            <li className="p-2">GitHub</li>
                        </ul>
                        <ul className="text-xl lg:text-3xl leading-tight text-center lg:text-left flex flex-wrap mb-4">
                            <li className="p-2 after:content-['•'] after:ml-3 after:text-secondary">jQuery</li>
                            <li className="p-2 after:content-['•'] after:ml-3 after:text-secondary">HubSpot</li>
                            <li className="p-2 after:content-['•'] after:ml-3 after:text-secondary">PHP</li>
                            <li className="p-2 after:content-['•'] after:ml-3 after:text-secondary">RWD</li>
                            <li className="p-2 after:content-['•'] after:ml-3 after:text-secondary">Tailwind</li>
                            <li className="p-2 after:content-['•'] after:ml-3 after:text-secondary">HTML</li>
                            <li className="p-2">CSS</li>
                        </ul>
                        <ul className="text-xl lg:text-3xl leading-tight text-center lg:text-left flex flex-wrap mb-4">
                            <li className="p-2 after:content-['•'] after:ml-3 after:text-secondary">Time Management</li>
                            <li className="p-2 after:content-['•'] after:ml-3 after:text-secondary">Problem-solving</li>
                            <li className="p-2 after:content-['•'] after:ml-3 after:text-secondary">Mentorship</li>
                            <li className="p-2 after:content-['•'] after:ml-3 after:text-secondary">Adaptability</li>
                            <li className="p-2">Teamwork</li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
        // <section className="px-4">
        //     <h1 className="text-9xl lg:text-10xl min-h-screen flex items-center justify-center" id="greet">Hey,</h1>
        //     <div className="grid grid-cols-1 gap-8 pb-48 lg:grid-cols-5" id="IntroContent">
        //         <div className="col-span-1 lg:text-right text-center">
        //             <h3 className="text-3xl pt-5">Intro</h3>
        //         </div>
        //         <div className="lg:col-span-4 text-left">
        //             <h3 className="text-3xl lg:text-5xl xl:text-7xl font-bold leading-tight w-3/5 lg:w-full mx-auto text-center lg:text-left"><Highlight>I'm ChampDecay, a JavaScript Developer focusing on web solutions and purposeful experiences for tomorrow's brands.</Highlight></h3>
        //         </div>
        //     </div>
        // </section>
    )
}
