import Posts from "./post/Posts.js";


//components
import Banner from "../banner/Banner.js";


const Home = () => {
    return (
        <>
            <Banner />
            <div className="container my-4">
                <div className="row">
                    <div className="col">
                        <Posts/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;