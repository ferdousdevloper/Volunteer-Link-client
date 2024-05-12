import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import error404 from "../../error404.json"
import Lottie from "lottie-react";

const ErrorPage404 = () => {
  return (
    <div className="h-[100vh]">
      <Helmet><title>404 ERROR</title></Helmet>
      <section className="flex items-center h-full p-16 dark:bg-gray-50 dark:text-gray-800">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
          <div className="relative max-w-md text-center">
          <Lottie 
            animationData= {error404}
            height={300}
            width={300}
            className=""
            ></Lottie>
            
          </div>
          <Link
            to='/'
              
              className="absolute bottom-28 px-8 py-4 font-semibold rounded dark:bg-violet-600 dark:text-gray-50"
            >
              Back to homepage
            </Link>
        </div>
      </section>
    </div>
  );
};

export default ErrorPage404;
