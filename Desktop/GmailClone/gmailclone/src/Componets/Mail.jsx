import React from 'react';
import { IoMdMore, IoMdArrowBack } from "react-icons/io";
import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdDeleteOutline,
  MdOutlineReport,
  MdOutlineMarkEmailUnread,
  MdOutlineWatchLater,
  MdOutlineAddTask,
  MdOutlineDriveFileMove,
  MdMore,
} from "react-icons/md";
import { BiArchiveIn } from "react-icons/bi";
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebase/firebase';
import { motion } from 'framer-motion';

const Mail = () => {
  const { selectedEmail } = useSelector((store) => store.appslice);
  const navigate = useNavigate();
  const param = useParams();

  const deletemailbyid = async (id) => {
    try {
      await deleteDoc(doc(db, "emails", id));
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <motion.div
      className="rounded-xl flex-1 bg-white mx-5"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div className="items-center flex justify-between px-4">
        <div className="flex items-center gap-5 text-gray-700 py-2">
          <motion.div
            onClick={() => navigate('/')}
            className="rounded-full p-2 hover:bg-gray-100 cursor-pointer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <IoMdArrowBack size={"20px"} />
          </motion.div>
          {[ 
            { icon: BiArchiveIn, action: null },
            { icon: MdOutlineReport, action: null },
            { icon: MdOutlineMarkEmailUnread, action: null },
            { icon: MdDeleteOutline, action: () => deletemailbyid(param.id) },
            { icon: MdOutlineWatchLater, action: null },
            { icon: MdOutlineAddTask, action: null },
            { icon: MdOutlineDriveFileMove, action: null },
            { icon: MdMore, action: null },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="rounded-full p-2 hover:bg-gray-100 cursor-pointer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={item.action}
            >
              <item.icon size={"20px"} />
            </motion.div>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <motion.button
            className="hover:rounded-full hover:bg-gray-100"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <MdKeyboardArrowLeft size={"20px"} />
          </motion.button>
          <motion.button
            className="hover:rounded-full hover:bg-gray-100"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <MdKeyboardArrowRight size={"20px"} />
          </motion.button>
        </div>
      </div>
      <motion.div
        className="h-[90vh] overflow-y-auto p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center justify-between bg-white gap-1">
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-medium">{selectedEmail?.subject}</h1>
            <span className="text-sm bg-gray-200 rounded-md px-2">inbox</span>
          </div>
          <div className="flex-none text-gray-500 my-5 text-sm">
            <p>{new Date(selectedEmail?.createdAt?.seconds * 1000).toUTCString()}</p>
          </div>
        </div>
        <div className="text-gray-500 text-sm">
          <h1>{selectedEmail?.to}</h1>
          <span>to me</span>
        </div>
        <div className="my-10">
          <p>{selectedEmail?.message}</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Mail;
