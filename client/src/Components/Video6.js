import React, {useEffect, useState} from 'react'
import { useNavigate } from "react-router-dom";
import {parseHtmlEntities} from './functions'
import axios from 'axios'
import '../css/video.css'
import jeff from '../images/jeff.jpg'
import { IconContext } from 'react-icons/lib';
import { BsFillCheckCircleFill } from "react-icons/bs";

const Video6 = (props) => {
    const [video6, setVideo6] = useState("")
    const [video6Title, setVideo6Title] = useState("")
    const [video6Channel, setVideo6Channel] = useState("")
    const [video6ChannelId, setVideo6ChannelId] = useState("")
    const {setChannelId, setVideoId, APIKey} = props
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UC68TLK0mAEzUyHx5x5k-S1Q&maxResults=1&order=date&key=${APIKey}`)
        .then((result) => {
            let video = result.data.items[0]
            setVideo6(video.id.videoId)
            setVideo6Title(parseHtmlEntities(video.snippet.title))
            setVideo6Channel(video.snippet.channelTitle)
            setVideo6ChannelId(video.snippet.channelId)
        })
        .catch((err) => {
            console.log(err)
        })
    },[])

    const clickHandler = (e) => {
        e.preventDefault()
        setChannelId(video6ChannelId)
        setVideoId(video6)
        navigate(`/video/${video6}`)
    }

    return (
        <div className='container'>
            <iframe className='video'
                src = {`https://www.youtube.com/embed/${video6}`}
                title="YouTube video player" frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
            </iframe>
            <div className='video-description'>
                <div className='video-description-left'>
                    <img src={jeff} className='channel-icon'></img>
                </div>
                <div className='video-description-right'>
                    <a onClick={clickHandler} className='title'>{video6Title}</a>
                    <div className='channel'>
                        <a href={`https://www.youtube.com/channel/${video6ChannelId}`}>{video6Channel}</a>
                        <IconContext.Provider value={{ className: "checkmark"}}>
                            <BsFillCheckCircleFill />
                        </IconContext.Provider>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Video6