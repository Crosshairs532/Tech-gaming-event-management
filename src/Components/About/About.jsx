import tech from '../../assets/tech.jpg';
import hardware from '../../assets/hardware.jpg';
import stream from '../../assets/stream.jpg';
import { useEffect } from 'react';
import Aos from "aos";
import 'aos/dist/aos.css';
const About = () => {
    useEffect(()=>{
        Aos.init({duration:1500})
    }, [])
    return (

        <div className=' h-[100vh] container mx-auto flex justify-center'>
            <div className=' flex lg:flex-row flex-col justify-evenly items-center px-6 gap-12 '>
                <div className=" w-[50%] space-y-[60px]" >
                    <h1 className=" font-monoton font-extrabold text-[#d3d3d3] text-6xl" data-aos="fade-right" data-aos-offset="400">About Us</h1>
                    <p className=' text-white font-poppins text-justify'  data-aos="zoom-in">At EventMasters, we are passionate about bringing innovation and excitement to the world of gaming and technology. As dedicated event organizers, we specialize in curating immersive and unforgettable experiences that bridge the gap between gaming enthusiasts and tech aficionados.</p>
                </div>
                <div className=" w-1/2" data-aos="fade-left">
                    <div className=' flex justify-center'>
                        <img className=' w-[50%]' src={tech} alt="" />
                    </div>
                    <div className=' flex justify-center'>
                        <img className=' w-[50%] ' src={hardware} alt="" />
                        <img className=' w-[50%] ' src={stream} alt="" />
                    </div>
                </div>
            </div>
        </div>

    );
};

export default About;