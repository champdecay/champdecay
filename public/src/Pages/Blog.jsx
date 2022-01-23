import Banner from '../Components/Banner';
import RecentBlog from '../Components/RecentBlog';
import Title from "../Components/Title";

export default function Blog() {
    return (
        <section>
            <div className="container mx-auto">
                <Banner />
                <Title>Latest Articles</Title>
                <RecentBlog />
            </div>
        </section>
    )
}
