// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaRocket,
  FaPaintBrush,
} from "react-icons/fa";

// import required modules
import { FreeMode, Pagination } from 'swiper';

// service data
const serviceData = [
  {
    icon: <FaHtml5 />,
    title: 'Front-end Coding',
    description: 'Crafting clean and efficient HTML, CSS, and JavaScript code for seamless user experiences.',
  },
  {
    icon: <FaCss3 />,
    title: 'Responsive Design',
    description: 'Building websites that adapt and look great on various devices, ensuring a smooth user experience.',
  },
  {
    icon: <FaJs />,
    title: 'Interactive UIs',
    description: 'Creating dynamic and interactive user interfaces using JavaScript and front-end frameworks.',
  },
  {
    icon: <FaReact />,
    title: 'React Development',
    description: 'Utilizing React to build modular and reusable components for scalable web applications.',
  },
  {
    icon: <FaRocket />,
    title: 'Performance Optimization',
    description: 'Optimizing website performance for faster loading and improved user satisfaction.',
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true
      }}
      modules={[FreeMode, Pagination]}
      className='h-[240px] sm:h-[340px]'
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className='bg-[rgba(65, 47, 123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300'>
              {/* icon */}
              <div className='text-4xl text-accent mb-4'>{item.icon}</div>
              {/* title and desc */}
              <div className='mb-8'>
                <div className='mb-2 text-lg'>{item.title}</div>
                <p className='max-w-[350px] leading-normal'>{item.description}</p>
              </div>
              {/* arrow */}
              <div className='text-3xl'>
                <FaPaintBrush className='group-hover:rotate-45 group-hover:text-accent transition-all duration-300' />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
