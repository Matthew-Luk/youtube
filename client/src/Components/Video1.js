import React, {useEffect, useState} from 'react'
import { useNavigate } from "react-router-dom";
import {parseHtmlEntities} from './functions'
import axios from 'axios'
import '../css/video.css'
import jre from '../images/jre.jpg'
import { IconContext } from 'react-icons/lib';
import { BsFillCheckCircleFill } from "react-icons/bs";

const Video1 = (props) => {
    const [video1, setVideo1] = useState("")
    const [video1Title, setVideo1Title] = useState("")
    const [video1Img, setVideo1Img] = useState("")
    const [video1Channel, setVideo1Channel] = useState("")
    const [video1ChannelId, setVideo1ChannelId] = useState("")
    const {setChannelId, setVideoId, APIKey} = props
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCzQUP1qoWDoEbmsQxvdjxgQ&maxResults=1&order=date&key=${APIKey}`)
        .then((result) => {
            let video = result.data.items[0]
            setVideo1(video.id.videoId)
            setVideo1Img(video.snippet.thumbnails.medium.url)
            setVideo1Title(parseHtmlEntities(video.snippet.title))
            setVideo1Channel(video.snippet.channelTitle)
            setVideo1ChannelId(video.snippet.channelId)
        })
        .catch((err) => {
            console.log(err)
        })
    },[])

    const clickHandler = (e) => {
        e.preventDefault()
        setChannelId(video1ChannelId)
        setVideoId(video1)
        navigate(`/video/${video1}`)
    }

    return (
        <div className='container'>
            <div className='video'>
                <img src = {video1Img} alt='thumbnail for the video'></img>
            </div>
            <div className='video-description'>
                <div className='video-description-left'>
                    <img src={jre} className='channel-icon' alt='JRE logo'></img>
                </div>
                <div className='video-description-right'>
                    <p onClick={clickHandler} className='title'>{video1Title}</p>
                    <div className='channel'>
                        <a href={`https://www.youtube.com/channel/${video1ChannelId}`}>{video1Channel}</a>
                        <IconContext.Provider value={{ className: "checkmark"}}>
                            <BsFillCheckCircleFill />
                        </IconContext.Provider>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Video1