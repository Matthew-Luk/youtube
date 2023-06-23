import '../App.css';
import Navbar from './Navbar';
import React, {useEffect, useState} from 'react'
import '../css/singlevideo.css'
import axios from 'axios'
import {encode} from 'html-entities';
import jre from '../images/jre.jpg'
import vividseats from '../images/vividseats.png'
import vividseatsicon from '../images/vividseatsicon.png'
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
    const [viewCount, setViewCount] = useState("")
    const [likeCount, setLikeCount] = useState("")
    const [commentCount, setCommentCount] = useState("")
    const [description, setDescription] = useState("")
    const {channelId, videoId} = props

    // multiple urls in one axios request
    /*let urls = [
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&maxResults=1&order=date&key=AIzaSyDUTRDsWBWMeamCR3lfll4dYnaIrW6JTjs`,
        `https://youtube.googleapis.com/youtube/v3/videos?part=statistics&id=${video}&key=AIzaSyDUTRDsWBWMeamCR3lfll4dYnaIrW6JTjs`
        Popular Music = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2Cstatistics&chart=mostPopular&maxResults=9&regionCode=US&videoCategoryId=10&key=AIzaSyDUTRDsWBWMeamCR3lfll4dYnaIrW6JTjs"
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

    // video - getting most recent video by channel ID
    useEffect(() => {
        axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&maxResults=1&order=date&key=AIzaSyDUTRDsWBWMeamCR3lfll4dYnaIrW6JTjs`)
        .then((result) => {
            var video = result.data.items[0]
            setVideo(video.id.videoId)
            setVideoTitle(video.snippet.title)
            setVideoChannel(video.snippet.channelTitle)
            setDescription(video.snippet.description)
        })
        .catch((err) => {
            console.log(err)
        })
    },[])

    // viewcount and statistics
    useEffect(() => {
        axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=statistics&id=${videoId}&key=AIzaSyDUTRDsWBWMeamCR3lfll4dYnaIrW6JTjs`)
        .then((result) => {
            var stats = result.data.items[0].statistics
            setViewCount(stats.viewCount)
            setLikeCount(stats.likeCount)
            setCommentCount(stats.commentCount)
        })
        .catch((err) => {
            console.log(err)
        })
    },[])

    const url1 = `https://www.youtube.com/embed/${video}`
    const url2 = `https://www.youtube.com/watch?v=${channelId}`
    const url3 = "https://www.youtube.com/embed/bUubdmHsFcQ"

    return (
        <div className='sv-home'>
            <Navbar/>
            <div className='sv-main'>
                <div className='sv-container-left'>
                    <iframe className='sv-video'
                    src = {url3}
                    title="YouTube video player" frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen></iframe>
                    <div className='sv-video-header'>
                        <div className='video-header-top'>
                            <p className='sv-title' href={url2}>{videoTitle}Robert Kennedy, Jr. on His Uncle JFK and the Military Industrial Complex</p>
                        </div>
                        <div className='video-header-bottom'>
                            <div className='header-bottom-left'>
                                <img src={jre} className='sv-channel-icon'></img>
                                <div className='sv-channel'>
                                    <a href={url2}>{videoChannel}PowerfulJRE</a>
                                    <IconContext.Provider value={{ className: "checkmark"}}>
                                        <BsFillCheckCircleFill />
                                    </IconContext.Provider>
                                </div>
                                <button className='sub'>Subscribe</button>
                            </div>
                            <div className='header-bottom-right'>
                                <div className='like'>
                                    <button className='like-left'>
                                        <IconContext.Provider value={{ className: "sv-icon"}}>
                                            <FiThumbsUp />
                                        </IconContext.Provider>
                                        <p>{likeCount}</p>
                                    </button>
                                    <button className='like-right'>
                                        <IconContext.Provider value={{ className: "sv-icon"}}>
                                            <FiThumbsDown />
                                        </IconContext.Provider>
                                    </button>
                                </div>
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
                    <div className='sv-video-description'>
                        <div>
                            <p className='view-count'>{viewCount} views</p>
                        </div>
                        <div>
                            <p className='description'>{description}</p>
                        </div>
                    </div>
                    <div className='comment-section'>

                    </div>
                </div>
                <div className='sv-container-right'>
                    <div className='ad'>
                        <div className='ad-top'>
                            <img src={vividseats}></img>
                        </div>
                        <div className='ad-bottom'>
                            <img className='vividseats-icon' src={vividseatsicon}></img>
                            <div className='ad-bottom-middle'>
                                <p className='get-tickets'>Get Tickets</p>
                                <p><strong>Ad</strong> vividseats.com/Get-Tickets/Get-Re</p>
                            </div>
                            <button className='buybutton'>
                                <a href='https://www.vividseats.com/'>Buy now</a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleVideo