import { Link, NavLink } from "react-router-dom";
import logo from "../../../public/logo.png";
import { useEffect, useState } from "react";
import useAuth from "../../Hook/useAuth";
import { Typewriter } from "react-simple-typewriter";

const Navbar = () => {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  console.log(theme);

  const { logout, user } = useAuth();

  const handleLogOut =()=>{
   //document.cookie = "token"+'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    logout()
  }
  //console.log(user);

  const navLink = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-orange-500 font-bold border border-purple-800 mr-3 scale-105"
              : "font-bold mr-3"
          }
        >
          HOME
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/needVolunteer"
          className={({ isActive }) =>
            isActive
              ? "text-orange-500 font-bold border border-purple-800 mr-3 scale-105"
              : "font-bold mr-3"
          }
        >
          Need Volunteer
        </NavLink>
      </li>
      {user &&(
        <li>
        <details className="dropdown font-bold mr-3 ">
          <summary className="m-1">My Profile</summary>
          <ul className="p-2 shadow menu dropdown-content z-[50]  rounded-box w-52  bg-black">
            <li>
              <NavLink
                to="/addVolunteer"
                className={({ isActive }) =>
                  isActive
                    ? "text-orange-500 font-bold border border-purple-800 mr-3 scale-105"
                    : "font-bold mr-3"
                }
              >
                Add Volunteer Post
              </NavLink>
            </li>
            <li>
              <NavLink to="/myPost"
              className={({ isActive }) =>
                isActive
                  ? "text-orange-500 font-bold border border-purple-800 mr-3 scale-105"
                  : "font-bold mr-3"
              }>
                Manage My Post</NavLink>
            </li>
          </ul>
        </details>
      </li>
      )}
      
    </>
  );
  return (
    <div className=" navbar z-[60]   md:px-16 text-white">
      <div
          className="absolute max-h-32 -z-10 inset-0 bg-cover bg-center blur-[2px] brightness-50"
          style={{backgroundImage: "url('https://t3.ftcdn.net/jpg/06/04/17/18/360_F_604171878_er6QBeKSWJTu5JQr6GbH6G2aWa7kHOh7.jpg')"}}
        ></div>
      <div className="navbar max-h-32">
        <div className="navbar-start">
          <div className="dropdown z-[99] ">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 bg-black"
            >
              {navLink}
            </ul>
          </div>
          <Link
            to="/"
            className=" text-center font-bold flex flex-col items-center"
          >
            <img className="md:w-[150px] w-[80px]" src={logo} alt="" />
            <p className="text-orange-500">
              Volunteer <span className="text-purple-800 stroke-cyan-500">
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
                </span>
            </p>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLink}</ul>
        </div>

        <div className="navbar-end z-[10] flex md:flex-row flex-col gap-4">
          <label className="flex cursor-pointer gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>
            <input
              onChange={handleToggle}
              type="checkbox"
              className="toggle theme-controller"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </label>
          <span className="md:mr-6 hidden md:block">{user?.email}</span>
          {/*user singed in information */}
          {user ? (
            <div
              className="dropdown dropdown-end tooltip tooltip-left"
              data-tip={user.displayName}
            >
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full ">
                  <img
                    src={
                      user?.photoURL ||
                      "https://i.ibb.co/vY5bFQR/2151033973-min.jpg"
                    }
                  />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu dropdown-content mt-3 z-[99] px-2 py-10 shadow-4xl shadow bg-black rounded-box w-64 border   "
              >
                <img
                  src={
                    user?.photoURL ||
                    "https://i.ibb.co/vY5bFQR/2151033973-min.jpg"
                  }
                  alt=""
                  className="w-32 h-32 mx-auto rounded-full  aspect-square mb-6"
                />
                <li>
                  <p className=" btn mb-3">
                    <span>{user?.displayName || "user name not found"}</span>
                  </p>
                </li>
                <li>
                  <span className="btn mb-3">
                    {user?.email || "email not found"}
                  </span>
                </li>
                <li>
                  <button
                    onClick={handleLogOut}
                    className="btn btn-sm btn-error text-white"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <Link to="/login">
              <button className="btn bg-lime-500  rounded-xl text-white px-8">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
