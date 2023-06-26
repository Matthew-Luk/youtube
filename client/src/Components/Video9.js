import React, {useEffect, useState} from 'react'
import '../css/video.css'
import axios from 'axios'
import ufc from '../images/ufc.jpg'
import { IconContext } from 'react-icons/lib';
import { BsFillCheckCircleFill } from "react-icons/bs";

const Video9 = () => {
    const [video9, setVideo9] = useState("")
    const [video9Title, setVideo9Title] = useState("")
    const [video9Channel, setVideo9Channel] = useState("")

    /*useEffect(() => {
        axios.get("https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCvgfXK4nTYKudb0rFR6noLA&maxResults=1&order=date&key=AIzaSyDUTRDsWBWMeamCR3lfll4dYnaIrW6JTjs")
        .then((result) => {
            var video = result.data.items[0]
            setVideo9(video.id.videoId)
            setVideo9Title(video.snippet.title)
            setVideo9Channel(video.snippet.channelTitle)
        })
        .catch((err) => {
            console.log(err)/
        })
    },[])*/

    const url1 = `https://www.youtube.com/embed/${video9}`
    const url2 = `https://www.youtube.com/watch?v=${video9}`


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
                    <img src={ufc} className='channel-icon'></img>
                </div>
                <div className='video-description-right'>
                    <a className='title' href={url2}>{video9Title}</a>
                    <div className='channel'>
                        <a href='https://www.youtube.com/@ufc/videos'>{video9Channel}</a>
                        <IconContext.Provider value={{ className: "checkmark"}}>
                            <BsFillCheckCircleFill />
                        </IconContext.Provider>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Video9