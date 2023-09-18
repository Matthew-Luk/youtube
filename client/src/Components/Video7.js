import React, {useEffect, useState} from 'react'
import { useNavigate } from "react-router-dom";
import {parseHtmlEntities} from './functions'
import axios from 'axios'
import '../css/video.css'
import theorists from '../images/theorists.jpg'
import { IconContext } from 'react-icons/lib';
import { BsFillCheckCircleFill } from "react-icons/bs";

const Video7 = (props) => {
    const [video7, setVideo7] = useState("")
    const [video7Title, setVideo7Title] = useState("")
    const [video7Channel, setVideo7Channel] = useState("")
    const [video7ChannelId, setVideo7ChannelId] = useState("")
    const {setChannelId, setVideoId, APIKey} = props
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCHYoe8kQ-7Gn9ASOlmI0k6Q&maxResults=1&order=date&key=${APIKey}`)
        .then((result) => {
            let video = result.data.items[0]
            setVideo7(video.id.videoId)
            setVideo7Title(parseHtmlEntities(video.snippet.title))
            setVideo7Channel(video.snippet.channelTitle)
            setVideo7ChannelId(video.snippet.channelId)
        })
        .catch((err) => {
            console.log(err)
        })
    },[])

    const clickHandler = (e) => {
        e.preventDefault()
        setChannelId(video7ChannelId)
        setVideoId(video7)
        navigate(`/video/${video7}`)
    }

    return (
        <div className='container'>
            <iframe className='video'
                src = {`https://www.youtube.com/embed/${video7}`}
                title="YouTube video player" frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
            </iframe>
            <div className='video-description'>
                <div className='video-description-left'>
                    <img src={theorists} className='channel-icon'></img>
                </div>
                <div className='video-description-right'>
                    <a onClick={clickHandler} className='title'>{video7Title}</a>
                    <div className='channel'>
                        <a href={`https://www.youtube.com/channel/${video7ChannelId}`}>{video7Channel}</a>
                        <IconContext.Provider value={{ className: "checkmark"}}>
                            <BsFillCheckCircleFill />
                        </IconContext.Provider>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Video7