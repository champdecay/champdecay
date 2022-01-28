import { gql, useQuery } from '@apollo/client';
import Blogbox from "../Components/Blogbox";
import Title from '../Components/Title';

export default function Blog() {
    const GET_POSTS = gql`query {
        posts{ _id, name, slug, featured_image, excerpt, tags, createdAt }
    }`;

    const { loading, error, data } = useQuery(GET_POSTS);

    return (
        <section>
            <div className="container px-4 mt-24">
                <Title>Blogs</Title>
                <div className="flex flex-wrap my-4 justify-center">
                    {loading && <p>Loading...</p>}
                    {error && <p>Error! ${error.message}</p>}
                    {data && data.posts.map((item, i) => {
                        return <Blogbox key={item._id} data={item} />
                    })}
                </div>
            </div>
        </section>
    );
}
