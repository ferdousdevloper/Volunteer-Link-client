// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import Slide from './Slide'



import bgimg1 from '../../assets/carousel1.jpg'
import bgimg2 from '../../assets/carousel2.jpg'
import bgimg3 from '../../assets/carousel3.jpg'
import bgimg4 from '../../assets/carousel4.jpg'

export default function Banner() {
  return (
    <div className=''>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className='mySwiper'
      >
        <SwiperSlide>
          <Slide
            image={bgimg1}
            text='Healthcare Volunteer" connects passionate individuals with opportunities to assist in medical settings. Join us to make a meaningful impact in healthcare.'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={bgimg2}
            text='Education Volunteer" connects passionate individuals with opportunities to support learning. Join us to inspire minds and make a difference in education globally.'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={bgimg3}
            text='Social Service Volunteer" links caring individuals with opportunities to serve communities in need. Join us to make a positive impact, support those facing challenges, and foster a better society together.'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={bgimg4}
            text='Animal Welfare Volunteer" connects animal lovers with opportunities to support and care for animals in need. Join us to make a difference, advocate for animal rights, and provide love and compassion to furry friends.'
          />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
