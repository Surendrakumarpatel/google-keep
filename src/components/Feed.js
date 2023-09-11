import React, { useState, useEffect } from 'react'
import { IoMdAddCircle } from "react-icons/io"
import axios from 'axios';
import { ENDPOINT } from '../utils/constant';
import { toast } from 'react-hot-toast';
import Note from './Note';
import { useDispatch, useSelector } from 'react-redux';
import { getNotes } from '../utils/noteSlice';
import NoteNotFound from './NoteNotFound';
import Shimmer from './Shimmer';
import { addBin } from '../utils/binSlice';

const shimmer = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

 
const Feed = () => {
  const [title, setTitle] = useState("");
  const [paragraph, setParagraph] = useState("");
  const [expanded, setExpanded] = useState(false);
  const [note, setNote] = useState([]);
  const [loading, setLoading] = useState(true);
  const [update, setUpdate] = useState(true);
 
  const titleChangeEventHandler = (e) => {
    setTitle(e.target.value);
  }
  const paragraphChangeEventHandler = (e) => {
    setParagraph(e.target.value);
  }

  const expand = () => {
    setExpanded(true);
  }

  const addingNotes = async () => {
    if (title === "" || paragraph === "")
      return toast.error("Fields are empty!");
      
      await axios.post(`${ENDPOINT}/createnote`, { title, paragraph }, { withCredentials: true }).then((res) => {
        setNote([...note, res?.data?.note])
      if (res?.data?.success)
        toast.success(res?.data?.message);
    }).catch((err) => {
      console.log(err);
      toast.error(err?.response?.data?.message);
    })
    setTitle("");
    setParagraph("");
  }



  const deleteNotes = async (_id) => {
    await axios.delete(`${ENDPOINT}/deletenote/${_id}`).then((res) => {
      dispatch(addBin(res?.data?.note));
      toast.success(res.data.message);
      setNote(note.filter(item => item._id !== _id));
    }).catch((err) => {
      console.log(err);
      toast.error(err.response.data.message);
    })
  }

  const dispatch = useDispatch();
  const text = useSelector(store => store.search.text);

  useEffect(() => {
    const getAllNotesData = async () => {
      await axios.get(`${ENDPOINT}?q=${text}`, { withCredentials: true }).then((res) => {
        dispatch(getNotes(res.data.notes));
        console.log(res.data.notes);
        setNote(res?.data?.notes)
        setLoading(false);
      }).catch((err) => {
        console.log(err);
        toast.error(err?.response?.data?.message)
      })
    }
    getAllNotesData();
  }, [text, update])

  return (
    <div className='m-4 w-full'>
      <div className='w-full flex items-center justify-center'>
        <div className='w-[50%] shadow-md border-2 border-gray-100 rounded-md' onClick={expand}>
          {
            expanded && (
              <div className='flex items-center justify-between  p-2'>
                <input type='text' value={title} onChange={titleChangeEventHandler} placeholder='Title' className='outline-none w-full font-semibold' />
                {/* <IoMdAddCircle size={"30px"} className='cursor-pointer' onClick={addingNotes} /> */}
                <button onClick={addingNotes} className="bg-teal-400 shadow-lg shadow-teal-300 text-white hover:bg-teal-500 p-1 rounded-full"><IoMdAddCircle size={"30px"} /></button>
              </div>
            )
          }

          <div className='p-2' >
            <input type='text' value={paragraph} onChange={paragraphChangeEventHandler} placeholder='Take a note...' className='outline-none w-full' />
          </div>
        </div>
      </div>
      <div className='m-5 grid grid-cols-5 gap-2'>

        {
          !loading ? (
            note.length !== 0 ? note.map((item, idx) => {
              return (
                <div key={idx}>
                  <Note item={item} onDelete={deleteNotes} update={update} setUpdate={setUpdate}/>
                </div>
              )
            }) : <NoteNotFound />
          ) : (
            shimmer.map((item, idx) => {
              return (
                <Shimmer key={idx} />
              )
            })
          )
        }

      </div>
    </div>
  )
}

export default Feed