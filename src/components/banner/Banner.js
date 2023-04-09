import banner1 from '../banner/banner11.jpg'
import banner2 from '../banner/banner13.jpg'
import banner3 from '../banner/banner3.jpeg'
import '../banner/banner.css';
import { Link ,useLocation } from "react-router-dom";



const Banner = () => {

    const location = useLocation();

    const category = location.search?.split('=')[1] || '';

    return (
        <>
            <div id="carouselExampleCaptions" className="carousel slide carousel-fade ">
                <div className="carousel-indicators ">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner banneritem ">
                    <div className="carousel-item banneritem active">
                    <img src={banner1} className="d-block w-100 bannerimg" alt="..."/>
                    <div className="carousel-caption d-none d-md-block textitem">
                        <h2>Bloggers-NoteBook</h2>
                            <p>Some representative placeholder content for the first slide.</p>
                            <Link to={`/create?category=${category || ''}`}>
                                <button type="button" class="btn btn-dark">Create Blog</button>
                            </Link>
                            
                    </div>
                    </div>
                    <div className="carousel-item banneritem">
                    <img src={banner2} className="d-block w-100 bannerimg" alt="..."/>
                    <div className="carousel-caption d-none d-md-block textitem">
                        <h2>Second slide label</h2>
                        <p>Some representative placeholder content for the second slide.</p>
                    </div>
                    </div>
                    <div className="carousel-item banneritem">
                    <img src={banner3} className="d-block w-100 bannerimg" alt="..."/>
                    <div className="carousel-caption d-none d-md-block textitem">
                        <h2>Third slide label</h2>
                        <p>Some representative placeholder content for the third slide.</p>
                    </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}

export default Banner;