import Banner from '../Components/Banner';
import RecentBlog from '../Components/RecentBlog';
import Title from "../Components/Title";
import separator from '../assets/separator.png';

export default function Home() {
    return (
        <section className='max-w-3xl mx-auto px-4 mt-12 prose prose-xl'>
            <h1>Hello, I'm Dhruvang Gajjar</h1>
            <h4>A JavaScript Developer and Mentor.</h4>

            <p>I've started my career as a web developer over 6 years ago, and I've collaborated with great individuals to create digital solutions for both corporate and consumer usage. I'm quietly confident, naturally curious, and perpetually focusing on improving my skills one challenge at a time.</p>

            <img src={separator} alt="" className='my-20' />

            <h3>Work Experience</h3>

            <ul>
                <li>
                    <p>2021 - Present <br /><span>Uplers Solutions</span> <br />Senior JavScript Developer</p>
                </li>
                <li>
                    <p>2017 - 2021 <br /><span>Uplers Solutions</span> <br />jQuery Developer</p>
                </li>
                <li>
                    <p>2016 - 2017 <br /><span>Freelancer</span> <br />WordPress Developer</p>
                </li>
            </ul>

            <img src={separator} alt="" className='my-20' />

            <h3>Awards and Achievements</h3>

            <div>
                <p>M001: MongoDb Basics by mongo university</p>
                <p>JavaScript Algorithms and Data Structures by Freecodecamp</p>
                <p>Responsive Web Design by Freecodecamp</p>
                <p>Fundamentals of digital marketing by Google Digital Garage</p>
                <p>Certified HubSpot CMS Developer by HubSpot</p>
            </div>

            <img src={separator} alt="" className='my-20' />

            <h3>Skills</h3>

            <ul>
                <li>
                    <p><span className='font-semibold'>Web Technology</span> <br />JavaScript / ReactJS / NodeJS / ExpressJS / jQuery / PHP / Laravel / HTML / CSS</p>
                </li>
                <li><p><span className='font-semibold'>Database and ORMs</span> <br />MongoDB / Mongoose / MySQL / Sequalize / Firebase </p></li>
                <li>
                    <p>
                        <span className='font-semibold'>Other Platforms</span>
                        <br />Hubspot / MailChimp / Zapier / Google Analytics / Google Tag Manager / Google Maps and Many more...
                    </p>
                </li>
                <li>
                    <p><span className='font-semibold'>Non-technical</span> <br />Time Management / Problem-solving / Mentorship / Adaptability / Teamwork</p></li>
            </ul>

        </section>
    )
}
