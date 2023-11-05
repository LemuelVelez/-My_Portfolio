// testimonial slider data
export const testimonialSlider = [
  {
    image: '/t-avt-1.png',
    name: 'Anne Smith',
    position: 'Customer',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
  },
  {
    image: '/t-avt-2.png',
    name: 'Jane Doe',
    position: 'Customer',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
  },
  {
    image: '/t-avt-3.png',
    name: 'Jhon Doe',
    position: 'Customer',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
  },
];

// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import require modules
import { Pagination } from 'swiper';

// icons
import { BsArrowRight } from 'react-icons/bs';

// next image
import Image from 'next/image';

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true
      }}
      modules={[Pagination]}
      className='h-[280px] sm:h-[500px]'
    >
      {testimonialSlider.slides.map((person, index) => {
        return (
          <SwiperSlide key={index}>
            <div>
              {/* avatar,name, position */}
              <div>
                <div>
                  {/* avatar */}
                  <div>avatar image</div>
                  {/* name */}
                  <div>name</div>
                  {/* position */}
                  <div>position</div>
                </div>
              </div>
              {/* quote & message */}
              <div>quote & message</div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;

