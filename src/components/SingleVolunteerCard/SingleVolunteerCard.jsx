import { FaLocationDot } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import { Link } from "react-router-dom";

const SingleVolunteerCard = ({ volunteerCard }) => {
  const {
    _id,
    thumbnail,
    post_title,
    category,
    deadline,
    volunteers_needed,
    location,
  } = volunteerCard || {};
  return (
    <div
      
      className="mx-auto w-full hover:scale-105 hover:duration-300"
    >
      <div
      data-aos="zoom-in"
      data-aos-duration="500"
      data-aos-delay="900"
      className="w-full   overflow-hidden rounded-3xl shadow-lg  border-2 border-purple-800">
        <img
          className="object-cover object-center w-full h-56"
          src={thumbnail}
          alt="avatar"
        />

        <div className="flex items-center px-6 py-3 bg-gray-900">
          <h1 className="mx-3 text-white text-lg font-semibold ">
            Category:{" "}
            <div className="badge badge-accent badge-lg"> {category}</div>
          </h1>
        </div>

        <div className="px-6 py-4">
          <h1 className="text-xl font-semibold text-gray-800 text-left">
            <strong>Title: </strong>
            {post_title}
          </h1>
          <div className="text-error my-4 flex items-center gap-2 text-left">
            <FaLocationDot />
            <p className="text-">{location}</p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between py-4">
            <div className=" badge badge-error badge-outline">
              <SlCalender />

              <h1 className="px-2 text-sm ">
                <strong>Deadline:</strong>{" "}
                {new Date(deadline).toLocaleDateString()}
              </h1>
            </div>
            <h1 className=" text-lg font-bold">
              Needed:{" "}
              <span className="bg-green-500 rounded-full px-3 text-white">
                {volunteers_needed}
              </span>
            </h1>
          </div>
        </div>
        <div className="mb-6">
          <Link
            to={`/viewDetail/${_id}`}
            className="relative px-5 py-2 font-medium text-white group"
          >
            <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-purple-500 group-hover:bg-purple-700 group-hover:skew-x-12"></span>
            <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-purple-700 group-hover:bg-purple-500 group-hover:-skew-x-12"></span>
            <span className="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-purple-600 -rotate-12"></span>
            <span className="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-purple-400 -rotate-12"></span>
            <span className="relative">View Details</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleVolunteerCard;
