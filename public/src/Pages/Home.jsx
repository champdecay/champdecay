import Banner from '../Components/Banner';
import RecentBlog from '../Components/RecentBlog';
import Title from "../Components/Title";

export default function Home() {
    return (
        <section>
            <div className="container px-4">
                <Banner />
                <Title>Latest Articles</Title>
                <RecentBlog />
            </div>
        </section>
    )
}
