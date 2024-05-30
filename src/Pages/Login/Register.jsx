
import { Helmet } from "react-helmet";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hook/useAuth";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FiEye, FiEyeOff } from "react-icons/fi";
import Loader from "../../components/Loader/Loader";
import Lottie from "lottie-react";
import LoginAnimation from "../../LoginAnimation.json";
import axios from "axios";


const Register = () => {
  
    const { createUser, logout, updateUserProfile, setLoading,
        loading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state || "/";

  const [showPassword, setShowPassword] = useState(true);
  

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const validatePassword = (value) => {
    // Regular expressions to check for at least one uppercase letter and at least one special character
    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    const numberRegex = /[0-9]/
    const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;

    if (value.length < 6) {
      return "Password must be at least 6 characters long";
    }

    if (!uppercaseRegex.test(value)) {
      return "Password must contain at least one uppercase letter";
    }
    if (!lowercaseRegex.test(value)) {
      return "Password must contain at least one lowercase letter";
    }

    if (!specialCharRegex.test(value)) {
      return "Password must contain at least one special character";
    }
    if (!numberRegex.test(value)) {
      return "Password must contain at least one digit";
    }

    return true; // Password is valid
  };
  const onSubmit = async data => {
    const { email, password, image, name } = data;
    try{
    const result = await createUser(email, password)
    
    await updateUserProfile(name, image)

    const { data } = await axios.post(
      `${import.meta.env.VITE_API_URL}/jwt`,
      {
        email: result?.user?.email,
      },
      { withCredentials: true }
    )
    console.log(data)
    navigate(from, { replace: true })
    toast.success('Signup Successful')
    
    

      
      
      
      const user = {email};
        fetch('http://localhost:5000/user', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
        })
      
      
      logout()
      
    
  } catch (err) {
    console.log(err)
    toast.error(err?.message)
  }
    
    
  };


    return (
        <div className="md:w-4/6 mx-auto md:pt-10">
      <Helmet>
        <title>Volunteer Link | REGISTER</title>
      </Helmet>
      {loading && <Loader></Loader>}
      
      <h1 className="text-5xl font-bold text-center pt-10 ">Register now!</h1>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
          <Lottie
                animationData={LoginAnimation}
                height={300}
                width={300}
                className=""
              ></Lottie>
              </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl inset-0 bg-blue-gray-200 bg-opacity-25 backdrop-filter backdrop-blur-md dark:bg-gray-50 dark:bg-opacity-25 dark:backdrop-blur-md rounded-xl border">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input                
                  type="name"
                  placeholder="Full Name"
                  className="input input-bordered"
                  required
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <span className="text-error">This field is required</span>
                )}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  className="input input-bordered"
                  required
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-error">This field is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span  className="label-text">Image Url</span>
                </label>
                <input
                  type="text"
                  placeholder="Image URL"
                  className="input input-bordered"
                  {...register("image")}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span  className="label-text">Password</span>
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "password" : "text"}
                    placeholder="Password"
                    className="input input-bordered w-full"
                    required
                    {...register("password", {
                      required: true,
                      validate: validatePassword, // Custom validation function
                    })}
                  />
                  <span
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 my-4 text-right"
                  >
                    {showPassword ? <FiEye></FiEye> : <FiEyeOff></FiEyeOff>}
                  </span>
                </div>

                {errors.password && (
                  <span className="text-error">{errors.password.message}</span>
                )}
                
              </div>
              <div
              className="form-control mt-6">
                <button className="btn bg-blue-500 text-white border-0">
                  Register
                </button>
              </div>
              <div className="mt-8">
                <p >
                  Already have an account?{" "}
                  <Link to="/login" className="text-primary">
                    <strong>Sign In</strong>
                  </Link>{" "}
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Register;