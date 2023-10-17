// import { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import Service from "../Service/Service";
import Aos from "aos";
import 'aos/dist/aos.css';
const Service_slider = () => {
    const [arr, setArray] = useState(null)
    useEffect(()=>{
        Aos.init({duration:1500})
    }, [])
    useEffect(() => {
        fetch('/events.json')
            .then(res => res.json())
            .then(data => setArray(data))

    }, [])
    console.log(arr)

    // const settings = {
    //     dots: true,
    //     infinite: true,
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     speed: 2000,
    //     autoplaySpeed: 3000,
    //     cssEase: "linear"
    // };
    return (
        <div className=" container mx-auto  my-14 space-y-16" id='our-service' data-aos="fade-up">
            < h1 className=" text-6xl font-monoton text-[#d3d3d3] font-extrabold text-center mb-8" > Our Services</h1 >

            <div>
                <div className=" grid lg:grid-cols-3 mg:grid-cols-2 grid-cols-1 gap-3 place-items-center">
                    {arr?.map(service => (
                        <Service key={service.id} service={service}></Service>
                    ))}


                </div>
            </div>
        </div >
    );
}
export default Service_slider;
{/* <div className=" h-[400px] border-2">
<img className=" object-fill" src={img1} alt="" />
</div>
<div className=" h-[400px] border-2">
<img src={img2} alt="" />
</div>

<div className=" h-[400px] border-2">
<img src={img2} alt="" />
</div>

<div className=" h-[400px] border-2">
<img src={img2} alt="" />
</div> */}