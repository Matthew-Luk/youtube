import '../App.css';
import Navbar from './Navbar';
import React, {useEffect, useState} from 'react'
import '../css/singlevideo.css'
import axios from 'axios'
import jre from '../images/jre.jpg'
import { IconContext } from 'react-icons/lib';
import { BsFillCheckCircleFill } from "react-icons/bs";
import { FiThumbsUp } from "react-icons/fi";
import { FiThumbsDown } from "react-icons/fi";
import { RiShareForwardLine } from "react-icons/ri";
import { BsDownload } from "react-icons/bs";
import { AiOutlineEllipsis } from "react-icons/ai";



const SingleVideo = (props) => {
    const [video, setVideo] = useState("")
    const [videoTitle, setVideoTitle] = useState("")
    const [videoChannel, setVideoChannel] = useState("")
    const {channelId} = props
    console.log(channelId)

    // multiple urls in one axios request
    /*let urls = [
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&maxResults=1&order=date&key=AIzaSyDUTRDsWBWMeamCR3lfll4dYnaIrW6JTjs`,
        `https://youtube.googleapis.com/youtube/v3/videos?part=statistics&id=${video}&key=AIzaSyDUTRDsWBWMeamCR3lfll4dYnaIrW6JTjs`
    ]
    const requests = urls.map((url) => axios.get(url))
    useEffect(() => {
        axios.all(requests)
        .then((result) => {
            let msg = {
                video: result.snippet,
                statistics: result.statistics
            }
            console.table(msg)
        })
        .catch((err) => {
            console.log(err)
        })
    },[])*/

    /*useEffect(() => {
        axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&maxResults=1&order=date&key=AIzaSyDUTRDsWBWMeamCR3lfll4dYnaIrW6JTjs`)
        .then((result) => {
            var video = result.data.items[0]
            setVideo(video.id.videoId)
            setVideoTitle(video.snippet.title)
            setVideoChannel(video.snippet.channelTitle)
        })
        .catch((err) => {
            console.log(err)
        })
    },[])*/

    /*useEffect(() => {
        axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=statistics&id=${video}&key=AIzaSyDUTRDsWBWMeamCR3lfll4dYnaIrW6JTjs`)
        .then((result) => {
            console.log(result)
            console.log(result.data.items.statistics.viewCount)
        })
        .catch((err) => {
            console.log(err)
        })
    },[])*/

    const url1 = `https://www.youtube.com/embed/${video}`
    const url2 = `https://www.youtube.com/watch?v=${channelId}`
    const url3 = "https://www.youtube.com/embed/dSXcsKiWvXE"

    return (
        <div className='sv-home'>
            <Navbar/>
            <div className='sv-main'>
                <div className='sv-container'>
                    <iframe className='sv-video'
                    src = {url3}
                    title="YouTube video player" frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen></iframe>
                    <div className='sv-video-description'>
                        <div className='video-description-top'>
                            <p className='sv-title' href={url2}>{videoTitle}Robert Kennedy, Jr. on His Uncle JFK and the Military Industrial Complex</p>
                        </div>
                        <div className='video-description-bottom'>
                            <div className='description-bottom-left'>
                                <img src={jre} className='sv-channel-icon'></img>
                                <div className='sv-channel'>
                                    <a href='https://www.youtube.com/channel/UCzQUP1qoWDoEbmsQxvdjxgQ'>{videoChannel}PowerfulJRE</a>
                                    <IconContext.Provider value={{ className: "checkmark"}}>
                                        <BsFillCheckCircleFill />
                                    </IconContext.Provider>
                                </div>
                                <button className='sub'>Subscribe</button>
                            </div>
                            <div className='description-bottom-right'>
                                <button className='like'>
                                    <IconContext.Provider value={{ className: "sv-icon"}}>
                                        <FiThumbsUp />
                                    </IconContext.Provider>
                                    <p>43K |</p>
                                    <IconContext.Provider value={{ className: "sv-icon"}}>
                                        <FiThumbsDown />
                                    </IconContext.Provider>
                                </button>
                                <button className='share'>
                                    <IconContext.Provider value={{ className: "sv-icon"}}>
                                        <RiShareForwardLine />
                                    </IconContext.Provider>
                                    <p>Share</p>
                                </button>
                                <button className='download'>
                                    <IconContext.Provider value={{ className: "sv-icon"}}>
                                        <BsDownload />
                                    </IconContext.Provider>
                                    <p>Download</p>
                                </button>
                                <button className='options'>
                                    <IconContext.Provider value={{ className: "sv-icon"}}>
                                        <AiOutlineEllipsis />
                                    </IconContext.Provider>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleVideo