import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { parseHtmlEntities } from './functions'
import axios from 'axios'
import '../css/video.css'
import { IconContext } from 'react-icons/lib';
import { BsFillCheckCircleFill } from "react-icons/bs";

const Video = (props) => {
    const [id, setId] = useState("")
    const [videoTitle, setVideoTitle] = useState("")
    const [videoImg, setVideoImg] = useState("")
    const [videoChannel, setVideoChannel] = useState("")
    const [videoChannelId, setVideoChannelId] = useState("")
    const { setChannelId, setVideoId, APIKey, channelId, Img } = props
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&maxResults=1&order=date&key=${APIKey}`)
        .then((result) => {
            let video = result.data.items[0]
            setId(video.id.videoId)
            setVideoImg(video.snippet.thumbnails.medium.url)
            setVideoTitle(parseHtmlEntities(video.snippet.title))
            setVideoChannel(video.snippet.channelTitle)
            setVideoChannelId(video.snippet.channelId)
        })
        .catch((err) => {
            console.log(err)
        })
    },[])

    const clickHandler = (e) => {
        e.preventDefault()
        setChannelId(videoChannelId)
        setVideoId(id)
        navigate(`/video/${id}`)
    }

    return (
        <div className='container'>
            <div className='video'>
                <img onClick={clickHandler} src={videoImg} alt='thumbnail for the video'></img>
            </div>
            <div className='video-description'>
                <div className='video-description-left'>
                    <img src={Img} className='channel-icon' alt='channel logo'></img>
                </div>
                <div className='video-description-right'>
                    <p onClick={clickHandler} className='title'>{videoTitle}</p>
                    <div className='channel'>
                        <a href={`https://www.youtube.com/channel/${videoChannelId}`}>{videoChannel}</a>
                        <IconContext.Provider value={{ className: "checkmark"}}>
                            <BsFillCheckCircleFill />
                        </IconContext.Provider>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Video