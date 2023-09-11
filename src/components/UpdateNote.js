import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { RxCross2 } from "react-icons/rx";
import { ENDPOINT } from '../utils/constant';
import toast from 'react-hot-toast';


const UpdateNote = ({ setOpen, id, update, setUpdate }) => {
    const [title, setTitle] = useState("");
    const [paragraph, setParagraph] = useState("");

    useEffect(() => {
        const fetchNote = async () => {
            await axios.get(`${ENDPOINT}/note/${id}`).then((res) => {
                console.log(res.data);
                const { title, paragraph } = res.data.note;
                setTitle(title);
                setParagraph(paragraph);
            }).catch((err) => {
                
                console.log(err);
            })
        }
        fetchNote();

    }, [])

    const updateNote = async (e) => {
        e.preventDefault();
        await axios.put(`${ENDPOINT}/updatenote/${id}`, { title, paragraph }).then((res) => {
            setUpdate(!update)
            if (res.data.success)
                toast.success(res.data.message);
        }).catch((err) => {
            console.log(err);
        })
        setOpen(false);
    }

    return (
        <>
            <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                            <h3 className="text-xl text-black font-semibold">
                                UPDATE
                            </h3>
                            <button
                                className="ml-auto bg-teal-400 shadow-lg shadow-teal-300 text-white hover:bg-teal-500 p-2 rounded-full"
                                onClick={() => setOpen(false)}
                            >
                                <RxCross2 />
                            </button>
                        </div>
                        {/*body*/}
                        <form className="relative text-black p-6 flex flex-col">
                            <input onChange={(e) => setTitle(e.target.value)} value={title} name="title" type="text" className='border-2 p-2 border-gray-400 rounded-md outline-teal-300' />
                            <input onChange={(e) => setParagraph(e.target.value)} value={paragraph} name="paragraph" type="text" className='border-2 p-2 mt-8 border-gray-400 rounded-md outline-teal-300' />

                            {/*footer*/}
                            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                <button
                                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="button"
                                    onClick={() => setOpen(false)}
                                >
                                    Close
                                </button>
                                <button
                                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="button"
                                    onClick={updateNote}
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    )
}

export default UpdateNote