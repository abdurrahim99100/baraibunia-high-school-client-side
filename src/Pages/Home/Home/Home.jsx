import { useEffect } from "react";
import Banner from "../Banner/Banner";
import PopularClass from "../PopularClass/PopularClass";

const Home = () => {

    useEffect(() => {
        fetch('/class')
    }, []);

    return (
        <div>
            <Banner />
            <PopularClass />
        </div>
    );
};

export default Home;