import React, {useEffect, useState} from 'react'
import '../css/video.css'
import axios from 'axios'
import mk from '../images/mk.jpg'
import { IconContext } from 'react-icons/lib';
import { BsFillCheckCircleFill } from "react-icons/bs";

const Video2 = () => {
    const [video2, setVideo2] = useState("")
    const [video2Title, setVideo2Title] = useState("")
    const [video2Channel, setVideo2Channel] = useState("")

    useEffect(() => {
        axios.get("https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UC1bwliGvJogr7cWK0nT2Eag&maxResults=1&order=date&key=AIzaSyDUTRDsWBWMeamCR3lfll4dYnaIrW6JTjs")
        .then((result) => {
            var video = result.data.items[0]
            setVideo2(video.id.videoId)
            setVideo2Title(video.snippet.title)
            setVideo2Channel(video.snippet.channelTitle)
        })
        .catch((err) => {
            console.log(err)
        })
    },[])

    const url1 = `https://www.youtube.com/embed/${video2}`
    const url2 = `https://www.youtube.com/watch?v=${video2}`
    
    return (
        <div className='container'>
            <iframe className='video'
            src = {url1}
            title="YouTube video player" frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen></iframe>
            <div className='video-description'>
                <div className='video-description-left'>
                    <img src={mk} className='channel-icon'></img>
                </div>
                <div className='video-description-right'>
                    <a className='title' href={url2}>{video2Title}</a>
                    <div className='channel'>
                        <a href='https://www.youtube.com/@MKIceAndFire'>{video2Channel}</a>
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