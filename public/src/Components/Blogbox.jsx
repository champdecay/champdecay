import dayjs from "dayjs";
import advancedFormat from 'dayjs/plugin/advancedFormat'
import { Link } from "react-router-dom";

export default function Blogbox({ data }) {
    dayjs.extend(advancedFormat)
    const { name, tags, featured_image, excerpt, createdAt, slug } = data;
    return (
        <div className="p-4 lg:w-1/4 sm:w-1/2">
            {featured_image ?
                <div className="h-full rounded-xl overflow-hidden backdrop-blur-md bg-white/30 shadow">
                    <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={featured_image} alt="blog" width={300} height={200} />
                    <div className="p-6">
                        <h4 className="font-bold text-blue-900 mb-1 text-sm">{tags.map(el => `${el} `)} | {dayjs(createdAt).format("Do MMM, YYYY")}</h4>
                        <h2 className="title-font text-lg font-bold  mb-3">{name}</h2>
                        <p className="leading-relaxed mb-3 ">{excerpt}</p>
                        <div className="">
                            <Link to={`/blog/${slug}`} className="text-blue-900 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"
                                    fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h24"></path>
                                    <path d="M12 5l7 7-7 7"></path>
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div> :
                <div className="h-full px-8 pt-16 pb-24 rounded-xl overflow-hidden text-center relative flex flex-col items-center justify-center backdrop-blur-md bg-white/30 shadow">
                    <h4 className="tracking-widest font-bold text-blue-900 mb-1 text-sm">{tags.map(el => `${el} `)} | {dayjs(createdAt).format("Do MMM, YYYY")}</h4>
                    <h2 className="title-font sm:text-2xl text-xl font-bold  mb-3">{name}</h2>
                    <p className="leading-relaxed  mb-3">{excerpt}</p>
                    <Link to={`/blog/${slug}`} className="text-blue-900 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"
                            fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h24"></path>
                            <path d="M12 5l7 7-7 7"></path>
                        </svg>
                    </Link>
                </div>
            }
        </div>
    )
}
