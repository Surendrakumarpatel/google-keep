import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import { ENDPOINT } from '../utils/constant'
import { toast } from 'react-hot-toast'
import { getNotes } from '../utils/noteSlice'
 
const Body = () => {
  
    return (
        <div className='flex '>
            <Outlet />
        </div>
    )
}

export default Body