import React, {useEffect, useState} from 'react'
import { useParams, useNavigate } from "react-router-dom";
import '../css/video.css'
import axios from 'axios'
import jre from '../images/jre.jpg'
import { IconContext } from 'react-icons/lib';
import { BsFillCheckCircleFill } from "react-icons/bs";

const Video1 = () => {
    const [video1, setVideo1] = useState("")
    const [video1Title, setVideo1Title] = useState("")
    const [video1Channel, setVideo1Channel] = useState("")
    const {id} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get("https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCzQUP1qoWDoEbmsQxvdjxgQ&maxResults=1&order=date&key=AIzaSyDUTRDsWBWMeamCR3lfll4dYnaIrW6JTjs")
        .then((result) => {
            var video = result.data.items[0]
            setVideo1(video.id.videoId)
            setVideo1Title(video.snippet.title)
            setVideo1Channel(video.snippet.channelTitle)
        })
        .catch((err) => {
            console.log(err)
        })
    },[])

    const url1 = `https://www.youtube.com/embed/${video1}`
    const url2 = `https://www.youtube.com/watch?v=${video1}`

    const clickHandler = (e) => {
        e.preventDefault()
    }

    return (
        <div className='container'>
            <iframe className='video'
            src = {url1}
            title="YouTube video player" frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen></iframe>
            <div className='video-description'>
                <div className='video-description-left'>
                    <img src={jre} className='channel-icon'></img>
                </div>
                <div className='video-description-right'>
                    <a className='title' href={url2}>{video1Title}</a>
                    <div className='channel'>
                        <a href='https://www.youtube.com/channel/UCzQUP1qoWDoEbmsQxvdjxgQ'>{video1Channel}</a>
                        <IconContext.Provider value={{ className: "checkmark"}}>
                            <BsFillCheckCircleFill />
                        </IconContext.Provider>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Video1