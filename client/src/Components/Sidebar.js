import { IconContext } from 'react-icons/lib';
import { HiHome } from "react-icons/hi";
import { MdSubscriptions } from "react-icons/md";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { BsFillFileEarmarkPlayFill } from "react-icons/bs";
import { AiOutlineFire } from "react-icons/ai";
import { AiOutlineShopping } from "react-icons/ai";
import { GrHistory } from "react-icons/gr";
import { BiCameraMovie } from "react-icons/bi";
import { RiMusicLine } from "react-icons/ri";
import { BsBroadcast } from "react-icons/bs";
import { IoGameControllerOutline } from "react-icons/io5";
import { IoNewspaperOutline } from "react-icons/io5";
import { AiOutlineTrophy } from "react-icons/ai";
import { MdOutlinePodcasts } from "react-icons/md";
import { AiOutlineSetting } from "react-icons/ai";
import { CiFlag1 } from "react-icons/ci";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { BsPatchExclamation } from "react-icons/bs";
import React from 'react'
import '../css/sidebar.css'

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className='sidebar-container'>
                <button className='element selected'>
                    <IconContext.Provider value={{className: "icon"}}>
                        <HiHome />
                    </IconContext.Provider>
                    <p className='element-text'>Home</p>
                </button>
                <button className='element'>
                    <IconContext.Provider value={{className: "icon"}}>
                        <BsFillFileEarmarkPlayFill />
                    </IconContext.Provider>
                    <p className='element-text'>Shorts</p>
                </button>
                <button className='element'>
                    <IconContext.Provider value={{className: "icon"}}>
                        <MdSubscriptions />
                    </IconContext.Provider>
                    <p className='element-text'>Subscriptions</p>
                </button>
            </div>
            <div className='sidebar-container'>
                <button className='element'>
                    <IconContext.Provider value={{className: "icon"}}>
                        <MdOutlineVideoLibrary />
                    </IconContext.Provider>
                    <p className='element-text'>Library</p>
                </button>
                <button className='element'>
                    <IconContext.Provider value={{className: "icon"}}>
                        <GrHistory />
                    </IconContext.Provider>
                    <p className='element-text'>History</p>
                </button>
            </div>
            <div className='sidebar-container'>
                <p className='explore'>Explore</p>
                <button className='element'>
                    <IconContext.Provider value={{className: "icon"}}>
                        <AiOutlineFire />
                    </IconContext.Provider>
                    <p className='element-text'>Trending</p>
                </button>
                <button className='element'>
                    <IconContext.Provider value={{className: "icon"}}>
                        <AiOutlineShopping />
                    </IconContext.Provider>
                    <p className='element-text'>Shopping</p>
                </button>
                <button className='element'>
                    <IconContext.Provider value={{className: "icon"}}>
                        <RiMusicLine />
                    </IconContext.Provider>
                    <p className='element-text'>Music</p>
                </button>
                <button className='element'>
                    <IconContext.Provider value={{className: "icon"}}>
                        <BiCameraMovie />
                    </IconContext.Provider>
                    <p className='element-text'>Movies & TV</p>
                </button>
                <button className='element'>
                    <IconContext.Provider value={{className: "icon"}}>
                        <BsBroadcast />
                    </IconContext.Provider>
                    <p className='element-text'>Live</p>
                </button>
                <button className='element'>
                    <IconContext.Provider value={{className: "icon"}}>
                        <IoGameControllerOutline />
                    </IconContext.Provider>
                    <p className='element-text'>Gaming</p>
                </button>
                <button className='element'>
                    <IconContext.Provider value={{className: "icon"}}>
                        <IoNewspaperOutline />
                    </IconContext.Provider>
                    <p className='element-text'>News</p>
                </button>
                <button className='element'>
                    <IconContext.Provider value={{className: "icon"}}>
                        <AiOutlineTrophy />
                    </IconContext.Provider>
                    <p className='element-text'>Sports</p>
                </button>
                <button className='element'>
                    <IconContext.Provider value={{className: "icon"}}>
                        <MdOutlinePodcasts />
                    </IconContext.Provider>
                    <p className='element-text'>Podcasts</p>
                </button>
            </div>
            <div className='sidebar-container'>
                <button className='element'>
                    <IconContext.Provider value={{className: "icon"}}>
                        <AiOutlineSetting />
                    </IconContext.Provider>
                    <p className='element-text'>Settings</p>
                </button>
                <button className='element'>
                    <IconContext.Provider value={{className: "icon"}}>
                        <CiFlag1 />
                    </IconContext.Provider>
                    <p className='element-text'>Report history</p>
                </button>
                <button className='element'>
                    <IconContext.Provider value={{className: "icon"}}>
                        <AiOutlineQuestionCircle />
                    </IconContext.Provider>
                    <p className='element-text'>Help</p>
                </button>
                <button className='element'>
                    <IconContext.Provider value={{className: "icon"}}>
                        <BsPatchExclamation />
                    </IconContext.Provider>
                    <p className='element-text'>Send feedback</p>
                </button>
            </div>
            <div className='sidebar-container footer'>
                <div className='footer-line'>
                    <a href='https://about.youtube/'>About</a>
                    <a href='https://blog.youtube/'>Press</a>
                    <a href='https://www.youtube.com/howyoutubeworks/policies/copyright/'>Copyright</a>
                </div>
                <div className='footer-line'>
                    <a href='https://www.youtube.com/t/contact_us/'>Contact us</a>
                    <a href='https://www.youtube.com/creators/'>Creators</a>
                </div>
                <div className='footer-line mb-12'>
                    <a href='https://www.youtube.com/ads/'>Advertise</a>
                    <a href='https://developers.google.com/youtube'>Developers</a>
                </div>
                <div className='footer-line'>
                    <a href='https://www.youtube.com/t/terms'>Terms</a>
                    <a href='https://policies.google.com/u/2/privacy?hl=en'>Policy & Safety</a>
                </div>
                <div className='footer-line'>
                    <a href='https://www.youtube.com/howyoutubeworks/?utm_campaign=ytgen&utm_source=ythp&utm_medium=LeftNav&utm_content=txt&u=https%3A%2F%2Fwww.youtube.com%2Fhowyoutubeworks%3Futm_source%3Dythp%26utm_medium%3DLeftNav%26utm_campaign%3Dytgen'>How YouTube works</a>
                </div>
                <div className='footer-line'>
                    <a href='https://www.youtube.com/new'>Test new features</a>
                </div>
                <div className='footer-line mb-12'>
                    <a href='https://tv.youtube.com/learn/nflsundayticket/'>NFL Sunday Ticket</a>
                </div>
                <div className='trademark'>
                    <p>© 2023 Google LLC x Matthew Luk</p>
                </div>
            </div>
        </div>
    )
}

export default Sidebar