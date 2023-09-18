import React, {useEffect, useState} from 'react'
import { useNavigate } from "react-router-dom";
import {parseHtmlEntities} from './functions'
import axios from 'axios'
import '../css/video.css'
import food from '../images/food.jpg'
import { IconContext } from 'react-icons/lib';
import { BsFillCheckCircleFill } from "react-icons/bs";

const Video8 = (props) => {
    const [video8, setVideo8] = useState("")
    const [video8Title, setVideo8Title] = useState("")
    const [video8Img, setVideo8Img] = useState("")
    const [video8Channel, setVideo8Channel] = useState("")
    const [video8ChannelId, setVideo8ChannelId] = useState("")
    const {setChannelId, setVideoId, APIKey} = props
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCwiTOchWeKjrJZw7S1H__1g&maxResults=1&order=date&key=${APIKey}`)
        .then((result) => {
            let video = result.data.items[0]
            setVideo8(video.id.videoId)
            setVideo8Img(video.snippet.thumbnails.medium.url)
            setVideo8Title(parseHtmlEntities(video.snippet.title))
            setVideo8Channel(video.snippet.channelTitle)
            setVideo8ChannelId(video.snippet.channelId)
        })
        .catch((err) => {
            console.log(err)
        })
    },[])

    const clickHandler = (e) => {
        e.preventDefault()
        setChannelId(video8ChannelId)
        setVideoId(video8)
        navigate(`/video/${video8}`)
    }

    return (
        <div className='container'>
            <div className='video'>
                <img src = {video8Img} alt='thumbnail for the video'></img>
            </div>
            <div className='video-description'>
                <div className='video-description-left'>
                    <img src={food} className='channel-icon'></img>
                </div>
                <div className='video-description-right'>
                    <a onClick={clickHandler} className='title'>{video8Title}</a>
                    <div className='channel'>
                        <a href={`https://www.youtube.com/channel/${video8ChannelId}`}>{video8Channel}</a>
                        <IconContext.Provider value={{ className: "checkmark"}}>
                            <BsFillCheckCircleFill />
                        </IconContext.Provider>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Video8