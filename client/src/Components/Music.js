import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { convertDate2 } from './functions'
import '../css/main.css'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { IconContext } from 'react-icons/lib';
import { BsFillCheckCircleFill } from "react-icons/bs";

const Music = (props) => {
    const [musicList, setMusicList] = useState([])
    const {setVideoId, setChannelId, searchValue, setSearchValue, APIKey} = props
    const navigate = useNavigate()

    useEffect(() => {
        if(APIKey === ""){
            navigate('/login')
        }else{
            axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=15&regionCode=us&videoCategoryId=10&key=${APIKey}`)
            .then((result) => {
                console.log(result)
                setMusicList(result.data.items)
            })
            .catch((err) => {
                console.log(err)
            })
        }
    },[])

    const clickHandler = (e) => {
        setChannelId(e.snippet.channelId)
        setVideoId(e.id)
        navigate(`/video/${e.id}`)
    }

    return (
        <div className='home'>
            <Navbar searchValue={searchValue} setSearchValue={setSearchValue}/>
            <Sidebar/>
            <div className='main'>
                <div className='videos mt-80'>
                {
                    musicList.map((item,index) => (
                        <div onClick={() => clickHandler(item)} className='container' key={index}>
                            <iframe className='video'
                                src = {`https://www.youtube.com/embed/${item.id}?control=0`}
                                title="YouTube video player" frameBorder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowFullScreen>
                            </iframe>
                            <div className='video-description'>
                                <div className='video-description-left'>
                                    <img src={item.snippet.thumbnails.default.url} alt='channel icon' className='channel-icon'></img>
                                </div>
                                <div className='video-description-right'>
                                    <p className='title'>{item.snippet.title}</p>
                                    <div className='channel'>
                                        <a href={`https://www.youtube.com/channel/${item.snippet.channelId}`}>{item.snippet.channelTitle}</a>
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

export default Music