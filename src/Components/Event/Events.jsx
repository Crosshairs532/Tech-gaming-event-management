import { useContext, useEffect, useState } from "react";
import Each_event from "../each_event/Each_event";
import Aos from "aos";
import 'aos/dist/aos.css';
import { socialContext } from "../../AuthProvider/Authprovider";
import { useLocation } from "react-router-dom";
const Events = () => {
    const [load, setLoad] = useState(null)
    
    const {user, loader} = useContext(socialContext)
    console.log(user);
    useEffect(()=>{
        Aos.init({duration:1500})
    }, [])
    useEffect(() => {
        fetch('/Events_handled.json')
            .then(res => res.json())
            .then(data => {setLoad(data);})


    }, [])

    return (
        

    
            <div className=" flex flex-col items-center gap-4" data-aos="fade-up">
            {
                load?.map((i, idx) => <Each_event key={idx} i={i}></Each_event>)
            }

        </div>
        
        

    );
};

export default Events;
