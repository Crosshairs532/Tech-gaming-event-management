

const Detail_banner = ({ image, title, detail, price }) => {


    return (
        // <div style={{
        //     backgroundImage: `url(${image})`,
        //     backgroundBlendMode: 'overlay'
        // }} className=" bg-cover h-[600px]">
        // * <img className=" w-full" src={image} alt="" /> 
        // </div >
        <>
            <div className="relative md:h-[600px] h-[300px] lg:h-[600px] " >
                <div className="">
                    <p className=" absolute z-10 md:text-4xl lg:text-5xl text-center text-white top-[50%] left-[50%] -translate-x-[50%] font-poppins font-extrabold -translate-y-[50%]">{title}</p>
                    <p className=" absolute z-10 md:text-4xl lg:text-5xl text-red-200 top-[70%] left-[50%] -translate-x-[50%] -translate-y-[50%]">{price}</p>
                </div>
                <img src={image} alt="" className=" w-full md:h-[600px] h-[300px] lg:h-[600px]" />

                <div className="absolute inset-0  bg-[#111111c8] ">
                </div>
            </div >

        </>


    );
};

export default Detail_banner;