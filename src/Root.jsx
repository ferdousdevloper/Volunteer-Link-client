import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import { Outlet } from "react-router-dom";


const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="min-h-[calc(100vh-117px)]">
            <Outlet></Outlet>
            </div>
            
            <Footer></Footer>
            <Toaster></Toaster>
        </div>
    );
};

export default Root;