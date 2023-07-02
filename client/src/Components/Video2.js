import React, {useEffect, useState} from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import '../css/video.css'
import mk from '../images/mk.jpg'
import { IconContext } from 'react-icons/lib';
import { BsFillCheckCircleFill } from "react-icons/bs";

const Video2 = (props) => {
    const [video2, setVideo2] = useState("")
    const [video2Title, setVideo2Title] = useState("")
    const [video2Channel, setVideo2Channel] = useState("")
    const [video2ChannelId, setVideo2ChannelId] = useState("")
    const {setChannelId, setVideoId} = props
    const navigate = useNavigate()

    useEffect(() => {
        axios.get("https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UC1bwliGvJogr7cWK0nT2Eag&maxResults=1&order=date&key=AIzaSyDUTRDsWBWMeamCR3lfll4dYnaIrW6JTjs")
        .then((result) => {
            var video = result.data.items[0]
            setVideo2(video.id.videoId)
            setVideo2Title(video.snippet.title)
            setVideo2Channel(video.snippet.channelTitle)
            setVideo2ChannelId(video.snippet.channelId)
        })
        .catch((err) => {
            console.log(err)
        })
    },[])

    const clickHandler = (e) => {
        e.preventDefault()
        setChannelId(video2ChannelId)
        setVideoId(video2)
        navigate("/video")
    }
    
    return (
        <div className='container'>
            <iframe className='video'
                src = {`https://www.youtube.com/embed/${video2}`}
                title="YouTube video player" frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
            </iframe>
            <div className='video-description'>
                <div className='video-description-left'>
                    <img src={mk} className='channel-icon'></img>
                </div>
                <div className='video-description-right'>
                    <a onClick={clickHandler} className='title'>{video2Title}</a>
                    <div className='channel'>
                        <a href={`https://www.youtube.com/channel/${video2Channel}`}>{video2Channel}</a>
                        <IconContext.Provider value={{ className: "checkmark"}}>
                            <BsFillCheckCircleFill />
                        </IconContext.Provider>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Video2