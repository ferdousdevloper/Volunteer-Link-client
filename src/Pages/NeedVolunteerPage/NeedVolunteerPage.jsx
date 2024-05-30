/* eslint-disable react/no-unknown-property */
import { useEffect, useState } from "react";
import { SlCalender } from "react-icons/sl";
import { Link } from "react-router-dom";
import { MdOutlineGridView } from "react-icons/md";
import { MdOutlineViewHeadline } from "react-icons/md";
import axios from "axios";
import { Helmet } from "react-helmet";

const NeedVolunteerPage = () => {
  const [item, setItem] = useState([]);
  const [search, setSearch] = useState("");
  const [searchText, setSearchText] = useState("");
  const [isLayoutOne, setIsLayoutOne] = useState(true);
  const [displayCategory, setDisplayCategory] = useState(item);
  //const needVolunteerCards = useLoaderData();

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios(
        `${import.meta.env.VITE_API_URL}/volunteer?search=${search}`
      );
      setItem(data);
      setDisplayCategory(data);
    };
    getData();
  }, [search]);

  /*
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/volunteer?search=${search}`)
      .then((res) => res.json())
      .then((data) => {
        setItem(data);
      });
  }, [search]);
  */
  const handleSearch = (e) => {
    e.preventDefault();

    setSearch(searchText);
    setSearchText("");
  };

  console.log(search);
  console.log(item);
  //toggle to change layout

  const handleToggleClick = () => {
    setIsLayoutOne((prevState) => !prevState);
  };
  console.log(isLayoutOne);

  //new feature add---------------------------------------
  const handleCategory = (filter) => {
    if (filter === "education") {
      const educationCategory = item.filter(
        (category) => category.category === "education"
      );
      setDisplayCategory(educationCategory);
    } else if (filter === "healthcare") {
      const healthCareCategory = item.filter(
        (category) => category.category === "healthcare"
      );
      setDisplayCategory(healthCareCategory);
    } else if (filter === "social service") {
      const socialCareCategory = item.filter(
        (category) => category.category === "social service"
      );
      setDisplayCategory(socialCareCategory);
    } else if (filter === "animal welfare") {
      const animalCareCategory = item.filter(
        (category) => category.category === "animal welfare"
      );
      setDisplayCategory(animalCareCategory);
    }
  };
  console.log(displayCategory);

  return (
    <div className="text-center mb-10 md:container md:mx-auto mx-5">
      <Helmet>
        <title>Volunteer Link | Need Volunteer</title>
      </Helmet>
      <h1
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-delay="500"
        className="md:text-5xl text-2xl  font-bold md:font-extrabold mt-10 mb-6 mx-auto"
      >
        Need Volunteer
      </h1>
      <p
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-delay="700"
        className="max-w-[600px] mx-auto"
      >
        Explore diverse volunteer opportunities on our circular page. Join us in
        making a difference in various causes today.
      </p>
      <hr
        data-aos="zoom-in"
        data-aos-duration="500"
        data-aos-delay="800"
        className=" my-10 border border-dashed container mx-auto bg-gray-500"
      />
      <form
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-delay="1000"
        onSubmit={handleSearch}
        className="flex gap-1 items-center justify-center mx-auto my-10"
      >
        <label className="input input-bordered flex items-center gap-2">
          <input
            type="text"
            className="grow"
            placeholder="Search"
            onChange={(e) => setSearchText(e.target.value)}
            value={searchText}
            name="search"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
        <button className="px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none">
          Search
        </button>
      </form>
      <div className="flex justify-between items-center mb-8 ">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn m-1">
          <p className="font-bold">Filter by category</p>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li onClick={()=>handleCategory('education')}>
              <a>Education</a>
            </li>
            <li onClick={()=>handleCategory('healthcare')}>
              <a>Healthcare</a>
            </li>
            <li onClick={()=>handleCategory('social service')}>
              <a>Social service</a>
            </li>
            <li onClick={()=>handleCategory('animal welfare')}>
              <a>Animal welfare</a>
            </li>
          </ul>
        </div>
        <div>
          <div
            data-aos="zoom-in"
            data-aos-duration="500"
            data-aos-delay="1100"
            className="flex items-center gap-4 justify-end mr-10"
          >
            <p className="font-bold">View Grid</p>
            <MdOutlineGridView className="text-2xl text-blue-500" />
            <input
              onChange={handleToggleClick}
              type="checkbox"
              className="toggle"
            />
            <MdOutlineViewHeadline className="text-2xl text-blue-500" />
            <p className="font-bold">View List</p>
          </div>
        </div>
      </div>

      {isLayoutOne ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 container mx-auto">
          {
            // eslint-disable-next-line react/no-unknown-property
            displayCategory.map((i) => (
              <div
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay="500"
                key={i._id}
                i={i}
                className="relative text-white border-2 border-purple-800 rounded-3xl"
              >
                <div
                  className="absolute  -z-10 inset-0 bg-cover bg-center blur-[2px] rounded-3xl brightness-50"
                  style={{
                    backgroundImage:
                      "url('https://unblast.com/wp-content/uploads/2021/01/Space-Background-Images.jpg')",
                  }}
                ></div>
                <div className=" overflow-hidden  rounded-lg shadow-lg">
                  <div className="px-4 py-2">
                    <h1 className="text-xl font-bold uppercase">
                      {i.post_title}
                    </h1>
                    <div className="flex items-center justify-center px-6 py-3  rounded-full">
                      <h1 className="mx-3  text-lg font-semibold ">
                        Category:{" "}
                        <div className="badge badge-accent badge-lg">
                          {" "}
                          {i.category}
                        </div>
                      </h1>
                    </div>
                  </div>

                  <img
                    className="object-cover w-full h-48 mt-2"
                    src={i.thumbnail}
                    alt=""
                  />

                  <div className="flex flex-col md:flex-row gap-4 md:items-end items-center md:justify-between px-4 py-2 bg-gray-900 rounded-3xl">
                    <div className=" text-gray-700 badge badge-error badge-outline">
                      <SlCalender />

                      <h1 className="px-2 text-sm ">
                        <strong>Deadline:</strong>{" "}
                        {new Date(i.deadline).toLocaleDateString()}
                      </h1>
                    </div>
                    <Link to={`/viewDetail/${i._id}`}>
                      <button className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">
                        View Details
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      ) : (
        <div
          data-aos="zoom-in"
          data-aos-duration="500"
          data-aos-delay="700"
          className="overflow-x-auto border rounded-2xl shadow-2xl"
        >
          <table className="table ">
            {/* head */}
            <thead>
              <tr>
                <th>Thumbnail</th>
                <th>Post Title</th>
                <th>Category</th>
                <th>Volunteers Need</th>
                <th>Deadline</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {
                // eslint-disable-next-line react/no-unknown-property
                displayCategory.map((i) => (
                  <tr
                    key={i._id}
                    i={i}
                    className="shadow-2xl hover:scale-[101%] ease-in duration-300"
                  >
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask  w-40 h-40">
                            <img src={i.thumbnail} alt="" />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div>
                        <div className="font-bold">{i.post_title}</div>
                      </div>
                    </td>
                    <td className="font-bold">
                      <div className="text-sm opacity-50">
                        Category: {i.category}
                      </div>
                    </td>
                    <td className="font-bold">
                      <div className="text-sm opacity-50">
                        Volunteers Need: {i.volunteers_needed}
                      </div>
                    </td>
                    <td>
                      <span className="border border-red-700 text-red-700 px-3 py-1 rounded-3xl font-bold">
                        {new Date(i.deadline).toLocaleDateString()}
                      </span>
                    </td>
                    <th>
                      <Link to={`/viewDetail/${i._id}`}>
                        <button className="btn btn-ghost btn-sm bg-green-500 text-white">
                          View Detail
                        </button>
                      </Link>
                    </th>
                  </tr>
                ))
              }
            </tbody>
            {/* foot */}
            <tfoot>
              <tr>
                <th>Thumbnail</th>
                <th>Post Title</th>
                <th>Category</th>
                <th>Volunteers Need</th>
                <th>Deadline</th>

                <th></th>
              </tr>
            </tfoot>
          </table>
        </div>
      )}
    </div>
  );
};

export default NeedVolunteerPage;
