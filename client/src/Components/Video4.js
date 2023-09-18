import React, {useEffect, useState} from 'react'
import { useNavigate } from "react-router-dom";
import {parseHtmlEntities} from './functions'
import axios from 'axios'
import '../css/video.css'
import nba from '../images/nba.jpg'
import { IconContext } from 'react-icons/lib';
import { BsFillCheckCircleFill } from "react-icons/bs";

const Video4 = (props) => {
    const [video4, setVideo4] = useState("")
    const [video4Title, setVideo4Title] = useState("")
    const [video4Img, setVideo4Img] = useState("")
    const [video4Channel, setVideo4Channel] = useState("")
    const [video4ChannelId, setVideo4ChannelId] = useState("")
    const {setChannelId, setVideoId, APIKey} = props
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCWJ2lWNubArHWmf3FIHbfcQ&maxResults=1&order=date&key=${APIKey}`)
        .then((result) => {
            let video = result.data.items[0]
            setVideo4(video.id.videoId)
            setVideo4Img(video.snippet.thumbnails.medium.url)
            setVideo4Title(parseHtmlEntities(video.snippet.title))
            setVideo4Channel(video.snippet.channelTitle)
            setVideo4ChannelId(video.snippet.channelId)
        })
        .catch((err) => {
            console.log(err)
        })
    },[])

    const clickHandler = (e) => {
        e.preventDefault()
        setChannelId(video4ChannelId)
        setVideoId(video4)
        navigate(`/video/${video4}`)
    }
    
    return (
        <div className='container'>
            <div className='video'>
                <img src = {video4Img} alt='thumbnail for the video'></img>
            </div>
            <div className='video-description'>
                <div className='video-description-left'>
                    <img src={nba} className='channel-icon'></img>
                </div>
                <div className='video-description-right'>
                    <a onClick={clickHandler} className='title'>{video4Title}</a>
                    <div className='channel'>
                        <a href={`https://www.youtube.com/channel/${video4ChannelId}`}>{video4Channel}</a>
                        <IconContext.Provider value={{ className: "checkmark"}}>
                            <BsFillCheckCircleFill />
                        </IconContext.Provider>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Video4