
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { id, description, image_url, related_services, price, details } = service

    return (
        <div>

            <div className=" flex flex-col p-3 rounded-lg  w-96 h-[450px] justify-between bg-transparent hover:bg-[#eae8e8] hover:shadow-2xl duration-500 hover:text-black text-[#cecdcd] hover:shadow-white border-2">

                <div>
                    <figure> <img className=' w-full h-[200px] rounded-lg' src={image_url} alt="Shoes" /></figure>
                </div>

                <div className="flex flex-col justify-evenly space-y-3">
                    <h2 className="card-title flex-1">{description}</h2>
                    {/* {details.length > 200 ? < p >{details.slice(0, 150)}.. <Link to={`/service/${id}`} className=' text-xl font-bold'>Read more</Link></p> : <p> {details}</p>} */}

                    <div className="card-actions justify-between ">
                        <button className=" border-2 border-blue-950 hover:bg-[#141E46] duration-500 outline-none p-3 rounded-lg ">{`${price}`}</button>
                        <Link to={`/service/${id}`}> <button className=" rounded-lg p-4 font-poppins font-bold text-xl bg-[coral]">Details</button></Link>
                    </div>


                </div>

            </div>
        </div >
    );
};

export default Service;
Service.propTypes = {
    service: PropTypes.object.isRequired
}
