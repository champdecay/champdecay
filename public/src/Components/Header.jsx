import { Link, NavLink } from "react-router-dom";

export default function Header() {
    return <>
        <header class="body-font bg-gray-100 w-full">
            <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                {/* <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24" style={{ backgroundImage: "linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12)" }}>
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                    </svg>
                    <span className="ml-3 text-2xl">Dhruvang</span>
                </a> */}
                <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                    <NavLink className={({ isActive }) => isActive ? 'mr-5 text-black' : 'mr-5 text-gray-500'} to="/">Home</NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'mr-5 text-black' : 'mr-5 text-gray-500'} to="/blog">Blog</NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'mr-5 text-black' : 'mr-5 text-gray-500'} to="https://drive.google.com/file/d/1JqX1lxDO6vEObWCgiaFd_1hvimfJvRkt/view">Resume</NavLink>
                </nav>
            </div>
        </header>
        {/* <header className="text-gray-600 body-font w-full fixed top-0 left-0 z-10 backdrop-blur-md bg-white/30">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24" style={{ backgroundImage: "linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12)" }}>
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                    </svg>
                    <span className="ml-3 text-2xl">Dhruvang</span>
                </a>
                <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
                    <NavLink className={({isActive}) => isActive ? 'mr-5 text-gray-500' : 'mr-5 text-black'} to="/">Home</NavLink>
                    <NavLink className={({isActive}) => isActive ? 'mr-5 text-gray-500' : 'mr-5 text-black'} to="/blog">Blog</NavLink>
                </nav>
                <a href="https://drive.google.com/file/d/1JqX1lxDO6vEObWCgiaFd_1hvimfJvRkt/view" target="_blank" className="inline-flex items-center bg-indigo-500 border-0 py-2 px-4 focus:outline-none rounded text-white mt-4 md:mt-0" style={{ backgroundImage: "linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12)" }}>Resume &nbsp;
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                </a>
            </div>
        </header> */}
    </>;
}
