import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Banner = () => {
    return (
        <Carousel>
            <div>
                <img className="" src="https://i.ibb.co/W2w8BVg/baraibunia-highschool-banner4.jpg" />
                <p className="legend">Legend 1</p>
            </div>
            <div>
                <img src="https://i.ibb.co/mvqcn2Q/baraibunia-highschool-banner6.jpg" />
                <p className="legend">Legend 2</p>
            </div>
            <div>
                <img src="https://i.ibb.co/phhctT7/baraibunia-highschool-banner5.jpg" />
                <p className="legend">Legend 3</p>
            </div>
            <div>
                <img src="https://i.ibb.co/yPcxLnM/baraibunia-highschool-banner3.jpg" />
                <p className="legend">Legend 4</p>
            </div>
            <div>
                <img src="https://i.ibb.co/4R4wSmt/free-time-students-bachelor-s-campus-life-rhythm-five-friendly-students-are-walking.jpg" />
                <p className="legend">Legend 5</p>
            </div>
            <div>
                <img src="https://i.ibb.co/hfHcHxp/baraibunia-highschool-banner2.jpg" />
                <p className="legend">Legend 6</p>
            </div>
        </Carousel>
    );
};

export default Banner;