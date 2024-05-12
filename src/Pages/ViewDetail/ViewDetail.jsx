import { FaLocationDot } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import { Link, useLoaderData } from "react-router-dom";

const ViewDetail = () => {
  const singleData = useLoaderData();

  const {
    _id,
    thumbnail,
    post_title,
    description,
    category,
    location,
    volunteers_needed,
    deadline,
    organizer_name,
    organizer_email,
  } = singleData || {};
  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
            Need Volunteers: {volunteers_needed}
          </h1>

          <div className="mt-8 lg:-mx-6 lg:flex lg:items-center">
            <img
              className="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96"
              src={thumbnail}
              alt=""
            />

            <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <p className="text-sm text-blue-500 uppercase">
                  category: {category}
                </p>
                <div className=" text-gray-700 badge badge-error badge-outline">
                  <SlCalender />

                  <h1 className="px-2 text-sm ">
                    <strong>Deadline:</strong> {new Date(deadline).toLocaleDateString()}
                  </h1>
                </div>
              </div>
              <div className="text-error my-4 flex items-center gap-2">
                <p className="text-white">Location: </p>
                <FaLocationDot />
                <p className="text-">{location}</p>
              </div>

              <a
                href="#"
                className="block mt-4 text-2xl font-semibold text-gray-800 hover:underline dark:text-white"
              >
                {post_title}
              </a>

              <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                {description}
              </p>

              <div className="flex items-center mt-6">
                <div className="mx-4">
                  <h1 className="text-sm  text-blue-500 uppercase">
                    Organizer Name:
                    <p>{organizer_name}</p>
                  </h1>
                  <hr className="my-4" />
                  <p className="text-sm text-blue-500 uppercase">
                    Organizer Email:
                    <p className="lowercase">{organizer_email}</p>
                  </p>
                </div>
                
              </div>
              <div className="mt-4 ml-4">
                  <Link
                  to={`/beVolunteer/${_id}`}
                    href="#_"
                    className="relative inline-flex items-center justify-center px-6 py-2 overflow-hidden font-medium tracking-tighter text-white bg-purple-800 rounded-lg group"
                  >
                    <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-green-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
                    <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
                    <span className="relative">Be a Volunteer</span>
                  </Link>
                </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ViewDetail;
