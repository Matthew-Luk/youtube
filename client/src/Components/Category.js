import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { convertDate2 } from './functions'
import '../css/main.css'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { IconContext } from 'react-icons/lib';
import { BsFillCheckCircleFill } from "react-icons/bs";

const Category = (props) => {
    const [videoList, setVideoList] = useState([])
    const { setVideoId, setChannelId, searchValue, setSearchValue, APIKey, sbCategory, setSbCategory } = props
    const navigate = useNavigate()

    useEffect(() => {
        if(APIKey === ""){
            navigate('/login')
        }else{
            axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=15&regionCode=us&videoCategoryId=${sbCategory}&key=${APIKey}`)
            .then((result) => {
                setVideoList(result.data.items)
            })
            .catch((err) => {
                console.log(err)
            })
        }
    },[sbCategory])

    const clickHandler = (e) => {
        setChannelId(e.snippet.channelId)
        setVideoId(e.id)
        navigate(`/video/${e.id}`)
    }

    return (
        <div className='home'>
            <Navbar searchValue={searchValue} setSearchValue={setSearchValue}/>
            <Sidebar sbCategory={sbCategory} setSbCategory={setSbCategory}/>
            <div className='main'>
                <div className='videos mt-80'>
                {
                    videoList.map((item,index) => (
                        <div className='container' key={index}>
                            <div onClick={() => clickHandler(item)} className='video'>
                                <img src = {item.snippet.thumbnails.medium.url} alt='thumbnail for the video'></img>
                            </div>
                            <div className='video-description'>
                                <div className='video-description-left'>
                                    <img src={item.snippet.thumbnails.default.url} alt='channel icon' className='channel-icon'></img>
                                </div>
                                <div className='video-description-right'>
                                    <p onClick={() => clickHandler(item)} className='title'>{item.snippet.title}</p>
                                    <div className='channel'>
                                        <a href={`https://www.youtube.com/channel/${item.snippet.channelId}`} target="_blank" rel="noreferrer">{item.snippet.channelTitle}</a>
                                        <IconContext.Provider value={{ className: "checkmark"}}>
                                            <BsFillCheckCircleFill />
                                        </IconContext.Provider>
                                        <p className='published'>{convertDate2(item.snippet.publishedAt)}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
                </div>
            </div>
        </div>
    )
}

export default Category