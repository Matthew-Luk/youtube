import '../App.css';
import Navbar from './Navbar';
import React, {useEffect, useState} from 'react'
import { Link } from "react-router-dom";
import '../css/singlevideo.css'
import axios from 'axios'
import youtubelogo from '../images/youtubelogo.png'
import vividseats from '../images/vividseats.png'
import vividseatsicon from '../images/vividseatsicon.png'
import { IconContext } from 'react-icons/lib';
import { BsFillCheckCircleFill } from "react-icons/bs";
import { FiThumbsUp } from "react-icons/fi";
import { FiThumbsDown } from "react-icons/fi";
import { RiShareForwardLine } from "react-icons/ri";
import { BsDownload } from "react-icons/bs";
import { AiOutlineEllipsis } from "react-icons/ai";
import { AiFillCaretDown } from "react-icons/ai";

const SingleVideo = (props) => {
    const [video, setVideo] = useState("")
    const [videoTitle, setVideoTitle] = useState("")
    const [videoChannel, setVideoChannel] = useState("")
    const [subCount, setSubCount] = useState("")
    const [viewCount, setViewCount] = useState("")
    const [likeCount, setLikeCount] = useState("")
    const [commentCount, setCommentCount] = useState("")
    const [publishedAt, setPublishedAt] = useState("")
    const [description, setDescription] = useState("")
    const [commentsList, setCommentsList] = useState([])
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
    /*useEffect(() => {
        axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&maxResults=1&order=date&key=AIzaSyDUTRDsWBWMeamCR3lfll4dYnaIrW6JTjs`)
        .then((result) => {
            var video = result.data.items[0]
            setVideo(video.id.videoId)
            setVideoTitle(video.snippet.title)
            setVideoChannel(video.snippet.channelTitle)
            setDescription(video.snippet.description)
            setPublishedAt(convertDate(video.snippet.publishedAt))
        })
        .catch((err) => {
            console.log(err)
        })
    },[])*/

    // viewcount and statistics
    /*useEffect(() => {
        axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=statistics&id=${videoId}&key=AIzaSyDUTRDsWBWMeamCR3lfll4dYnaIrW6JTjs`)
        .then((result) => {
            var stats = result.data.items[0].statistics
            setViewCount(convertCount(stats.viewCount))
            setLikeCount(convertCount(stats.likeCount))
            setCommentCount(stats.commentCount.toLocaleString("en-US"))
        })
        .catch((err) => {
            console.log(err)
        })
    },[])*/

    // comments for the video should list 100
    /*useEffect(() => {
        axios.get(`https://www.googleapis.com/youtube/v3/commentThreads?key=AIzaSyDUTRDsWBWMeamCR3lfll4dYnaIrW6JTjs&textFormat=plainText&part=snippet&videoId=${videoId}&maxResults=50`)
        .then((result) => {
            var comments = result.data.items
            setCommentsList(comments)
        })
        .catch((err) => {
            console.log(err)
        })
    },[])*/

    // subscriber count
    /*useEffect(() => {
        axios.get(`https://youtube.googleapis.com/youtube/v3/channels?part=statistics&id=${channelId}&key=AIzaSyDUTRDsWBWMeamCR3lfll4dYnaIrW6JTjs`)
        .then((result) => {
            setSubCount(convertCount(result.data.items[0].statistics.subscriberCount))
        })
        .catch((err) => {
            console.log(err)
        })
    },[])*/


    function convertCount(num){
        if(num == 0){
            return " "
        }else if (num <= 999){
            return num.toString()
        }else if(num >= 1000 && num <=1000000){
            if((num/1000).toFixed(1) == Math.floor(num/1000)){
                return Math.floor(num/1000).toString() + "K"
            }else{
                return (num/1000).toFixed(1).toString() + "K"
            }
        }else{
            if((num/1000000).toFixed(1) == Math.floor(num/1000000)){
                return Math.floor(num/1000000).toString() + "M"
            }else{
                return (num/1000000).toFixed(1).toString() + "M"
            }
        }
    }

    function convertDate(date){
        var map = {
            "01": "Jan",
            "02": "Feb",
            "03": "Mar",
            "04": "Apr",
            "05": "May",
            "06": "Jun",
            "07": "Jul",
            "08": "Aug",
            "09": "Sep",
            "10": "Oct",
            "11": "Nov",
            "12": "Dec",
        }
        var year = date.slice(0,4)
        var month = map[date.slice(5,7)]
        var day = date.slice(8,10)
        return(month + " " + day + ", " + year)
    }

    // embed video - source video
    const url1 = `https://www.youtube-nocookie.com/embed/${video}`
    // link to channel
    const url2 = `https://www.youtube.com/channel/${channelId}`
    // link to actual video on youtube.com
    const url3 = `https://www.youtube-nocookie.com/watch?v=${video}`

    return (
        <div className='sv-home'>
            <Navbar/>
            <div className='sv-main'>
                <div className='sv-container-left'>
                    <iframe className='sv-video'
                    src = {url1}
                    title="YouTube video player" frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen></iframe>
                    <div className='sv-video-header'>
                        <div className='video-header-top'>
                            <p className='sv-title'>{videoTitle}</p>
                        </div>
                        <div className='video-header-bottom'>
                            <div className='header-bottom-left'>
                                <img src={youtubelogo} className='sv-channel-icon'></img>
                                <div className='sv-channel'>
                                    <div>
                                        <a href={url2}>{videoChannel}</a>
                                        <IconContext.Provider value={{ className: "checkmark"}}>
                                            <BsFillCheckCircleFill />
                                        </IconContext.Provider>
                                    </div>
                                    <p className='subscribers'>{subCount} subscribers</p>
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
                        <div className='sv-video-description-header'>
                            <p className='view-count'>{viewCount} views</p>
                            <p>{publishedAt}</p>
                        </div>
                        <div>
                            <p className='description'>{description}</p>
                        </div>
                    </div>
                    <div className='comment-section'>
                        <div className='comment-section-header'>
                            <p>{commentCount} Comments</p>
                        </div>
                        <div className='comment-list'>
                            {
                                commentsList.map((item, index)=>(
                                    <div className='comment' key={index}>
                                        <div className='comment-left'>
                                            <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl}></img>
                                        </div>
                                        <div className='comment-right'>
                                            <Link to={item.snippet.topLevelComment.snippet.authorChannelUrl} className='comment-right-top'>
                                                <strong>@{item.snippet.topLevelComment.snippet.authorDisplayName}</strong>
                                                <span className='comment-date'>{convertDate(item.snippet.topLevelComment.snippet.publishedAt)}</span>
                                            </Link>
                                            <p className='comment-right-middle'>{item.snippet.topLevelComment.snippet.textDisplay}</p>
                                            <div className='comment-right-action'>
                                                <IconContext.Provider value={{ className: "sv-icon"}}>
                                                    <FiThumbsUp />
                                                </IconContext.Provider>
                                                <p>{convertCount(item.snippet.topLevelComment.snippet.likeCount)}</p>
                                                <IconContext.Provider value={{ className: "sv-icon"}}>
                                                    <FiThumbsDown />
                                                </IconContext.Provider>
                                                <button className='reply'>Reply</button>
                                            </div>
                                            {
                                                item.snippet.topLevelComment.totalReplyCount?
                                                <button className='replies'>
                                                    <IconContext.Provider value={{ className: "sv-icon"}}>
                                                        <AiFillCaretDown />
                                                    </IconContext.Provider>
                                                    <p>{item.snippet.topLevelComment.totalReplyCount} replies</p>
                                                </button>:
                                                ""
                                            }
                                        </div>
                                    </div> 
                                ))
                            }
                        </div>
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