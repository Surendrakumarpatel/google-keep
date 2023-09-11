import React, { useState } from 'react'
import { IoColorPaletteOutline } from "react-icons/io5";
import { AiOutlineDelete } from "react-icons/ai";
import { IoMdCreate } from "react-icons/io"
import axios from 'axios';
import { ENDPOINT } from '../utils/constant';
import { toast } from "react-hot-toast";
import UpdateNote from './UpdateNote';


const Note = ({ item, onDelete , update, setUpdate}) => {
    const [open, setOpen] = useState(false);
    const { title, paragraph, _id, color} = item;
    console.log(color);
    return (
        <div className={`${color} bg-green-500 pt-2 pl-4 pr-4 pb-2 rounded-lg shadow-md shadow-teal-300 text-white`}>
            <h2 className="text-2xl font-bold mb-4">{title}</h2>
            <p className="text-sm">{paragraph}</p>
            <div className='flex items-center justify-end'>
                <button className="bg-white text-teal-400 hover:bg-teal-500 hover:text-white p-2 rounded-full mt-4 ml-1"><IoColorPaletteOutline size={"20px"} /></button>
                <button onClick={()=> setOpen(true)} className="bg-white text-teal-400 hover:bg-teal-500 hover:text-white p-2 rounded-full mt-4 ml-1"><IoMdCreate size={"20px"} /></button>
                <button onClick={() => onDelete(_id)} className="bg-white text-teal-400 hover:bg-teal-500 hover:text-white p-2 rounded-full mt-4 ml-1"><AiOutlineDelete size={"20px"} /></button>
            </div>
            {
                open ? (
                   <UpdateNote setOpen={setOpen} id = {_id} update={update} setUpdate={setUpdate}/>
                ) : null
            }
        </div>
    )
}

export default Note