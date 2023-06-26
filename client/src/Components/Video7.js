import React, {useEffect, useState} from 'react'
import '../css/video.css'
import axios from 'axios'
import theorists from '../images/theorists.jpg'
import { IconContext } from 'react-icons/lib';
import { BsFillCheckCircleFill } from "react-icons/bs";

const Video7 = () => {
    const [video7, setVideo7] = useState("")
    const [video7Title, setVideo7Title] = useState("")
    const [video7Channel, setVideo7Channel] = useState("")

    /*useEffect(() => {
        axios.get("https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCHYoe8kQ-7Gn9ASOlmI0k6Q&maxResults=1&order=date&key=AIzaSyDUTRDsWBWMeamCR3lfll4dYnaIrW6JTjs")
        .then((result) => {
            var video = result.data.items[0]
            setVideo7(video.id.videoId)
            setVideo7Title(video.snippet.title)
            setVideo7Channel(video.snippet.channelTitle)
        })
        .catch((err) => {
            console.log(err)
        })
    },[])*/

    const url1 = `https://www.youtube.com/embed/${video7}`
    const url2 = `https://www.youtube.com/watch?v=${video7}`

    return (
        <div className='container'>
            <iframe className='video'
                src = {url1}
                title="YouTube video player" frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
            </iframe>
            <div className='video-description'>
                <div className='video-description-left'>
                    <img src={theorists} className='channel-icon'></img>
                </div>
                <div className='video-description-right'>
                    <a className='title' href={url2}>{video7Title}</a>
                    <div className='channel'>
                        <a href='https://www.youtube.com/@FoodTheory'>{video7Channel}</a>
                        <IconContext.Provider value={{ className: "checkmark"}}>
                            <BsFillCheckCircleFill />
                        </IconContext.Provider>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Video7