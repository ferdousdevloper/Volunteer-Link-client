import { Link, useLoaderData } from "react-router-dom";
import SingleVolunteerCard from "../SingleVolunteerCard/SingleVolunteerCard";


const VolunteerNeedsCards = () => {
    const volunteerCards = useLoaderData();
    const limitedVolunteerCards = volunteerCards.slice(0, 6);

    return (
        <div className="text-center mb-10">
            <h1 className="md:text-5xl text-2xl  font-bold md:font-extrabold mt-10 mb-6 mx-auto">Volunteer Needs Now Section</h1>
            <p className="max-w-[600px] mx-auto">
            Explore diverse volunteer opportunities on our circular page. Join us in making a difference in various causes today.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 container mx-auto">
                {
                    limitedVolunteerCards.map((volunteerCard)=>(<SingleVolunteerCard key={volunteerCard._id}
                    volunteerCard={volunteerCard}></SingleVolunteerCard>))

                }

            </div>
            <Link to='/needVolunteer'
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-delay="500">
          <a
            href="#_"
            className="relative shadow-xl inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group"
          >
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span className="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">
              See all
            </span>
            <span
            
            className="relative invisible">See all</span>
          </a>
        </Link>
        </div>
    );
};

export default VolunteerNeedsCards;