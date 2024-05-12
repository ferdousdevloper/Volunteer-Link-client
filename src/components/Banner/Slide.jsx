import { Link } from 'react-router-dom'

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
          <div className='inset-0 mx-10 bg-gray-100 bg-opacity-20 backdrop-filter backdrop-blur-sm rounded-xl px-8 py-2 mt-8'>
          <span className='text-4xl md:text-6xl mb-10 text-orange-500 font-bold  '>Volunteer <span className='text-purple-800'>Link</span></span>
          </div>
        
          <h1 className='text-base font-semibold text-white md:text-xl '>
            <br />
            {text}
          </h1>
          <br />
          <Link
            to='/needVolunteer'
            className='w-full px-5 py-4 mt-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-gray-600 rounded-md lg:w-auto hover:bg-gray-500 focus:outline-none focus:bg-gray-500'
          >
            Need Volunteer? Click here
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Slide
