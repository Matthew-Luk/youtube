import React, {useEffect, useState} from 'react'
import '../css/video.css'
import axios from 'axios'
import nba from '../images/nba.jpg'
import { IconContext } from 'react-icons/lib';
import { BsFillCheckCircleFill } from "react-icons/bs";

const Video4 = () => {
    const [video4, setVideo4] = useState("")
    const [video4Title, setVideo4Title] = useState("")
    const [video4Channel, setVideo4Channel] = useState("")

    /*useEffect(() => {
        axios.get("https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCWJ2lWNubArHWmf3FIHbfcQ&maxResults=1&order=date&key=AIzaSyDUTRDsWBWMeamCR3lfll4dYnaIrW6JTjs")
        .then((result) => {
            var video = result.data.items[0]
            setVideo4(video.id.videoId)
            setVideo4Title(video.snippet.title)
            setVideo4Channel(video.snippet.channelTitle)
        })
        .catch((err) => {
            console.log(err)
        })
    },[])*/

    const url1 = `https://www.youtube.com/embed/${video4}`
    const url2 = `https://www.youtube.com/watch?v=${video4}`
    
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
                    <img src={nba} className='channel-icon'></img>
                </div>
                <div className='video-description-right'>
                    <a className='title' href={url2}>{video4Title}</a>
                    <div className='channel'>
                        <a href='https://www.youtube.com/@NBA'>{video4Channel}</a>
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