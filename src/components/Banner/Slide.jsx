import { Link } from 'react-router-dom'
import { Typewriter } from 'react-simple-typewriter'

const Slide = ({ image, text }) => {
  return (
    <div
      className='w-full bg-center bg-cover h-[38rem]'
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className='flex items-center justify-center w-full h-full bg-gray-900/70'>
        <div className='text-center max-w-[500px] mx-10'>
          <div
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="500"
          className='inset-0 mx-10 bg-gray-100 bg-opacity-20 backdrop-filter backdrop-blur-sm rounded-xl px-8 py-2 mt-8'>
          <span className='text-4xl md:text-6xl mb-10 text-orange-500 font-bold  '>Volunteer <br /><span className="text-purple-800 stroke-cyan-500">
                <Typewriter
            words={['Link']}
            loop={20}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            className='ml-10 '
            
          />
                </span></span>
          </div>
        
          <h1 
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="700"
          className='text-base font-semibold text-white md:text-xl '>
            <br />
            {text}
          </h1>
          <br />
          <Link
          data-aos="fade-up"
          data-aos-duration="900"
          data-aos-delay="900"
            to='/needVolunteer'
            className='btn bg-transparent w-full hover:bg-slate-700 mt-4 text-sm font-medium text-white rounded-3xl lg:w-auto border-2 focus:outline-none focus:bg-gray-500 hover:scale-105 ease-in duration-300'
          >
            Need Volunteer? <span className='text-blue-500'>Click here</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Slide
