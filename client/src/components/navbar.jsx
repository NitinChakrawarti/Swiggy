import React from 'react'
import logo from '../assets/logo.png'
import { FaSearch } from "react-icons/fa";
import { BiSolidOffer } from "react-icons/bi";
import { MdPerson } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import { CiShoppingCart } from "react-icons/ci";
import { RxCaretDown } from "react-icons/rx";
const Navbar = () => {

    const [show, setShow] = React.useState(false)

    const togglesidemenu = () => {
        console.log('clicked');
        setShow(true)
    }
    const hidesidemenu = () => {
        console.log('clicked');
        setShow(false)
    }

    const navitems =[
        {
            title:'Search',
            icon:<FaSearch className=' text-[20px] text-black/70  ' />
        },
        {
            title:'Offers',
            icon:<BiSolidOffer className=' text-[20px] text-black/70  ' />,
            power: 'New'
        },
        {
            title:'Support',
            icon:<BiSupport className=' text-[20px] text-black/70  ' />
        },
        {
            title:'Profile',
            icon:<MdPerson className=' text-[20px] text-black/70  ' />
        },
        {
            title:'Cart',
            icon:<CiShoppingCart className=' text-[20px] text-black/70  ' />,
            power: '2'
        }
    ]

    return (
        <>

            <div className="bg-black/90 w-full h-full fixed duration-500" style={
                {
                    opacity: show ? 1 : 0,
                    visibility: show ? 'visible' : 'hidden'
                }
            } onClick={hidesidemenu} >
                <div onClick={(e) => {
                    e.stopPropagation()
                }} className="w-[500px] h-full absolute bg-white duration-[600ms] "
                    style={
                        {
                            left: show ? '0' : '-500px',
                        }
                    }
                ></div>
            </div>
            <header className='p-[15px] shadow-xl'>
                <div className="max-w-[1200px] mx-auto flex items-center justify-between">
                    <div className="flex items-center">
                        <div className="w-[70px]">
                            <img className="w-full" src={logo} />
                        </div>
                        <div className=" flex gap-2">
                            <span className="font-bold border-b-2 pb-1 border-black ">Bhopal</span> Mp Nagar
                            <RxCaretDown className='inline text-primary font-bold text-[30px] cursor-pointer' onClick={togglesidemenu} />
                        </div>
                    </div>
                    <nav className="">
                        <ul className="max-w-[1200px] mx-auto flex  justify-between gap-10"> 
                            {
                                navitems.map((item, index) => {
                                    return (
                                        <li key={index} className=" cursor-pointer flex items-center gap-2">
                                            {item.icon}
                                            <span className=" font-semibold ">{item.title} <sup>{item.power}</sup> </span>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </nav>
                </div>


            </header>
        </>

    )
}

export default Navbar
