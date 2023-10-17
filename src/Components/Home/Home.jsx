
import { useLocation } from "react-router-dom";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Service_slider from "../Slider/Service_slider";
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";
const Home = () => {
    useEffect(()=>{
        Aos.init({duration:1500})
    }, [])
    
    // const location = useLocation();
    return (
        <div>
            <div className="">
                <Service_slider></Service_slider>
                <div className=" bg-gradient-to-tr from-[#141E46] to-[#040611] "data-aos="fade-up">
                    <About></About>
                </div>

                <div className=" bg-gradient-to-br from-[#141e46] to-[#040611]">
                    <Contact></Contact>
                </div>
            </div>

        </div>
    );
};

export default Home;
