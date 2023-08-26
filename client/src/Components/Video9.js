import React, {useEffect, useState} from 'react'
import { useNavigate } from "react-router-dom";
import {parseHtmlEntities} from './functions'
import axios from 'axios'
import '../css/video.css'
import ufc from '../images/ufc.jpg'
import { IconContext } from 'react-icons/lib';
import { BsFillCheckCircleFill } from "react-icons/bs";

const Video9 = (props) => {
    const [video9, setVideo9] = useState("")
    const [video9Title, setVideo9Title] = useState("")
    const [video9Channel, setVideo9Channel] = useState("")
    const [video9ChannelId, setVideo9ChannelId] = useState("")
    const {setChannelId, setVideoId} = props
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCvgfXK4nTYKudb0rFR6noLA&maxResults=1&order=date&key=${process.env.REACT_APP_API_KEY}`)
        .then((result) => {
            let video = result.data.items[0]
            setVideo9(video.id.videoId)
            setVideo9Title(parseHtmlEntities(video.snippet.title))
            setVideo9Channel(video.snippet.channelTitle)
            setVideo9ChannelId(video.snippet.channelId)
        })
        .catch((err) => {
            console.log(err)
        })
    },[])

    const clickHandler = (e) => {
        e.preventDefault()
        setChannelId(video9ChannelId)
        setVideoId(video9)
        navigate(`/video/${video9}`)
    }

    return (
        <div className='container'>
            <iframe className='video'
                src = {`https://www.youtube.com/embed/${video9}`}
                title="YouTube video player" frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
            </iframe>
            <div className='video-description'>
                <div className='video-description-left'>
                    <img src={ufc} className='channel-icon'></img>
                </div>
                <div className='video-description-right'>
                    <a onClick={clickHandler} className='title'>{video9Title}</a>
                    <div className='channel'>
                        <a href={`https://www.youtube.com/channel/${video9ChannelId}`}>{video9Channel}</a>
                        <IconContext.Provider value={{ className: "checkmark"}}>
                            <BsFillCheckCircleFill />
                        </IconContext.Provider>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Video9