import React, { useState,useEffect } from 'react'
import Message from './Message'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import { db } from '../firebase/firebase'
import { MdOutlineCompassCalibration } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { setEmails } from '../Redux/Appslice'


const Messages = () => {

  const dispatch = useDispatch()
  const {searchtext,emails} =useSelector(store=>store.appslice)

  const [temptemail, settemptemail] = useState(emails)
 
  useEffect(() => {
    const q =query(collection(db,"emails"), orderBy('createdAt','desc'))
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const allemails = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      dispatch(setEmails(allemails))
    });
    // Cleanup function to unsubscribe from Firestore when the component unmounts
    return () => unsubscribe();
  }, []);

  useEffect(()=>{
    const emailfilter = emails?.filter((email) => {
      return email?.subject?.toLowerCase().includes(searchtext.toLowerCase()) || 
             email?.to?.toLowerCase().includes(searchtext.toLowerCase()) || 
             email?.message?.toLowerCase().includes(searchtext.toLowerCase());
    });
    settemptemail(emailfilter)
  },[searchtext,emails])
  return (
    <div>
      {
        temptemail && temptemail?.map((email)=> <Message emails={email}/>)
      }
    </div>
  )
}

export default Messages