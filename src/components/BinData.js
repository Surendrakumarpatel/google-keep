import React from 'react'
import { IoColorPaletteOutline } from 'react-icons/io5';
import { useSelector } from 'react-redux'
import UpdateNote from './UpdateNote';
import { IoMdCreate } from 'react-icons/io';
import { AiOutlineDelete } from 'react-icons/ai';

const BinData = () => {

    const { binnotes } = useSelector((store) => store.bin);
    console.log(binnotes);

    return (
        <div className='m-10 grid grid-cols-5 gap-2'>
            {
                binnotes.map((item) => {
                    const { title, paragraph, _id } = item;
                    return (
                        <div key={_id} className="pt-2 border-2 border-gray-300 pl-4 pr-4 pb-2 rounded-lg shadow-md text-black">
                            <h2 className="text-2xl font-bold mb-4">{title}</h2>
                            <p className="text-sm">{paragraph}</p>
                            <div className='flex items-center justify-end'>
                                <button className="bg-white text-teal-400 hover:bg-teal-500 hover:text-white p-2 rounded-full mt-4 ml-1"><IoColorPaletteOutline size={"20px"} /></button>
                                <button className="bg-white text-teal-400 hover:bg-teal-500 hover:text-white p-2 rounded-full mt-4 ml-1"><IoColorPaletteOutline size={"20px"} /></button>
                                <button className="bg-white text-teal-400 hover:bg-teal-500 hover:text-white p-2 rounded-full mt-4 ml-1"><IoColorPaletteOutline size={"20px"} /></button>
                                {/* <button onClick={() => setOpen(true)} className="bg-white text-teal-400 hover:bg-teal-500 hover:text-white p-2 rounded-full mt-4 ml-1"><IoMdCreate size={"20px"} /></button>
                                <button onClick={() => onDelete(_id)} className="bg-white text-teal-400 hover:bg-teal-500 hover:text-white p-2 rounded-full mt-4 ml-1"><AiOutlineDelete size={"20px"} /></button> */}
                            </div>
                            {/* {
                                open ? (
                                    <UpdateNote setOpen={setOpen} id={_id} update={update} setUpdate={setUpdate} />
                                ) : null
                            } */}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default BinData