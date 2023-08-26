import React from 'react';
import { useNavigate } from "react-router-dom";
import '../css/navbar.css'
import { IconContext } from 'react-icons/lib';
import { IoMenuOutline } from "react-icons/io5";
import { IoEllipsisVerticalSharp } from "react-icons/io5";
import { IoMicSharp } from "react-icons/io5";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { ImYoutube } from "react-icons/im";
import { BiUserCircle } from "react-icons/bi";

const Navbar = () => {
    const navigate = useNavigate()

    const homeHandler = (e) => {
        navigate("/home")
    }

    const searchHandler = (e) => {
    
    }

    return (
        <div className='navbar'>
            <div className='navbar-left'>
                <IconContext.Provider value={{className: "icon menu"}}>
                    <IoMenuOutline />
                </IconContext.Provider>
                <div onClick={homeHandler} className='youtube'>
                    <IconContext.Provider value={{className: "icon youtube-logo"}}>
                        <ImYoutube />
                    </IconContext.Provider>
                    <p className='font-link'>YouTube</p>
                </div>
            </div>
            <form className='navbar-mid'>
                <input className='searchBar' placeholder='Search'></input>
                <button className='searchButton'>
                    <IconContext.Provider value={{className: "icon magnify"}}>
                        <HiOutlineMagnifyingGlass />
                    </IconContext.Provider>
                </button>
                <div className='mic-container'>
                    <IconContext.Provider value={{className: "icon mic"}}>
                        <IoMicSharp />
                    </IconContext.Provider>
                </div>
            </form>
            <div className='navbar-right'>
                <IconContext.Provider value={{className: "icon ellipsis"}}>
                    <IoEllipsisVerticalSharp />
                </IconContext.Provider>
                <button className='signInButton'>
                    <IconContext.Provider value={{className: "icon usercircle"}}>
                        <BiUserCircle />
                    </IconContext.Provider>
                    <p className='signInButton-text'>Sign in</p>
                </button>
            </div>
        </div>
    )
}

export default Navbar