import { useLoaderData, useNavigate } from "react-router-dom";
import useAuth from "../../Hook/useAuth";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";
//import { useState } from "react";

const BeVolunteer = () => {
  const navigate = useNavigate()
  const singleData = useLoaderData();
  const { user } = useAuth();
  //const [item, setItem] = useState(singleData);

  console.log(user);

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
  console.log(singleData);

  const handleAddBeVolunteer = (event) => {
    event.preventDefault();
    const form = event.target;

    const post_title = form.post_title.value;
    const category = form.category.value;
    const location = form.location.value;
    const volunteers_needed = parseInt(form.volunteers_needed.value);
    const thumbnail = form.thumbnail.value;
    const deadline = form.deadline.value;
    const description = form.description.value;
    const organizer_email = form.organizer_email.value;
    const organizer_name = form.organizer_name.value;
    const userName = form.userName.value;
    const userEmail = form.userEmail.value;
    const suggestion = form.suggestion.value;
    const status = form.status.value;

    const newBeVolunteer = {
      post_title,
      category,
      location,
      volunteers_needed,
      thumbnail,
      deadline,
      description,
      organizer_email,
      organizer_name,
      userName,
      userEmail,
      suggestion,
      status,
    };

    console.log(newBeVolunteer);

    const requestUpdate = {
      volunteers_needed,
    };

    //send data to the server
    if (volunteers_needed > 0) {
      console.log('Volunteering for:', post_title);
    } else {
      Swal.fire({
        title: "Volunteers Needed Count 0",
        icon: "error",
      });
      return
    }

    fetch(`${import.meta.env.VITE_API_URL}/beVolunteer`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newBeVolunteer),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Send Request Successfully!",
            icon: "success",
          });
        }
      });
    fetch(`${import.meta.env.VITE_API_URL}/requestUpdate/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(requestUpdate),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
      navigate('/myPost')
  };

  return (
    <div>
      <Helmet>
        <title>Volunteer Link | BE VOLUNTEER</title>
      </Helmet>
      <section className="relative">
      <div
          className="absolute -z-10 inset-0 bg-cover bg-center blur-[2px]  brightness-50"
          style={{backgroundImage: "url('https://i.ibb.co/xjk87mc/ass.jpg')"}}
        ></div>
        <div className="flex justify-center min-h-screen container mx-auto">
          <div
          data-aos="zoom-in"
          data-aos-duration="500"
          data-aos-delay="500"
          className="hidden bg-cover lg:block lg:w-2/5 mx-auto my-auto">
            <img src={thumbnail} alt="" />
          </div>

          <div className="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
            <div
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="500"
            className="w-full">
              <h1 className="text-2xl font-semibold tracking-wider text-gray-800 capitalize dark:text-white">
                Submit a request to volunteer
              </h1>

              <p className="mt-4 text-gray-500 dark:text-gray-400">
                Ready to lend a hand? Submit your volunteer request here. Join
                us in making a positive impact in your community.
              </p>

              <div className="mt-6"></div>

              <form
                onSubmit={handleAddBeVolunteer}
                className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2"
              >
                <div data-aos="fade-up"
               data-aos-duration="500"
               data-aos-delay="600">
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Post Title
                  </label>
                  <input
                    type="text"
                    name="post_title"
                    id="post_title"
                    defaultValue={post_title}
                    readOnly
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div data-aos="fade-up"
               data-aos-duration="500"
               data-aos-delay="700">
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Category
                  </label>
                  <input
                    type="text"
                    name="category"
                    id="category"
                    defaultValue={category}
                    readOnly
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div data-aos="fade-up"
               data-aos-duration="500"
               data-aos-delay="800">
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Location
                  </label>
                  <input
                    type="text"
                    name="location"
                    id="location"
                    defaultValue={location}
                    readOnly
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div data-aos="fade-up"
               data-aos-duration="500"
               data-aos-delay="900">
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Volunteers Needed
                  </label>
                  <input
                    type="text"
                    name="volunteers_needed"
                    defaultValue={volunteers_needed}
                    readOnly
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div data-aos="fade-up"
               data-aos-duration="500"
               data-aos-delay="1000">
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Deadline
                  </label>
                  <input
                    type="text"
                    name="deadline"
                    defaultValue={deadline}
                    readOnly
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
                <div data-aos="fade-up"
               data-aos-duration="500"
               data-aos-delay="1100">
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Thumbnail
                  </label>
                  <input
                    type="text"
                    name="thumbnail"
                    defaultValue={thumbnail}
                    readOnly
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
                <div data-aos="fade-up"
               data-aos-duration="500"
               data-aos-delay="1200">
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Description
                  </label>
                  <textarea
                    type="text"
                    id="description"
                    name="description"
                    defaultValue={description}
                    readOnly
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div data-aos="fade-up"
               data-aos-duration="500"
               data-aos-delay="1300">
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Organizer Name
                  </label>
                  <input
                    type="text"
                    name="organizer_name"
                    defaultValue={organizer_name}
                    readOnly
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
                <div data-aos="fade-up"
               data-aos-duration="500"
               data-aos-delay="1400">
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Organizer Email
                  </label>
                  <input
                    type="email"
                    name="organizer_email"
                    defaultValue={organizer_email}
                    readOnly
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
                <div data-aos="fade-up"
               data-aos-duration="500"
               data-aos-delay="1500">
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="userName"
                    defaultValue={user?.displayName}
                    readOnly
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
                <div data-aos="fade-up"
               data-aos-duration="500"
               data-aos-delay="1600">
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="userEmail"
                    defaultValue={user?.email}
                    readOnly
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
                <div data-aos="fade-up"
               data-aos-duration="500"
               data-aos-delay="1700">
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Suggestion
                  </label>
                  <input
                    type="text"
                    placeholder="Your suggestion"
                    id="suggestion"
                    name="suggestion"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
                <div data-aos="fade-up"
               data-aos-duration="500"
               data-aos-delay="1800">
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Status
                  </label>
                  <input
                    type="text"
                    name="status"
                    defaultValue="requested"
                    readOnly
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <input
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay="1900"
                  className="flex items-center justify-between w-full px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                  type="submit"
                  value="Request"
                />
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BeVolunteer;
