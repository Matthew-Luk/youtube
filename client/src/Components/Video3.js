import React, {useEffect, useState} from 'react'
import '../css/video.css'
import axios from 'axios'
import dunkey from '../images/dunkey.jpg'
import { IconContext } from 'react-icons/lib';
import { BsFillCheckCircleFill } from "react-icons/bs";

const Video3 = () => {
    const [video3, setVideo3] = useState("")
    const [video3Title, setVideo3Title] = useState("")
    const [video3Channel, setVideo3Channel] = useState("")

    /*useEffect(() => {
        axios.get("https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCsvn_Po0SmunchJYOWpOxMg&maxResults=1&order=date&key=AIzaSyDUTRDsWBWMeamCR3lfll4dYnaIrW6JTjs")
        .then((result) => {
            var video = result.data.items[0]
            setVideo3(video.id.videoId)
            setVideo3Title(video.snippet.title)
            setVideo3Channel(video.snippet.channelTitle)
        })
        .catch((err) => {
            console.log(err)
        })
    },[])*/

    const url1 = `https://www.youtube.com/embed/${video3}`
    const url2 = `https://www.youtube.com/watch?v=${video3}`
    
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
                    <img src={dunkey} className='channel-icon'></img>
                </div>
                <div className='video-description-right'>
                    <a className='title' href={url2}>{video3Title}</a>
                    <div className='channel'>
                        <a href='https://www.youtube.com/@videogamedunkey'>{video3Channel}</a>
                        <IconContext.Provider value={{ className: "checkmark"}}>
                            <BsFillCheckCircleFill />
                        </IconContext.Provider>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Video3