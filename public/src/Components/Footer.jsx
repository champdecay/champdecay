import Highlight from "../Styles/Highlight";
import separator from '../assets/separator.png';

export default function Footer() {
    return (
        <>
            {/* <img src={separator} alt="" className='mt-32 text-center mx-auto' /> */}
            <footer className="flex items-center h-96">
                <div className="mx-4 max-w-1/2 mx-auto sm:w-full sm:px-4 sm:text-center">
                    <h2 className="my-4 text-xl sm:text-3xl"><a href="mailto:champdecay@gmail.com"><Highlight>dhruvangg@gmail.com</Highlight></a></h2>
                    <p>Always down to collaborate when I have the time. Let's get in touch ✌️.</p>
                    <ul className="flex items-center my-4 sm:justify-center">
                        <li><a href="https://stackoverflow.com/users/7738692/dhruvang-gajjar" className="p-2 block mr-4"><svg className="fill-blue-900" width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="#000" viewBox="0 0 384 512" stroke="#000">
                            <path d="M290.7 311L95 269.7 86.8 309l195.7 41zm51-87L188.2 95.7l-25.5 30.8 153.5 128.3zm-31.2 39.7L129.2 179l-16.7 36.5L293.7 300zM262 32l-32 24 119.3 160.3 32-24zm20.5 328h-200v39.7h200zm39.7 80H42.7V320h-40v160h359.5V320h-40z"></path>
                        </svg></a></li>
                        <li><a href="https://github.com/dhruvangg" className="p-2 block mr-4"><svg className="fill-blue-900" width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 496 512" stroke="#000">
                            <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                        </svg></a></li>
                        <li><a href="https://dev.to/dhruvangg"><svg className="fill-blue-900" width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 496 512" stroke="#000">
                            <path d="M120.12 208.29c-3.88-2.9-7.77-4.35-11.65-4.35H91.03v104.47h17.45c3.88 0 7.77-1.45 11.65-4.35 3.88-2.9 5.82-7.25 5.82-13.06v-69.65c-.01-5.8-1.96-10.16-5.83-13.06zM404.1 32H43.9C19.7 32 .06 51.59 0 75.8v360.4C.06 460.41 19.7 480 43.9 480h360.2c24.21 0 43.84-19.59 43.9-43.8V75.8c-.06-24.21-19.7-43.8-43.9-43.8zM154.2 291.19c0 18.81-11.61 47.31-48.36 47.25h-46.4V172.98h47.38c35.44 0 47.36 28.46 47.37 47.28l.01 70.93zm100.68-88.66H201.6v38.42h32.57v29.57H201.6v38.41h53.29v29.57h-62.18c-11.16.29-20.44-8.53-20.72-19.69V193.7c-.27-11.15 8.56-20.41 19.71-20.69h63.19l-.01 29.52zm103.64 115.29c-13.2 30.75-36.85 24.63-47.44 0l-38.53-144.8h32.57l29.71 113.72 29.57-113.72h32.58l-38.46 144.8z"></path>
                        </svg></a></li>
                    </ul>
                    <p className="">Copyright © ChampDecay 2022</p>
                </div>
                <div className="hidden fixed bg-black bg-opacity-50 w-screen h-screen top-0 left-0 z-10 flex justify-center items-center">
                    <form id="contact" className="w-96 rounded-xl overflow-hidden bg-gradient-to-r from-purple-50 to-purple-100 p-10" data-hs-cf-bound="true">
                        <h3 className="text-center mb-4 text-2xl">Get in Touch</h3>
                        <div className="mb-4"><input type="text" name="name" placeholder="Your Name" className="flex border border-transparent w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-md rounded-lg text-base focus:outline-none" required="" /></div>
                        <div className="mb-4"><input type="email" name="email" placeholder="Your Email" className="flex border border-transparent w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-md rounded-lg text-base focus:outline-none" required="" /></div>
                        <div className="mb-4"><textarea name="message" placeholder="Your Message" className="flex border border-transparent w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-md rounded-lg text-base resize-none focus:outline-none" required=""></textarea></div><button className="bg-yellow-400 w-full text-white text-base font-semibold py-2 px-4 rounded-lg shadow-md focus:outline-none">Send Message</button>
                    </form>
                </div>
            </footer>
        </>
    )
}
