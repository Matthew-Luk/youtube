import React, {useEffect, useState} from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import '../css/video.css'
import food from '../images/food.jpg'
import { IconContext } from 'react-icons/lib';
import { BsFillCheckCircleFill } from "react-icons/bs";

const Video8 = (props) => {
    const [video8, setVideo8] = useState("")
    const [video8Title, setVideo8Title] = useState("")
    const [video8Channel, setVideo8Channel] = useState("")
    const [video8ChannelId, setVideo8ChannelId] = useState("")
    const {setChannelId, setVideoId} = props
    const navigate = useNavigate()

    useEffect(() => {
        axios.get("https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCwiTOchWeKjrJZw7S1H__1g&maxResults=1&order=date&key=AIzaSyDUTRDsWBWMeamCR3lfll4dYnaIrW6JTjs")
        .then((result) => {
            var video = result.data.items[0]
            setVideo8(video.id.videoId)
            setVideo8Title(video.snippet.title)
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
        navigate("/video")
    }

    return (
        <div className='container'>
            <iframe className='video'
                src = {`https://www.youtube.com/embed/${video8}`}
                title="YouTube video player" frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
            </iframe>
            <div className='video-description'>
                <div className='video-description-left'>
                    <img src={food} className='channel-icon'></img>
                </div>
                <div className='video-description-right'>
                    <a onClick={clickHandler} className='title'>{video8Title}</a>
                    <div className='channel'>
                        <a href={`https://www.youtube.com/channel/${video8Channel}`}>{video8Channel}</a>
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