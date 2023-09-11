import React, { useEffect, useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineSearch } from "react-icons/ai";
import { IoRefreshSharp, IoSettingsOutline } from "react-icons/io5";
import { TbLayoutList } from "react-icons/tb";
import { PiDotsNineBold } from "react-icons/pi";
import Avatar from 'react-avatar';
import { useDispatch, useSelector } from 'react-redux';
import { searchTextKeyword, toggleMenu } from '../utils/appSlice';
import { MdKeyboardArrowDown } from "react-icons/md";
import axios from "axios";
import { ENDPOINT } from "../utils/constant";
// import { Navigate, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { setText } from '../utils/searchSlice';

const Navbar = () => {
    const [searchText, setSearchText] = useState("");

    const dispatch = useDispatch();

    const user = useSelector(store => store.userReducer.user);
    const isAuthenticated = useSelector(store => store.userReducer.isAuthenticated);

    const toggleButton = () => {
        dispatch(toggleMenu());
    }

    const handleChange = (e) => {
        setSearchText(e.target.value);
    }

    useEffect(() => {
        dispatch(setText(searchText));
    }, [searchText])


    if (!isAuthenticated)
        return null;

    return (
        <div className='flex items-center justify-between p-2 shadow-md'>
            <div className='flex items-center w-20 justify-between ml-5'>
                <div>
                </div>     <button onClick={toggleButton} className="bg-teal-400 shadow-lg shadow-teal-300 text-white hover:bg-teal-500 p-2 rounded-full"><RxHamburgerMenu size={"20px"} /></button>

                <div>
                    <h1 className='text-xl font-normal '>Title</h1>
                </div>
            </div>
            <div className='w-[40%]'>
                <div className='flex items-center bg-gray-100 w-full p-3 rounded-md'>
                    <div>
                        <AiOutlineSearch size={'22px'} />
                    </div>
                    <div className='w-full ml-4'>
                        <input value={searchText} onChange={handleChange} type='text' placeholder='Search...' className='bg-gray-100 outline-none w-full' />
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-between'>

                <div>
                    <IoRefreshSharp size={'22px'} className='cursor-pointer' />
                </div>
                <div>
                    <TbLayoutList size={'22px'} className='cursor-pointer' />
                </div>
                <div>
                    <IoSettingsOutline size={'22px'} className='cursor-pointer' />
                </div>
                <div className='ml-4'>
                    <PiDotsNineBold size={'22px'} className='cursor-pointer' />
                </div>
                <div className='flex items-center'>
                    <Avatar size="30" round={true} facebook-id="invalidfacebookusername" src="http://www.gravatar.com/avatar/a16a38cdfe8b2cbd38e8a56ab93238d3" />

                    <MdKeyboardArrowDown size={"22px"} />
                    <h1 className='text-md font-bold'>{`${user?.name}`}</h1>

                </div>
            </div>
        </div>
    )
}

export default Navbar