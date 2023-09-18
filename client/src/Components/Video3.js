import React, {useEffect, useState} from 'react'
import { useNavigate } from "react-router-dom";
import {parseHtmlEntities} from './functions'
import axios from 'axios'
import '../css/video.css'
import dunkey from '../images/dunkey.jpg'
import { IconContext } from 'react-icons/lib';
import { BsFillCheckCircleFill } from "react-icons/bs";

const Video3 = (props) => {
    const [video3, setVideo3] = useState("")
    const [video3Title, setVideo3Title] = useState("")
    const [video3Img, setVideo3Img] = useState("")
    const [video3Channel, setVideo3Channel] = useState("")
    const [video3ChannelId, setVideo3ChannelId] = useState("")
    const {setChannelId, setVideoId, APIKey} = props
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCsvn_Po0SmunchJYOWpOxMg&maxResults=1&order=date&key=${APIKey}`)
        .then((result) => {
            let video = result.data.items[0]
            setVideo3(video.id.videoId)
            setVideo3Img(video.snippet.thumbnails.medium.url)
            setVideo3Title(parseHtmlEntities(video.snippet.title))
            setVideo3Channel(video.snippet.channelTitle)
            setVideo3ChannelId(video.snippet.channelId)
        })
        .catch((err) => {
            console.log(err)
        })
    },[])

    const clickHandler = (e) => {
        e.preventDefault()
        setChannelId(video3ChannelId)
        setVideoId(video3)
        navigate(`/video/${video3}`)
    }
    
    return (
        <div className='container'>
            <div className='video'>
                <img src = {video3Img} alt='thumbnail for the video'></img>
            </div>
            <div className='video-description'>
                <div className='video-description-left'>
                    <img src={dunkey} className='channel-icon'></img>
                </div>
                <div className='video-description-right'>
                    <a onClick={clickHandler} className='title'>{video3Title}</a>
                    <div className='channel'>
                        <a href={`https://www.youtube.com/channel/${video3ChannelId}`}>{video3Channel}</a>
                        <IconContext.Provider value={{ className: "checkmark"}}>
                            <BsFillCheckCircleFill />
                        </IconContext.Provider>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Video3