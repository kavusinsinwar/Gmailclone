import React from 'react'
import { MdCropSquare, MdStar } from 'react-icons/md'
import Mail from './Mail'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setselectedEmail } from '../Redux/Appslice'
import { motion } from "framer-motion";
const Message = ({emails}) => {
   
    // agar hum ko ract mai khahi jana hota hai to hum navigate ka use karte hai
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const openMail =() =>{
        dispatch(setselectedEmail(emails))
        navigate(`/mail/${emails.id}`);
    }
    return (
        <motion.div
        onClick={openMail}
        className="flex items-start justify-between border-b border-t border-gray-200 px-4 py-2 text-sm hover:cursor-pointer"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.02, boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)" }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      >
        <div className="flex items-center gap-3">
          <div className="flex-none text-gray-300">
            <MdCropSquare className="w-5 h-5" />
          </div>
          <div className="flex-none text-gray-300">
            <MdStar className="w-5 h-5" />
          </div>
        </div>
        <div>
          <h1 className='font-medium'> <span className='font-thin'>to- </span>{emails?.to}</h1>
        </div>
        <div className="flex-1 ml-4">
          <p className="text-gray-600 truncate inline-block max-w-full">{emails?.message}</p>
        </div>
        <div className="flex-none text-gray-400 text-sm">
          <p>{new Date(emails?.createdAt?.seconds * 1000).toUTCString()}</p>
        </div>
      </motion.div>
    )
}

export default Message