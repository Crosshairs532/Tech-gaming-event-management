import { useEffect, useState } from "react";

import Aos from "aos";
import 'aos/dist/aos.css';
const Contact = () => {
    const [textareaValue, setTextareaValue] = useState(' write something here...');

    const handleChange = (event) => {
        setTextareaValue(event.target.value);
    };
    useEffect(()=>{
        Aos.init({duration:2000})
    }, [])
   

    return (

        <div>
            <div>
                <div className="" id='contact'  data-aos-offset="400">
                    <div className="flex lg:flex-row item-center justify-evenly flex-col w-[400px] lg:w-[900px] mx-auto" >
                        <div className=" my-7 flex items-center" data-aos="zoom-out-right">
                            <div className="mockup-phone hidden lg:block md:block border-[coral]">
                                <div className="camera -z-50"></div>
                                <div className="display ">
                                    <div className="artboard artboard-demo phone-1 text-center font-pacifico text-xl">you are no longer far way from <br />getting connected to us.</div>
                                </div>
                            </div>
                        </div>
                        <div className=" flex flex-col justify-center space-y-7" data-aos="zoom-out-left">
                            <h1 className="text-5xl font-monoton text-[#d3d3d3]">Get In Touch</h1>
                            <input className=" border-b-2 border-b-slate-100 bg-transparent  w-full text-gray-700 mr-3 py-1 px-2  focus:outline-none" type="email" placeholder=" your email here....." name="email" />
                            <textarea onChange={handleChange} value={textareaValue} className=" bg-transparent border border-b-slate-100 focus:outline-none text-gray-700" cols="30" rows="10"> </textarea>
                            <button className=" p-6 rounded-lg bg-[coral]">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>

        </div >
    );
};

export default Contact;