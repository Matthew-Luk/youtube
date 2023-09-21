import React from 'react'
import '../css/sidebar.css'
import { getYear } from './functions';
import { useNavigate } from "react-router-dom";
import { IconContext } from 'react-icons/lib';
import { HiHome } from "react-icons/hi";
import { MdSubscriptions } from "react-icons/md";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { BsFillFileEarmarkPlayFill } from "react-icons/bs";
import { AiOutlineFire } from "react-icons/ai";
import { GiMaterialsScience } from "react-icons/gi";
import { GrHistory } from "react-icons/gr";
import { BiCameraMovie } from "react-icons/bi";
import { RiMusicLine } from "react-icons/ri";
import { LuDog } from "react-icons/lu";
import { IoGameControllerOutline } from "react-icons/io5";
import { IoNewspaperOutline } from "react-icons/io5";
import { AiOutlineTrophy } from "react-icons/ai";
import { AiOutlineCar } from "react-icons/ai";
import { AiOutlineSetting } from "react-icons/ai";
import { CiFlag1 } from "react-icons/ci";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { BsPatchExclamation } from "react-icons/bs";

const Sidebar = (props) => {
    const { sbCategory, setSbCategory } = props
    const navigate = useNavigate()

    const categoryHandler = (e) => {
        const key = {
            "trending": 0,
            "autos": 2,
            "music": 10,
            "animals": 15,
            "sports": 17,
            "gaming": 20,
            "podcasts": 21,
            "entertainment": 24,
            "news": 25,
            "science": 28
        }
        console.log(e.target.value)
        if(e.target.value === undefined){
            setSbCategory(key[e.target.parentElement.value])
            navigate(`/category/${e.target.parentElement.value}`)
        }else{
            setSbCategory(key[e.target.value])
            navigate(`/category/${e.target.value}`)
        }
    }

    const homeHandler = (e) => {
        navigate("/home")
    }

    return (
        <div className='sidebar'>
            <div className='sidebar-container'>
                <button onClick={homeHandler} className={document.URL.includes("home")? "element selected": "element"}>
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
                <button onClick={categoryHandler} value={'trending'} className={document.URL.includes("trending")? "element selected": "element"}>
                    <IconContext.Provider value={{className: "icon"}}>
                        <AiOutlineFire />
                    </IconContext.Provider>
                    <p className='element-text'>Trending</p>
                </button>
                <button onClick={categoryHandler} value={'music'} className={document.URL.includes("music")? "element selected": "element"}>
                    <IconContext.Provider value={{className: "icon"}}>
                        <RiMusicLine />
                    </IconContext.Provider>
                    <p className='element-text'>Music</p>
                </button>
                <button onClick={categoryHandler} value={'entertainment'} className={document.URL.includes("entertainment")? "element selected": "element"}>
                    <IconContext.Provider value={{className: "icon"}}>
                        <BiCameraMovie />
                    </IconContext.Provider>
                    <p className='element-text'>Entertainment</p>
                </button>
                <button onClick={categoryHandler} value={'gaming'} className={document.URL.includes("gaming")? "element selected": "element"}>
                    <IconContext.Provider value={{className: "icon"}}>
                        <IoGameControllerOutline />
                    </IconContext.Provider>
                    <p className='element-text'>Gaming</p>
                </button>
                <button onClick={categoryHandler} value={'news'} className={document.URL.includes("news")? "element selected": "element"}>
                    <IconContext.Provider value={{className: "icon"}}>
                        <IoNewspaperOutline />
                    </IconContext.Provider>
                    <p className='element-text'>News</p>
                </button>
                <button onClick={categoryHandler} value={'sports'} className={document.URL.includes("sports")? "element selected": "element"}>
                    <IconContext.Provider value={{className: "icon"}}>
                        <AiOutlineTrophy />
                    </IconContext.Provider>
                    <p className='element-text'>Sports</p>
                </button>
                <button onClick={categoryHandler} value={'animals'} className={document.URL.includes("animals")? "element selected": "element"}>
                    <IconContext.Provider value={{className: "icon"}}>
                        <LuDog />
                    </IconContext.Provider>
                    <p className='element-text'>Animals</p>
                </button>
                <button onClick={categoryHandler} value={'autos'} className={document.URL.includes("autos")? "element selected": "element"}>
                    <IconContext.Provider value={{className: "icon"}}>
                        <AiOutlineCar />
                    </IconContext.Provider>
                    <p className='element-text'>Autos & Vehicles</p>
                </button>
                <button onClick={categoryHandler} value={'science'} className={document.URL.includes("science")? "element selected": "element"}>
                    <IconContext.Provider value={{className: "icon"}}>
                        <GiMaterialsScience />
                    </IconContext.Provider>
                    <p className='element-text'>Science & Tech</p>
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
                    <a href='https://github.com/Matthew-Luk/youtube'>© {getYear()} Google LLC x Matthew Luk</a>
                </div>
            </div>
        </div>
    )
}

export default Sidebar