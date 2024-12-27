import React, { useState } from 'react'
import { RxCross2 } from 'react-icons/rx'
import { useDispatch, useSelector } from 'react-redux'
import { setOpen } from '../Redux/Appslice';
import { db } from '../firebase/firebase';
import { collection, addDoc, serverTimestamp } from "firebase/firestore";


const Sendmail = () => {
  const [fromdate, setfromdata] = useState({
    to: "",
    subject: "",
    message: ""
  });

  const open = useSelector(store => store.appslice.open);
  const dispatch = useDispatch();

  const Changehandler = (e) => {
    setfromdata({ ...fromdate, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    await addDoc(collection(db, "emails"),{
      to: fromdate.to,
      subject: fromdate.subject,
      message: fromdate.message,
      createdAt: serverTimestamp(),
    })
    dispatch(setOpen(false))
    setfromdata({
      to: "",
      subject: "",
      message: ""
    })
  };

  return (
    <div className={`${open ? 'block' : 'hidden'} bg-white w-[550px] shadow-xl shadow-slate-600 rounded-t-md mr-[20px] fixed bottom-0 right-0`}>
      <div className='flex px-3 py-2 bg-[#f2f6fc] justify-between rounded-t-md'>
        <h1>New Message</h1>
        <div onClick={() => dispatch(setOpen(false))} className='p-2 rounded-full hover:bg-gray-200 cursor-pointer'>
          <RxCross2 size={'10px'} />
        </div>
      </div>

      <form onSubmit={submitHandler} className='flex flex-col p-3 gap-2 bg-white'>
        <input onChange={Changehandler} value={fromdate.to} name='to' type="text" placeholder='To' className='outline-none py-1' />
        <input onChange={Changehandler} value={fromdate.subject} name='subject' type="text" placeholder='Subject' className='outline-none py-1' />
        <textarea onChange={Changehandler} value={fromdate.message} name="message" cols={'30'} rows={'10'} className='outline-none py-1'></textarea>
        <button type='submit' className='bg-[#0b57d0] rounded-full w-fit px-4 text-white font-medium'>Send</button>
      </form>
    </div>
  )
}

export default Sendmail;
