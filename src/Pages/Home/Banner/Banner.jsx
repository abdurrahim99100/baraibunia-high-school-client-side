import "react-responsive-carousel/lib/styles/carousel.min.css";
// requires a loader
import { Carousel } from 'react-responsive-carousel';

const Banner = () => {
    return (
        <div>
            <Carousel>
                <div>
                    <img src="https://i.ibb.co/1JSDdDQ/architecture-independence-palace-ho-chi-minh-city-min.jpg" alt="" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="https://i.ibb.co/hL1wdVr/analog-landscape-city-with-buildings.jpg" alt="" />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src="https://i.ibb.co/x60pL8Q/free-time-students-bachelor-s-campus-life-rhythm-five-friendly-students-are-walking.jpg" alt="" />
                    <p className="legend">Legend 4</p>
                </div>
                <div>
                    <img src="https://i.ibb.co/tCBzFY2/vintage-landscapes-with-buildings.jpg" alt="" />
                    <p className="legend">Legend 5</p>
                </div>
                <div>
                    <img src="https://i.ibb.co/T159Vvk/happy-kids-playing-city-s-street-sunny-summer-s-day-front-modern-building-group-happy-childrens-teen.jpg" alt="" />
                    <p className="legend">Legend 6</p>
                </div>
                <div>
                    <img src="https://i.ibb.co/Y0wRP94/happy-college-students-with-books-hands-walking-together-campus.jpg" alt="" />
                    <p className="legend">Legend 6</p>
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;