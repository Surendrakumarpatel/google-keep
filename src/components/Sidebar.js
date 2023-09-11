import React from 'react'
import { AiOutlineBulb } from "react-icons/ai";
import { IoIosNotificationsOutline } from "react-icons/io";
import { PiArchiveBox } from "react-icons/pi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch, useSelector } from 'react-redux';
import { ENDPOINT } from '../utils/constant';
import axios from "axios";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from 'react-router-dom';
import { removeUser } from '../utils/userSlice';


const Sidebar = () => {
    const dispatch = useDispatch();
    const isMenuOpen = useSelector(store => store.app.isMenuOpen);
    console.log(isMenuOpen);

    const navigate = useNavigate();

    const logout = async () => {
        await axios.get(`${ENDPOINT}/logout`, { withCredentials: true }).then((res) => {
            if (res?.data?.success) {
                toast.success(res?.data?.message)
            }
            dispatch(removeUser());
            navigate("/login");
        }).catch((err) => {
            console.log(err);
        })
    }

    return (
        <div className={`flex flex-col overflow-hidden justify-between ${isMenuOpen ? 'w-60' : 'w-[4.5rem]'} h-[90vh]`}>
            <div>
                <div className={`flex items-center ${isMenuOpen ? 'rounded-r-full pl-6 hover:bg-slate-200' : 'rounded-full pl-3'} pt-2 pb-2 cursor-pointer`}>
                    <div className={` ${isMenuOpen ? null : 'bg-yellow-100 p-3 rounded-full'}`}>
                        <AiOutlineBulb size={"22px"} />
                    </div>
                    <div className="ml-7">
                        Notes
                    </div>
                </div>
                <div className={`flex items-center  ${isMenuOpen ? 'rounded-r-full pl-6 hover:bg-slate-200' : 'rounded-full pl-3'} pt-2 pb-2 cursor-pointer`}>
                    <div className={` ${isMenuOpen ? null : 'bg-yellow-100 p-3 rounded-full'}`}>
                        <IoIosNotificationsOutline size={"22px"} />
                    </div>
                    <div className="ml-7">
                        Reminders
                    </div>
                </div>
                <div className={`flex items-center ${isMenuOpen ? 'rounded-r-full pl-6 hover:bg-slate-200' : 'rounded-full pl-3'} pt-2 pb-2 cursor-pointer`}>
                    <div className={` ${isMenuOpen ? null : 'bg-yellow-100 p-3 rounded-full'}`}>
                        <PiArchiveBox size={"22px"} />
                    </div>
                    <div className="ml-7">
                        Archive
                    </div>
                </div>
                <Link to={"/bin"}>
                    <div className={`flex items-center ${isMenuOpen ? 'rounded-r-full pl-6 hover:bg-slate-200' : 'rounded-full pl-3'} pt-2 pb-2 cursor-pointer`}>
                        <div className={` ${isMenuOpen ? null : 'bg-yellow-100 p-3 rounded-full'}`}>
                            <RiDeleteBin6Line size={"22px"} />
                        </div>
                        <div className="ml-7">
                            Bin
                        </div>
                    </div>
                </Link>
            </div>
            {
                isMenuOpen && (
                    <div className="ml-5 mb-2">
                        <button onClick={logout} className="bg-teal-400 shadow-lg shadow-teal-300 hover:bg-teal-600 text-white font-semibold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-90">
                            Logout
                        </button>
                        <p className='text-sm mt-5'>Developed By: Patel Stuffs</p>
                    </div>
                )
            }

        </div>
    )
}

export default Sidebar