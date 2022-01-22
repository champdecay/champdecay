import { gql, useQuery } from '@apollo/client';
import Banner from '../Components/Banner';
import Blogbox from "../Components/Blogbox";
import Title from "../Components/Title";

export default function Blog() {
    const GET_POSTS = gql`query {
        posts(limit: 4){ _id, name, slug, featured_image, excerpt, tags, createdAt }
    }`;

    const { loading, error, data } = useQuery(GET_POSTS);

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    console.log(data);
    return (
        <section>
            <div className="container mx-auto py-5 text-center">
                <Banner />
                <Title>Latest Articles</Title>
                <div className="flex flex-wrap my-4 justify-center">
                    {data && data.posts.map((item, i) => {
                        return <Blogbox key={item._id} data={item} />
                    })}
                </div>
            </div>
        </section>
    )
}
