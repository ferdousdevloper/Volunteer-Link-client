

import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import empty1 from "../../../public/empty1.png"
//import axios from "axios";
//import { Link } from "react-router-dom";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import toast from "react-hot-toast";
import useAuth from "../../Hook/useAuth";

const VolunteerRequest = () => {
  const axiosSecure = useAxiosSecure()
  const { user } = useAuth();
  const [item, setItem] = useState([]);
  //const [volunteerRequest, setVolunteerRequest] = useState(item);

useEffect(()=>{
  
  getData()
}, [user])

// const getData = async() =>{
//   const {data} = await axiosSecure(`/beVolunteer`)
  
//   setItem(data)
// }

const getData = async () => {
  const { data } = await axiosSecure(
    `/beVolunteer/${user?.email}`,
    
  );
  setItem(data);
};

/*
  console.log(item);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/beVolunteer`)
      .then((res) => res.json())
      .then((data) => {
        setItem(data);
      });
  }, [volunteerRequest]);
  */

  

  const handleDelete = async _id => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, cancel it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
      
          const { data } = await axiosSecure.delete(`/beVolunteer/${_id}`)
          console.log(data)
          if (data.deletedCount > 0) {
            Swal.fire("Canceled!", "Your Post has been Canceled.", "success");
            
          }
    
          //refresh ui
          getData()
        } catch (err) {
          console.log(err.message)
          toast.error(err.message)
        }
        
      }
    });
    
  };
  return (
    <section className='container px-4 mx-auto pt-12'>
    <div
    className="flex items-center gap-x-3">
      <h2 className="text-lg font-medium ">My Volunteer Request Post</h2>

      <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full ">
        {item.length} Request
      </span>
    </div>

    <div
    className='flex flex-col mt-6'>
        <div className='-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
          <div className='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8'>
            <div className='relative overflow-hidden border border-gray-200  md:rounded-lg'>
            <div
          className="absolute -z-10 inset-0 bg-cover bg-center blur-[2px] "
          style={{backgroundImage: "url('https://i.ibb.co/WWm7kb4/as.jpg')"}}
        ></div>
              <table className='min-w-full divide-y divide-gray-200'>
                <thead className=''>
                  <tr>
                    <th
                      scope='col'
                      className='py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500'
                    >
                      <div className='flex items-center gap-x-3'>
                        <span>Title</span>
                      </div>
                    </th>

                    <th
                      scope='col'
                      className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                    >
                      <span>Deadline</span>
                    </th>

                    

                    <th
                      scope='col'
                      className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                    >
                      Category
                    </th>
                    <th
                      scope='col'
                      className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                    >
                      Description
                    </th>
                    <th
                      scope='col'
                      className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                    >
                      No of Volunteers
                    </th>
                    

                    <th className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'>
                      Edit
                    </th>
                  </tr>
                </thead>
                <tbody className='divide-y divide-gray-200 '>
                  {item.length === 0? <img className="h-80 mx-auto" src={empty1}/> : item.map(i => (
                    <tr key={i._id}>
                      <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                        {i.post_title}
                      </td>

                      <td className='px-4 py-4 text-sm text-red-500 whitespace-nowrap'>
                        {new Date(i.deadline).toLocaleDateString()}
                      </td>
                      <td className='px-4 py-4 text-sm whitespace-nowrap'>
                        <div className='flex items-center gap-x-2'>
                          <p
                            className={`px-3 py-1 ${
                              i.category === 'healthcare' &&
                              'text-blue-500 bg-blue-100/60'
                            } ${
                              i.category === 'animal welfare' &&
                              'text-red-500 bg-red-100/60'
                            } ${
                              i.category === 'education' &&
                              'text-green-500 bg-green-200/60'
                            } ${
                              i.category === 'social service' &&
                              'text-pink-500 bg-pink-100/60'
                            } text-xs  rounded-full`}
                          >
                            {i.category}
                          </p>
                        </div>
                      </td>
                      <td
                        title={i.description}
                        className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'
                      >
                        {i.description.substring(0, 18)}...
                      </td>
                      <td
                        title={i.volunteers_needed}
                        className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'
                      >
                        {i.volunteers_needed}
                      </td>
                      
                      <td className='px-4 py-4 text-sm whitespace-nowrap'>
                        <div className='flex items-center gap-x-6'>
                          <button
                            onClick={() => handleDelete(i._id)}
                            className='btn btn-sm text-gray-500 transition-colors duration-200   hover:text-red-500 focus:outline-none outline-red-700'
                          >
                           Cancel
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default VolunteerRequest;
