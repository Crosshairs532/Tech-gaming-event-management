import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";
const Each_event = ({ i }) => {
    // console.log(i);
    const { eventName, date, location, img, description } = i
    useEffect(()=>{
        Aos.init({duration:1000})
    }, [])
    return (
        <div>
            <div className="hero -z-50 h-[100vh] bg-white shadow-2xl scale-75 md:hover:shadow-[coral] lg:hover:shadow-[coral] rounded-3xl duration-500">
                <div className="hero-content flex-col lg:flex-row-reverse"  data-aos='fade-up'>
                    <div className=" w-1/2">
                        <img data-aos='fade-left' className=" w-full rounded-2xl" src={img} />
                    </div>
                    <div className=" w-1/2" data-aos='fade-right'> 
                        <h1 className=" md:text-4xl text-3xl lg:text-5xl font-bold">{eventName}</h1>
                        <p className="py-6 text-justify text-lg lg:text-xl font-poppins">{description} </p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Each_event;