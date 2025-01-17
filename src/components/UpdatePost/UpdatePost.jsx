import { useState } from "react";
import { Helmet } from "react-helmet";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../Hook/useAuth";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import toast from "react-hot-toast";
import useAxiosSecure from "../../Hook/useAxiosSecure";

const UpdatePost = () => {
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const volunteer = useLoaderData();
  const { user } = useAuth();

  const {
    _id,
    post_title,
    category,
    location,
    volunteers_needed,
    thumbnail,
    deadline,
    description,
  } = volunteer || {};

  const [startDate, setStartDate] = useState(new Date(deadline) || new Date());

  const handleUpdateProduct = async (event) => {
    event.preventDefault();
    const form = event.target;

    const post_title = form.post_title.value;
    const category = form.category.value;
    const location = form.location.value;
    const volunteers_needed = parseInt(form.volunteers_needed.value);
    const thumbnail = form.thumbnail.value;
    const deadline = startDate;
    const description = form.description.value;
    const organizer_email = form.organizer_email.value;
    const organizer_name = form.organizer_name.value;

    const updatedPostItem = {
      post_title,
      category,
      location,
      volunteers_needed,
      thumbnail,
      deadline,
      organizer_email,
      organizer_name,
      description,
    };

    console.log(updatedPostItem);

    //send data to the server
    try {
      const { data } = await axiosSecure.put(
        `/volunteer/${_id}`,
        updatedPostItem
      );
      console.log(data);

      if (data.modifiedCount > 0) {
        Swal.fire({
          title: "Updated Craft Item Successfully!",
          icon: "success",
        });
      }

      navigate("/myPost");
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }

    /*
    fetch(`${import.meta.env.VITE_API_URL}/volunteer/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedPostItem),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Updated Craft Item Successfully!",
            icon: "success",
          });
        }
      });
      */
  };
  return (
    <div className="md:container mx-auto py-20 ">
      <Helmet>
        <title>WOOD | ADD CRAFT ITEM</title>
      </Helmet>
      <div
      data-aos="zoom-in"
      data-aos-duration="500"
      data-aos-delay="500"
      className="shadow-lg p-5 border rounded-3xl">
        {/* Heading */}
        <div className="mt-5 mb-8">
          <p className="text-center text-3xl font-semibold">
            <span className="mr-3 text-[#FF497C]">
              <i className="bx bxs-alarm-add"></i>
            </span>
            <span className="">
              <span className="text-[#FF497C]">
                {/* {update ? "Update " : "Add "} */}
              </span>
              <h1 className="md:text-5xl text-2xl text-center  font-bold md:font-extrabold mb-6 mx-auto">
                Update Your Post
              </h1>

              <hr className=" my-10 border border-dashed container mx-auto bg-gray-500" />
            </span>
          </p>
        </div>
        {/* form */}
        <form onSubmit={handleUpdateProduct}>
          <div className="flex gap-8 flex-col md:flex-row ">
            <div className="flex-1">
              <label className="block mb-2" htmlFor="name">
                Post Title
              </label>
              <input
                className="w-full p-2 border rounded-md focus:outline-[rgb(68,65,255)]"
                type="text"
                placeholder="Post Title"
                id="name"
                name="post_title"
                defaultValue={post_title}
              />

              <label className="block mt-4 mb-2 " htmlFor="category">
                Category
              </label>
              <select
                name="category"
                id="category"
                className="w-full p-2 border rounded-md focus:outline-[rgb(68,65,255)]"
                type="text"
                placeholder="Select Category"
                defaultValue={category}
              >
                <option value="healthcare" selected>
                  Healthcare
                </option>
                <option value="education" selected>
                  Education
                </option>
                <option value="social service" selected>
                  Social service
                </option>
                <option value="animal welfare" selected>
                  Animal welfare
                </option>
              </select>
              <label className="block mt-4 mb-2 " htmlFor="price">
                Location
              </label>
              <input
                className="w-full p-2 border rounded-md focus:outline-[rgb(68,65,255)]"
                type="text"
                placeholder="Enter Location"
                id="Location"
                name="location"
                defaultValue={location}
              />
              <label className="block mt-4 mb-2 " htmlFor="processingTime">
                No. of volunteers needed
              </label>
              <input
                className="w-full p-2 border rounded-md focus:outline-[rgb(68,65,255)]"
                type="text"
                placeholder="Type No. of volunteers needed"
                id="noOfVolunteers"
                name="volunteers_needed"
                defaultValue={volunteers_needed}
              />
            </div>
            {/* Right side */}
            <div className="flex-1">
              <label className="block mb-2 " htmlFor="deadline">
                Select Deadline
              </label>
              <DatePicker
                className="w-full p-2 border rounded-md focus:outline-[rgb(68,65,255)]"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />

              <label className="block mb-2 mt-4 " htmlFor="description">
                Description
              </label>
              <textarea
                className="w-full p-2 border rounded-md focus:outline-[rgb(68,65,255)]"
                type="text"
                placeholder="Description"
                id="description"
                name="description"
                defaultValue={description}
              />

              <label className="block mb-2 mt-4 " htmlFor="userEmail">
                Organizer Email
              </label>
              <input
                disabled
                className="w-full p-2 border rounded-md focus:outline-[rgb(68,65,255)] "
                type="email"
                placeholder="Organizer Email"
                id="email"
                name="organizer_email"
                defaultValue={user?.email}
              />
              <label className="block mb-2 mt-4 " htmlFor="userName">
                Organizer Name
              </label>
              <input
                disabled
                className="w-full p-2 border rounded-md focus:outline-[rgb(68,65,255)]"
                type="text"
                placeholder="Organizer Name"
                id="userName"
                name="organizer_name"
                defaultValue={user?.displayName}
              />
            </div>
          </div>
          <label className="block mb-2 " htmlFor="image">
            Thumbnail
          </label>
          <input
            className="w-full p-2 border rounded-md focus:outline-[rgb(68,65,255)]"
            type="text"
            placeholder="Enter Thumbnail URL"
            id="thumbnail"
            name="
            thumbnail"
            defaultValue={thumbnail}
          />

          <input
            className="px-4 w-full py-2 mt-4 rounded-3xl hover:bg-purple-950  bg-purple-800 duration-200 text-white cursor-pointer font-semibold"
            type="submit"
            value="Update Post"
          />
        </form>
      </div>
    </div>
  );
};

export default UpdatePost;
