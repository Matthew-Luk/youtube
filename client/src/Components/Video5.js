import React, {useEffect, useState} from 'react'
import '../css/video.css'
import axios from 'axios'
import mango from '../images/mango.jpg'
import { IconContext } from 'react-icons/lib';
import { BsFillCheckCircleFill } from "react-icons/bs";

const Video5 = () => {
    const [video5, setVideo5] = useState("")
    const [video5Title, setVideo5Title] = useState("")
    const [video5Channel, setVideo5Channel] = useState("")

    /*useEffect(() => {
        axios.get("https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCLeBjrmfpAFGqDRJNL1PF5g&maxResults=1&order=date&key=AIzaSyDUTRDsWBWMeamCR3lfll4dYnaIrW6JTjs")
        .then((result) => {
            var video = result.data.items[0]
            setVideo5(video.id.videoId)
            setVideo5Title(video.snippet.title)
            setVideo5Channel(video.snippet.channelTitle)
        })
        .catch((err) => {
            console.log(err)
        })
    },[])*/

    const url1 = `https://www.youtube.com/embed/${video5}`
    const url2 = `https://www.youtube.com/watch?v=${video5}`
    
    return (
        <div className='container'>
            <iframe className='video'
            src = {url1}
            title="YouTube video player" frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen></iframe>
            <div className='video-description'>
                <div className='video-description-left'>
                    <img src={mango} className='channel-icon'></img>
                </div>
                <div className='video-description-right'>
                    <a className='title' href={url2}>{video5Title}</a>
                    <div className='channel'>
                        <a href='https://www.youtube.com/@MissMangoButt'>{video5Channel}</a>
                        <IconContext.Provider value={{ className: "checkmark"}}>
                            <BsFillCheckCircleFill />
                        </IconContext.Provider>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Video5