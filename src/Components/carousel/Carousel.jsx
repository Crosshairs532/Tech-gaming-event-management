import { Navigation, Pagination, Scrollbar, A11y, FreeMode } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
// import img1 from '../../assets/pexels-george-dolgikh-2072175.jpg';
const Carousel = () => {
    return (
        <div>
            <Swiper
                autoplay={true} // Enable autoplay
                modules={[FreeMode]}
                spaceBetween={20}
                slidesPerView={3}
                FreeMode={{ enabled: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide><img src={img1} alt="" /></SwiperSlide>
                <SwiperSlide><img src={img1} alt="" /></SwiperSlide>
                <SwiperSlide><img src={img1} alt="" /></SwiperSlide>
                <SwiperSlide><img src={img1} alt="" /></SwiperSlide>
                {/* Add more slides as needed */}
            </Swiper>


        </div >
    );
};

export default Carousel;



