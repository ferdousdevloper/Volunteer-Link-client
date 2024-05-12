import { useState } from "react";
import { Helmet } from "react-helmet";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hook/useAuth";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import SocialLogin from "./SocialLogin";
import Loader from "../../components/Loader/Loader";
import LoginAnimation from "../../LoginAnimation.json";
import Lottie from "lottie-react";
import axios from "axios";

const Login = () => {

  const [showPassword, setShowPassword] = useState(true);
  const { user, signInUser, setLoading, loading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state || "/";

  const {
    register,
    //handleSubmit,
    formState: { errors },
  } = useForm();
  const handleSignIn = async e => {
    e.preventDefault()
    const form = e.target
    const email = form.email.value
    const pass = form.password.value
    console.log({ email, pass })
    try {
      //User Login
      const result = await signInUser(email, pass)
      console.log(result.user)
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/jwt`,
        {
          email: result?.user?.email,
        },
        { withCredentials: true }
      )
      console.log(data)
      navigate(from, { replace: true })
      toast.success('Signin Successful')
    } catch (err) {
      console.log(err)
      toast.error(err?.message)
    }
  }
  if (user || loading) return

  return (
    <div className="md:w-4/6 mx-auto ">
      <Helmet>
        <title>JWD | LOGIN</title>
      </Helmet>
      {loading && <Loader></Loader>}
      <h1 className="text-5xl font-bold text-center pt-10 md:pt-20">Login now!</h1>
      <div className="hero min-h-screen md:pt-20 ">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center">
            <div>
              <Lottie
                animationData={LoginAnimation}
                height={300}
                width={300}
                className=""
              ></Lottie>
            </div>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl rounded-xl border">
            <form onSubmit={handleSignIn} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
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
                  <span className="label-text">Password</span>
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "password" : "text"}
                    placeholder="password"
                    className="input input-bordered w-full"
                    required
                    {...register("password", { required: true })}
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
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-blue-500 border-0 text-white font-extrabold">
                  Login
                </button>
              </div>
              <div className="mt-8">
                <p>
                  New to here? Please{" "}
                  <Link to="/register" className="text-primary">
                    <strong>Register</strong>
                  </Link>{" "}
                </p>
              </div>
            </form>
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;