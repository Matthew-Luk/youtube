import React, {useEffect, useState} from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import '../css/video.css'
import nba from '../images/nba.jpg'
import { IconContext } from 'react-icons/lib';
import { BsFillCheckCircleFill } from "react-icons/bs";

const Video4 = (props) => {
    const [video4, setVideo4] = useState("")
    const [video4Title, setVideo4Title] = useState("")
    const [video4Channel, setVideo4Channel] = useState("")
    const [video4ChannelId, setVideo4ChannelId] = useState("")
    const {setChannelId, setVideoId} = props
    const navigate = useNavigate()

    useEffect(() => {
        axios.get("https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCWJ2lWNubArHWmf3FIHbfcQ&maxResults=1&order=date&key=AIzaSyDUTRDsWBWMeamCR3lfll4dYnaIrW6JTjs")
        .then((result) => {
            var video = result.data.items[0]
            setVideo4(video.id.videoId)
            setVideo4Title(video.snippet.title)
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
        navigate("/video")
    }
    
    return (
        <div className='container'>
            <iframe className='video'
                src = {`https://www.youtube.com/embed/${video4}`}
                title="YouTube video player" frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
            </iframe>
            <div className='video-description'>
                <div className='video-description-left'>
                    <img src={nba} className='channel-icon'></img>
                </div>
                <div className='video-description-right'>
                    <a onClick={clickHandler} className='title'>{video4Title}</a>
                    <div className='channel'>
                        <a href={`https://www.youtube.com/channel/${video4Channel}`}>{video4Channel}</a>
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