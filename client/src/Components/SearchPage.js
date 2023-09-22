import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { convertDate2, parseHtmlEntities } from './functions'
import axios from 'axios'
import '../css/search.css'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { IconContext } from 'react-icons/lib';
import { BsFillCheckCircleFill } from "react-icons/bs";

const SearchPage = (props) => {
    const { setVideoId, setChannelId, searchValue, setSearchValue, APIKey } = props
    const [searchList, setSearchList] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&q=${searchValue}&key=${APIKey}`)
        .then((result) => {
            console.log(result.data.items)
            setSearchList(result.data.items)
            console.log(searchList)
        })
        .catch((err) => {
            console.log(err)
        })
    },[searchValue])

    const clickHandler = (e) => {
        if(e.snippet.title === e.snippet.channelTitle){
            window.location.replace(`https://www.youtube.com/channel/${e.snippet.channelId}`)
        }else{
            setChannelId(e.snippet.channelId)
            setVideoId(e.id.videoId)
            navigate(`/video/${e.id.videoId}`)
        }
    }

    return (
        <div className='home'>
            <Navbar searchValue={searchValue} setSearchValue={setSearchValue}/>
            <Sidebar/>
            <div className='main'>
                {
                    searchList.map((item,index) => (
                        <div onClick={() => clickHandler(item)} className='search-video' key={index}>
                            <div className='video-thumbnail'>
                                <img src={item.snippet.thumbnails.medium.url} alt='thumbnail for the video'></img>
                            </div>
                            <div className='search-page-description'>
                                <p className='search-page-title'>{parseHtmlEntities(item.snippet.title)}</p>
                                <p className=''>{convertDate2(item.snippet.publishedAt)}</p>
                                <div className='channel mt-16'>
                                    <a href={`https://www.youtube.com/channel/${item.snippet.channelId}`}>{item.snippet.channelTitle}</a>
                                    <IconContext.Provider value={{ className: "checkmark"}}>
                                        <BsFillCheckCircleFill />
                                    </IconContext.Provider>
                                </div>
                                <p className='search-video-description'>{item.snippet.description}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default SearchPage