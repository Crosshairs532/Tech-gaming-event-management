import React, { useEffect } from 'react';
import { AiOutlineArrowDown, AiFillPhone } from 'react-icons/ai';
import Aos from "aos";
import 'aos/dist/aos.css';
const Discount = () => {

    useEffect(()=>{
        Aos.init({duration:2000})
    }, [])
    return (
        <div className=' min-h-screen flex flex-col  justify-center items-center' data-aos="zoom-out" data-aos-offset='500'>
            <div className="  text-white bg-transparent text-7xl  drop-shadow-2xl animate-bounce">
                <AiOutlineArrowDown className=' bg-none'></AiOutlineArrowDown>

            </div>
            <h1 className=' md:text-5xl text-4xl lg:text-6xl font-poppins font-extrabold text-[coral]'> Special Discount   !!</h1>
            <div className=' space-y-4'>
                <h1 className=' text-[grey] text-xl'> Offer available till december 24</h1>
                <button className='btn bg-transparent text-white'><AiFillPhone className=' text-xl'></AiFillPhone>  Contact us for more details</button>
            </div>
        </div>
    );
};

export default Discount;