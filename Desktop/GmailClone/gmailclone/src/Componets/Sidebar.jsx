import React from 'react'
import { LuPencil, LuStar } from 'react-icons/lu'
import { MdOutlineDrafts,  MdOutlineKeyboardArrowDown,  MdOutlineWatchLater } from 'react-icons/md'
import { TbSend2 } from 'react-icons/tb'
import { useDispatch } from 'react-redux'
import { setOpen } from '../Redux/Appslice'

const sidebarIteams = [
    {
        icon: <LuPencil size={24} />,
        text: "Inbox"
    },
    {
        icon: <LuStar size={24} />,
        text: "Starred"
    },
    {
        icon: <MdOutlineWatchLater size={24} />,
        text: "Snozed"
    },
    {
        icon: <TbSend2 size={24} />,
        text: "Sent"
    },
    {
        icon: <MdOutlineDrafts size={24} />,
        text: "Draft"
    },
    {
        icon: <MdOutlineKeyboardArrowDown size={24} />,
        text: "More"
    },
]
const Sidebar = () => {

    // const [open, setOpen] =useState(false) //this is local variable but we need to call this into sendmail componendt but we cant call it beacuse its local now for that we are gonnaa use "redux" which help use to provide globle valriable
   const dispatch = useDispatch()
    return (
        
        <div className='w-[15%]'>
            <div className='p-3'>
                <button onClick={()=>dispatch(setOpen(true))} className='flex items-center gap-2 p-4 rounded-2xl hover:shadow-md bg-[#c2e7ff]'>
                    <LuPencil size={24} />
                    Compose
                </button>
            </div>
            <div className='text-gray-700'>
               { sidebarIteams.map((item,index)=>{
                    return(
                    <div key={index}
                     className='flex items-center gap-4 pl-6 py-1 rounded-r-full cursor-pointer my-2 hover:bg-gray-200'>
                        {item.icon}
                        <p>{item.text}</p>
                    </div>
                    )
                })}

            </div>
        </div>
    )
}

export default Sidebar