import { useEffect } from 'react';
import { gql, useQuery } from '@apollo/client';
import { useParams } from "react-router-dom";
import dayjs from "dayjs";
import advancedFormat from 'dayjs/plugin/advancedFormat'
import ReactMarkdown from 'react-markdown'

export default function Post() {
    dayjs.extend(advancedFormat)
    const { slug } = useParams();
    const GET_POST = gql`{
        post(slug:"${slug}"){
          _id, name, content, featured_image, excerpt, tags, createdAt
        }
    }`;

    const { loading, error, data } = useQuery(GET_POST, {
        onCompleted: (data) => {
            setTimeout(() => {
                document.querySelectorAll("pre").forEach(el => el.addEventListener('click', copyToClipboard))
                return () => {
                    document.querySelectorAll("pre").forEach(el => el.removeEventListener('click', copyToClipboard))
                }
            }, 500);
        }
    });

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    const copyToClipboard = (e) => {
        navigator.clipboard.writeText(e.currentTarget.querySelector("code").innerHTML)
        alert("Copied")
    }

    return (
        loading ? <div>Loading...</div> :
            <div className="wrapper pb-24">
                {data.post.featured_image ? <div className="text-gray-900">
                    <div className="container  flex px-5 py-24 md:flex-row flex-col items-center">
                        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                            <img className="object-cover object-center rounded" alt="hero" src={data.post.featured_image} width={600} height={400} />
                        </div>
                        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center max-w-screen-lg">
                            <h2 className="font-bold text-indigo-700 mb-1"><span className="uppercase">{data.post.tags.map(el => el)}</span> | {dayjs(data.post.createdAt).format("Do MMM, YYYY")}</h2>
                            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-800">{data.post.name}</h1>
                            <p className="mb-8 leading-relaxed">{data.post.excerpt}</p>
                        </div>
                    </div>
                </div> : <div className="text-gray-900">
                    <div className="container flex px-5 py-24 flex-col items-center">
                        <div className="flex flex-col items-center text-center max-w-screen-lg mx-atuo">
                            <h2 className="font-bold text-indigo-700 mb-1"><span className="uppercase">{data.post.tags.map(el => el)}</span> | {dayjs(data.post.createdAt).format("Do MMM, YYYY")}</h2>
                            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-800">{data.post.name}</h1>
                            <p className="mb-8 leading-relaxed">{data.post.excerpt}</p>
                        </div>
                    </div>
                </div>}
                <article className="container prose lg:prose-xl mx-auto px-4">
                    {data.post.content && <ReactMarkdown>{data.post.content}</ReactMarkdown>}
                </article>
            </div>
    )
}
