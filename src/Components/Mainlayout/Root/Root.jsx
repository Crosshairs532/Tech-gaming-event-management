import { Outlet, useLocation } from "react-router-dom";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import { useContext, useEffect } from "react";
import { socialContext } from "../../../AuthProvider/Authprovider";
import header_chr1 from '../../../assets/header_chr1.png';
import './Root.css'
import Aos from "aos";
import 'aos/dist/aos.css';
const Root = () => {
    useEffect(()=>{
        Aos.init({duration:1500})
    }, [])
    const { loader } = useContext(socialContext);
    console.log(loader);
    const location = useLocation();
    console.log(location.pathname);
    return (
        <div className=" bg-black">
            {/* <div className=" container mx-auto"> */}
            <div className={location.pathname == '/' ? " header h-[100vh]" : ''}>
                <Header></Header>
                {
                    location.pathname == '/' ?


                        <>
                            <div className=" flex justify-evenly items-center container mx-auto pt-[10%]">
                                <div data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" className=" hidden  lg:block md:block w-[400px]">
                                    <img src={header_chr1} alt="" />
                                </div>
                                <div className=" flex justify-center items-center flex-col space-y-9 ">
                                    <h1 className="  md:text-3xl text-2xl lg:text-5xl text-center font-monoton font-bold text-[#d2d2d2] leading-snug" data-aos="fade-left" 
     data-aos-easing="linear"
     data-aos-duration="1500">  Tech Enthusiasts and Gamers Unite <br />- It's Time for Revolution</h1>
                                    <button className=" p-4 rounded-lg text-lg font-poppins bg-[coral] text-white"> Get Started</button>
                                </div>
                            </div>
                        </> : ""
                }
            </div>
            <div className=" min-h-screen ">

                <div className="container mx-auto">
                        <Outlet></Outlet>
                    </div>
            
            </div>



            <Footer></Footer>

        </div>
    );
};

export default Root;

// {
//     loader ? <div className=" mx-auto  border-2">

//         <Dna className='text-center'
//             visible={true}
//             height="100"
//             width="100"
//             ariaLabel="dna-loading"
//             wrapperStyle={{}}
//             wrapperClass="dna-wrapper"
//         />
//     </div> :