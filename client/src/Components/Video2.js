import React, {useEffect, useState} from 'react'
import { useNavigate } from "react-router-dom";
import {parseHtmlEntities} from './functions'
import axios from 'axios'
import '../css/video.css'
import mk from '../images/mk.jpg'
import { IconContext } from 'react-icons/lib';
import { BsFillCheckCircleFill } from "react-icons/bs";

const Video2 = (props) => {
    const [video2, setVideo2] = useState("")
    const [video2Title, setVideo2Title] = useState("")
    const [video2Img, setVideo2Img] = useState("")
    const [video2Channel, setVideo2Channel] = useState("")
    const [video2ChannelId, setVideo2ChannelId] = useState("")
    const {setChannelId, setVideoId, APIKey} = props
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UC1bwliGvJogr7cWK0nT2Eag&maxResults=1&order=date&key=${APIKey}`)
        .then((result) => {
            let video = result.data.items[0]
            setVideo2(video.id.videoId)
            setVideo2Img(video.snippet.thumbnails.medium.url)
            setVideo2Title(parseHtmlEntities(video.snippet.title))
            setVideo2Channel(video.snippet.channelTitle)
            setVideo2ChannelId(video.snippet.channelId)
        })
        .catch((err) => {
            console.log(err)
        })
    },[])

    const clickHandler = (e) => {
        e.preventDefault()
        setChannelId(video2ChannelId)
        setVideoId(video2)
        navigate(`/video/${video2}`)
    }
    
    return (
        <div className='container'>
            <div className='video'>
                <img src = {video2Img} alt='thumbnail for the video'></img>
            </div>
            <div className='video-description'>
                <div className='video-description-left'>
                    <img src={mk} className='channel-icon'></img>
                </div>
                <div className='video-description-right'>
                    <p onClick={clickHandler} className='title'>{video2Title}</p>
                    <div className='channel'>
                        <a href={`https://www.youtube.com/channel/${video2ChannelId}`}>{video2Channel}</a>
                        <IconContext.Provider value={{ className: "checkmark"}}>
                            <BsFillCheckCircleFill />
                        </IconContext.Provider>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Video2