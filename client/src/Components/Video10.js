import React, {useEffect, useState} from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import '../css/video.css'
import jre from '../images/jre.jpg'
import { IconContext } from 'react-icons/lib';
import { BsFillCheckCircleFill } from "react-icons/bs";

const Video10 = (props) => {
    const [video1, setVideo1] = useState("")
    const [video1Title, setVideo1Title] = useState("")
    const [video1Channel, setVideo1Channel] = useState("")
    const [video1ChannelId, setVideo1ChannelId] = useState("")
    const {setChannelId, setVideoId} = props
    const navigate = useNavigate()

    useEffect(() => {
        axios.get("https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCzQUP1qoWDoEbmsQxvdjxgQ&maxResults=1&order=date&key=AIzaSyDUTRDsWBWMeamCR3lfll4dYnaIrW6JTjs")
        .then((result) => {
            var video = result.data.items[0]
            setVideo1(video.id.videoId)
            setVideo1Title(video.snippet.title)
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
        navigate("/video")
    }

    return (
        <div className='container'>
            <iframe className='video'
                src = {`https://www.youtube.com/embed/${video1}`}
                title="YouTube video player" frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
            </iframe>
            <div className='video-description'>
                <div className='video-description-left'>
                    <img src={jre} className='channel-icon'></img>
                </div>
                <div className='video-description-right'>
                    <a onClick={clickHandler} className='title'>{video1Title}</a>
                    <div className='channel'>
                        <a href={`https://www.youtube.com/channel/${video1Channel}`}>{video1Channel}</a>
                        <IconContext.Provider value={{ className: "checkmark"}}>
                            <BsFillCheckCircleFill />
                        </IconContext.Provider>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Video10