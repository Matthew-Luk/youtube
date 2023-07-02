import '../App.css';
import Navbar from './Navbar';
import {convertCount, convertDate1, convertDate2} from './functions'
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
    const [videoTitle, setVideoTitle] = useState("")
    const [videoChannel, setVideoChannel] = useState("")
    const [subCount, setSubCount] = useState("")
    const [viewCount, setViewCount] = useState("")
    const [likeCount, setLikeCount] = useState("")
    const [commentCount, setCommentCount] = useState("")
    const [publishedAt, setPublishedAt] = useState("")
    const [description, setDescription] = useState("")
    const [commentsList, setCommentsList] = useState([])
    const [relatedVideos, setRelatedVideos] = useState([])
    const {channelId, videoId} = props
    const key = "AIzaSyDUTRDsWBWMeamCR3lfll4dYnaIrW6JTjs"

    let urls = [
        // [0] = video - getting most recent video by channel ID
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&maxResults=1&order=date&key=${key}`,
        // [1] = viewcount and statistics
        `https://youtube.googleapis.com/youtube/v3/videos?part=statistics&id=${videoId}&key=${key}`,
        // [2] = comments for the video should list 25
        `https://www.googleapis.com/youtube/v3/commentThreads?key=${key}&textFormat=plainText&part=snippet&videoId=${videoId}&maxResults=25`,
        // [3] = subscriber count
        `https://youtube.googleapis.com/youtube/v3/channels?part=statistics&id=${channelId}&key=${key}`,
        // [4] = related videos
        `https://www.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${videoId}&type=video&maxResults=20&key=${key}`
    ]
    useEffect(() => {
        axios.all(urls.map((url) => axios.get(url)))
        .then((result) => {
            // [0]
            var video = result[0].data.items[0]
            setVideoTitle(video.snippet.title)
            setVideoChannel(video.snippet.channelTitle)
            setDescription(video.snippet.description)
            setPublishedAt(convertDate1(video.snippet.publishedAt))
            // [1]
            var stats = result[1].data.items[0].statistics
            setViewCount(convertCount(stats.viewCount))
            setLikeCount(convertCount(stats.likeCount))
            setCommentCount(stats.commentCount.toLocaleString("en-US"))
            // [2]
            var comments = result[2].data.items
            setCommentsList(comments)
            // [3]
            setSubCount(convertCount(result[3].data.items[0].statistics.subscriberCount))
            // [4]
            setRelatedVideos(result[4].data.items)
            console.log(result[4].data.items)
        })
        .catch((err) => {
            console.log(err)
        })
    },[])

    return (
        <div className='sv-home'>
            <Navbar/>
            <div className='sv-main'>
                <div className='sv-container-left'>
                    <iframe className='sv-video'
                        src = {`https://www.youtube-nocookie.com/embed/${videoId}`}
                        title="YouTube video player" frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                    <div className='sv-video-header'>
                        <div className='video-header-top'>
                            <p className='sv-title'>{videoTitle}</p>
                        </div>
                        <div className='video-header-bottom'>
                            <div className='header-bottom-left'>
                                <img src={youtubelogo} className='sv-channel-icon'></img>
                                <div className='sv-channel'>
                                    <div>
                                        <a href={`https://www.youtube.com/channel/${channelId}`}>{videoChannel}</a>
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
                                                <span className='posted-date'>{
                                                    convertDate2(item.snippet.topLevelComment.snippet.publishedAt)?
                                                    convertDate2(item.snippet.topLevelComment.snippet.publishedAt):
                                                    "Less than an hour ago"
                                                }</span>
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
                    <div className='related-videos'>
                        {
                            relatedVideos.map((item, index) => (
                                <div className='related-video' key={index}>
                                    <img src = {item.snippet.thumbnails.default.url} className='related-video-left'></img>
                                    <div className='related-video-right'>
                                        <p className='related-video-title'>{item.snippet.title}</p>
                                        <div className='related-video-info'>
                                            <a className='related-video-channel' href={`https://www.youtube.com/channel/${item.snippet.channelId}`}>{item.snippet.channelTitle}</a>
                                            <IconContext.Provider value={{ className: "checkmark"}}>
                                                <BsFillCheckCircleFill />
                                            </IconContext.Provider>
                                            <p className='published'>{convertDate2(item.snippet.publishedAt)}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleVideo