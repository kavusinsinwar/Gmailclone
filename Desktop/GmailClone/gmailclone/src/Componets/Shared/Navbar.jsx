import React, { useEffect } from 'react'
import { IoIosSearch } from 'react-icons/io';
import { MdExitToApp } from 'react-icons/md';
import { CiCircleQuestion } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import { CiSettings } from "react-icons/ci";
import { FaPowerOff } from 'react-icons/fa';
import { PiDotsNineBold } from "react-icons/pi";
import Avatar from 'react-avatar';
import { useDispatch, useSelector } from 'react-redux';
import { setsearchtext, setuser } from '../../Redux/Appslice';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase/firebase';
const Navbar = () => {
    const {user} = useSelector(store=>store.appslice)
    const [input, setInput] = useState("")
    const dispatch = useDispatch()
    const [toggle, settoggle] = useState(false)
    
    const signOuthandler =()=>{
        signOut(auth).then(()=>{
            dispatch(setuser(null)).catch((err)=>{
                console.log(err)
            })
        })
    }




    useEffect(()=>{
        dispatch(setsearchtext(input))
    },[input])
    return (
        <div className='flex items-center justify-between mx-3 h-16'>
            <div className=' flex items-center gap-10'>
                <div className='flex items-center gap-2'>
                    <div className='p-3 rounded-full hover:bg-gray-100 cursor-pointer '>
                        <RxHamburgerMenu size={"20px"} />
                    </div>
                    <img className='w-8 ' src="https://static.vecteezy.com/system/resources/previews/020/964/377/original/gmail-mail-icon-for-web-design-free-png.png" alt="" />
                    <h1 className='text-2xl text-gray-500 font-medium'>Gmail</h1>
                </div>
            </div>
            <div className='md:block hidden w-[50%] mr-50'>
                <div className='flex items-center bg-[#EAF1FB] px-2 py-3 rounded-full'>
                    <IoIosSearch size={"24px"} />
                    <input type=" text" 
                    value={input}
                    onChange={(e)=>setInput(e.target.value)}
                    className='rounded-full w-full bg-gray-400 bg-transparent outline-none px-1' 
                    placeholder='Search Mail' />
                </div>
            </div>
            <div>
                <div className='md:block hidden'>
                    <div className='flex gap-2 items-center'>
                        <div className='p-3 rounded-full hover:bg-gray-100 cursor-pointer'>
                            <CiCircleQuestion size={"22px"} />
                        </div>
                        <div className='p-3 rounded-full hover:bg-gray-100 cursor-pointer'>
                            <CiSettings size={"22px"} />
                        </div>
                        <div className='p-3 rounded-full hover:bg-gray-100 cursor-pointer'>
                            <PiDotsNineBold  size={"22px"} />
                        </div>
                        <div className='cursor-pointer relative'>
                            <Avatar onClick={()=>{
                                settoggle(!toggle)
                            }}  src={user?.photoURL || "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAsJCQcJCQcJCQkJCwkJCQkJCQsJCwsMCwsLDA0QDBEODQ4MEhkSJRodJR0ZHxwpKRYlNzU2GioyPi0pMBk7IRP/2wBDAQcICAsJCxULCxUsHRkdLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCz/wAARCAEyATMDASIAAhEBAxEB/8QAGwABAAIDAQEAAAAAAAAAAAAAAAUGAgMEAQf/xAA/EAEAAgECAgYIBAMFCQEAAAAAAQIDBBEhMQUSIkFhcRMjMlGBkaHBQlJysWKS8BQVM4LRJENEU2OTssLh8f/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD62AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOTP0hosG8Tk694/Di2tO/jPL6o3L0xqLbxhx0xx3Tbe9vtH0BOsbZMVPbvSv6rVj91XyarV5d/SZ8kxPOItNa/wAtdoaefP6gtM6vRRz1GD/uV+0vI1uhn/icH89VXAWuuo01turnw2/TkpP3bVO2jwZ0yZscxOPJekx+S9o/aQW4VzF0pr8e0TeuSI7sld5/mjaUhh6Y019ozUtin80dum/w4/QEmMaZMeSsXx3res8rVmJj6MgAAAAAAAAAAAAAAAAAAAAAAAAAROu6U6k2w6aYm3K2XhMV8KePj/UB2arW6fSx2562SY3rjr7U+M+6EJqekNVqd6zbqY5/Bj3iJj+K3OXLM2tM2taZtad7TM7zMz3zMvAAAAAAAAAAAbMWbNgt18V7Unv6s8J8JjlKX0vS2O+1NTEY7coyR7Ez4x3IQBb4mJjeNpiYiYmOUw9VvR6/NpezxvhnnSZ418aSsGHNhz465MVutWfnE+6YBsAAAAAAAAAAAAAAAAAAAABFdKa2ccTpsVtslo9baOdaz+GPGf658A09I9IzfrafT2nqca5clfxfw1mO73/1vFAAAAAAAAAAAAAAAA36bVZtLk9JTjE8L0n2bx4/ZoAWvBnxajHXLjnes84nnWe+JbVY0eqvpMsWjecVtoy198e+PGFlral61vWd62iLVmOUxIMgAAAAAAAAAAAAAAAAAc2s1NdLgvknabz2cdffeeXy5yrNrWva17Tva0za0zzmZ4zLs6S1Hp9RatZ9Xh3x090z+K32+DiAAAAAAAB1Yej9XmiLdWMdZ78u8Tt4Vjj+wOUS1eiMf4895/RWtY+u7L+6dPtwy5o8+pMfsCHEhk6KzRvOLJS/hbsW+fGHDkx5MVppkpatvdbv8gYgAAAAAJbonV9W39lvPZtvOGZ7rd9fj3IkibVmtqzMWrMWrMc4mJ3iQXAaNLnrqcGPLHOY2vEd144TDeAAAAAAAAAAAAAAA5tbn/s+my5IntzHUx/qtwj5c/g6UL0zl3vgwRyrWctvO3Zj7giQAAAAAHta3vatKVm17T1a1jnM/wBc3iY6N03o8fp7x6zNXeu/4cc8o855yDZpNBi0+177Xz7e1Ps08KRP7uwAAAGGXFizUmmWsWr3e+J98SzAQGr0l9NbfebYrT2L/a3i5llyY6ZaXx3rvS0bT4eMT747lezYrYMt8V+dJ5++J4xaPMGsAAAAAEp0Pn6uXJp55ZI69f1V5/T9k4qWHJOHLiyxw9Het58o5x8t1sjaYiY5TG8eUg9AAAAAAAAAAAAAAVjX5PSazVT+W/o48qR1Vn//AFULW69r3nna1rT8ZmQeAAAAAA2YMXps+HFPK94i235Y7UrIhOjIidXE7ezhyTHnO1fumwAAAAAAEX0rijbDmiOO84r/APlX7pRydIxvo83D2bY7R59aIBBAAAAAAbLNoMnpNHprd8U6k+dJmn2VlPdD23016/kzXiPK0RYEkAAAAAAAAAAAAADDLPVx5be7HeflWVSjlHwW3NG+LNEc5x5Ij41lUo5R5QAAAAAADs6MtFdXEd98eSsfS32Tit4ck4cuLLG/YtEz5cpWOJiYiY41mImJjvieMA9AAAAAAcnSNuro8v8AFfFSPn1vs60V0tl7WDBE+x63J52jasT9fmCMAAAAAATXQs+r1Uf9SlvnXb7IVM9CR2NXP8eOPjFZkEuAAAAAAAAAAAAABwneJ5TEx81PnhM190zHy4Lgq2tp6PV6qu23rLWjyv2o/cGgAAAAABLdG6qLVjT3ntV/wp/NX8vnCJImYmJiZiYneJjnE+ALQI/S9I0vEU1ExXJwiLzwpbz90pDhw8eIAAANOfU4NNEzlntbb1x1269vh3QDLNmpgxXy35Rwiu+03t3VhXcmS+XJfJed73tNrec90Nup1OXVX61+Fa7xjpXfq0j/AF98tAAAAAAACd6Grtp81vzZ7bf5a1hBLJ0bT0ei00TzvFsk/wCe02gHYAAAAAAAAAAAAAAgumMXVz4ssRwy06s/qp/8Tri6SwTm0uTaO1in0tfHqxO8fLcFcAAAAAAG3Dp9RqLTXFXfaY61p4Ur5z9ktg6N02Lacvrr/wAcdiPKn+u4ITuidp6szMRPdMx3RLdh1WqwcMeSYr+W21q/yzwWC1Mdq9S1K2p+WYia/JxZOi9Nbecdr4pnu9usfCeP1Bz16Wyx7eHHb9M2r9J3Zf3vbbhp67+OSdvpDC3RWoj2MuK36utWf2l5HRWr774Ij9V5/wDUGGTpLWZImK2riieHqo2n+ad5ce82tx3ta0+Mzaf3SlOiY/3ueZ8MVYj623/Z3YdLpsH+HjiLcuvPav8AzTxBXeW8TvvHMWLNptPnifSUiZ/NHC8eUovUdHZsO98czkxxxmIjt1jxjvBwgAAAAA9rSclqY6+1ktWkedp2W6ta0rSlY7NaxWPKI2hAdFYPSan0sx2dPWbR43tvWPusAAAAAAAAAAAAAAABO3EAVjW6edNqMlIjsWnr4v0W7vhycyx9I6WdTh3pG+XFvakR+KJ51+P2VwAAB2aPQ21O2TJ1qYN+Exwtk8K+Hj/UNFo51FvSZP8AApO0x/zLR+GPCO9NxERERERERwiIjhER3A8pSmOlaUrFaVjs1rHCGQAAAAAAAAA4dXoKZutkxRFc3OY5Vv5+KGtE1tatomLVnaYnnErO49bo41FZyUj19I4fxxH4Z+wIMJ3iZieExvExPdIA8l67+i9JOfP6W8eqwTE+F8nOI+HOQS3R+n/s2mpW0bZL+syeFrd3w5OsAAAAAAAAAAAAAAAAAEF0po5x2nU449XefWxHKt57/Kf65p15atbVtW0RNbRMWiY4TE9wKg26fBfUZqYq7xE9q9vy0jnPn7nRr9DfS2m9d509uU99P4bfZIdH6f0GCLWjbLm2vf3xH4a/AHTSlMdK46V6tKxFaxHdEMgAAAAAAAAAAAABF9JaWI/2mke6M0R9L/aUWs8xW0WraImtomJie+JjaYQGXSZq6mdNjrN7WnfF3b0nlaZ90d4NeDBl1GWmHHHG3Gbd1KxztKz4MOLT4seLHG1KRtG/OZ75nxlq0ekppMXVja2S205b7e1PujwjudQAAAAAAAAAAAAAAAAAAAAMbVreJrasTWeExMRMT5xLC1NuMcY/ZtAc422pE8uE/RqmJjnwAAAAAAAAAAABnWkzznaPd3gxiszwhsrjpWetFY622022jfbffbf3MoiIjg9AAAAAAAAAAAAAAAAAAAAAAAAAeTG/N6AwnHHdwYTS0d3ybgHON8xE84iXnUp7gaRt6lfH5nUr4/MGobupT3PYrWOUQDTFZnlE/JlGOe/b4NoDyK1jlD0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAegAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//9k="}  size='53' round={true}/>
                            <AnimatePresence>
                                {
                                    toggle && (
                                        <motion.div initial={{opacity:0,scale:0.8}}
                                        animate={{opacity:1,scale:0.8}}
                                        exit={{opacity:0,scale:0.8}}
                                        transition={{duration:0.5}}
                                        className='absolute  right-2 z-20 shadow-lg bg-white rounded-md'>
                                        <p onClick={signOuthandler} className= ' flex   items-center  p-10 gap-2 underline'><FaPowerOff color="#FF6380" size={"20px"}/> LogOut</p>
                                        </motion.div>
                                    )
                                }
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar