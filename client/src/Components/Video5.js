import React, {useEffect, useState} from 'react'
import { useNavigate } from "react-router-dom";
import {parseHtmlEntities} from './functions'
import axios from 'axios'
import '../css/video.css'
import mango from '../images/mango.jpg'
import { IconContext } from 'react-icons/lib';
import { BsFillCheckCircleFill } from "react-icons/bs";

const Video5 = (props) => {
    const [video5, setVideo5] = useState("")
    const [video5Title, setVideo5Title] = useState("")
    const [video5Channel, setVideo5Channel] = useState("")
    const [video5ChannelId, setVideo5ChannelId] = useState("")
    const {setChannelId, setVideoId, APIKey} = props
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCLeBjrmfpAFGqDRJNL1PF5g&maxResults=1&order=date&key=${APIKey}`)
        .then((result) => {
            let video = result.data.items[0]
            setVideo5(video.id.videoId)
            setVideo5Title(parseHtmlEntities(video.snippet.title))
            setVideo5Channel(video.snippet.channelTitle)
            setVideo5ChannelId(video.snippet.channelId)
        })
        .catch((err) => {
            console.log(err)
        })
    },[])

    const clickHandler = (e) => {
        e.preventDefault()
        setChannelId(video5ChannelId)
        setVideoId(video5)
        navigate(`/video/${video5}`)
    }
    
    return (
        <div className='container'>
            <iframe className='video'
                src = {`https://www.youtube.com/embed/${video5}`}
                title="YouTube video player" frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
            </iframe>
            <div className='video-description'>
                <div className='video-description-left'>
                    <img src={mango} className='channel-icon'></img>
                </div>
                <div className='video-description-right'>
                    <a onClick={clickHandler} className='title'>{video5Title}</a>
                    <div className='channel'>
                        <a href={`https://www.youtube.com/channel/${video5ChannelId}`}>{video5Channel}</a>
                        <IconContext.Provider value={{ className: "checkmark"}}>
                            <BsFillCheckCircleFill />
                        </IconContext.Provider>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Video5