import React, {useEffect, useState} from 'react'
import '../css/video.css'
import axios from 'axios'
import jeff from '../images/jeff.jpg'
import { IconContext } from 'react-icons/lib';
import { BsFillCheckCircleFill } from "react-icons/bs";

const Video6 = () => {
    const [video6, setVideo6] = useState("")
    const [video6Title, setVideo6Title] = useState("")
    const [video6Channel, setVideo6Channel] = useState("")

    /*useEffect(() => {
        axios.get("https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UC68TLK0mAEzUyHx5x5k-S1Q&maxResults=1&order=date&key=AIzaSyDUTRDsWBWMeamCR3lfll4dYnaIrW6JTjs")
        .then((result) => {
            var video = result.data.items[0]
            setVideo6(video.id.videoId)
            setVideo6Title(video.snippet.title)
            setVideo6Channel(video.snippet.channelTitle)
        })
        .catch((err) => {
            console.log(err)
        })
    },[])*/

    const url1 = `https://www.youtube.com/embed/${video6}`
    const url2 = `https://www.youtube.com/watch?v=${video6}`

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
                    <img src={jeff} className='channel-icon'></img>
                </div>
                <div className='video-description-right'>
                    <a className='title' href={url2}>{video6Title}</a>
                    <div className='channel'>
                        <a href='https://www.youtube.com/channel/UCzQUP1qoWDoEbmsQxvdjxgQ'>{video6Channel}</a>
                        <IconContext.Provider value={{ className: "checkmark"}}>
                            <BsFillCheckCircleFill />
                        </IconContext.Provider>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Video6