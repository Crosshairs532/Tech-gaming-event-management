import { createContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Detail_banner from "./Detail_banner/Detail_banner";
import Aos from "aos";
import 'aos/dist/aos.css';
export const DetailContext = createContext(null);
const Details = () => {
    const [load, setLoad] = useState(null);
    useEffect(()=>{
        Aos.init({duration:1500})
    }, [])
    const { id } = useParams();
    console.log(id);
    useEffect(() => {
        fetch('/events.json')
            .then(res => res.json())
            .then(data => {
                const filtered = data.filter(i => i.id == id)
                setLoad(filtered)

            })
    }, [id])

    if (load) {
        const { id, image_url, description, related_services, price, details } = load[0]
        const rs1 = related_services[0]
        const rs2 = related_services[1]
        const rs1_title = rs1[0]
        const rs1_description = rs1[1]
        const rs2_title = rs2[0]
        const rs2_description = rs2[1]
        console.log(image_url);
        return (
            <div>


                <Detail_banner image={image_url} title={description} detail={details} price={price}></Detail_banner>


                <div>
                    <div className=" flex flex-col lg:flex-row justify-center items-center text-white gap-5 my-7 px-12 lg:px-0">
                        <div className=" space-y-6">
                            <h1 className=" md:text-3xl text-2xl lg:text-3xl font-monoton font-extrabold text-[#d85c2f] tracking-widest">Description</h1>
                            <p className=" text-[#919191] text-sm text-justify">{details}</p>

                        </div>
                        <div className=" flex flex-col gap-7 ">
                            <div className=" space-y-6">
                                <h1 className=" md:text-3xl text-2xl lg:text-3xl font-monoton font-extrabold tracking-widest">{rs1_title}</h1>
                                <p className=" text-[#919191] text-sm text-justify">{rs1_description}</p>
                            </div>
                            <div className=" space-y-6">
                                <h1 className=" md:text-3xl text-2xl lg:text-3xl font-monoton font-extrabold tracking-widest">{rs2_title}</h1>
                                <p className=" text-[#919191] text-sm text-justify">{rs2_description}</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div >
        );
    }






};

export default Details;