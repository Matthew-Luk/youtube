import React, { useEffect, useState } from 'react'
import { convertDate2, parseHtmlEntities } from './functions'
import axios from 'axios'
import '../css/search.css'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { IconContext } from 'react-icons/lib';
import { BsFillCheckCircleFill } from "react-icons/bs";

/*<iframe className='video search-page-left'
src = {`https://www.youtube.com/embed/${item.id.videoId}`}
title="YouTube video player" frameBorder="0" 
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
allowFullScreen>
</iframe>*/


const SearchPage = (props) => {
    const {searchValue, setSearchValue} = props
    const [searchList, setSearchList] = useState([])

    useEffect(() => {
        axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&q=${searchValue}&key=${process.env.REACT_APP_API_KEY}`)
        .then((result) => {
            setSearchList(result.data.items)
            console.log(searchList)
            console.log(result.data.items)
        })
        .catch((err) => {
            console.log(err)
        })
    },[searchValue])

    return (
        <div className='home'>
            <Navbar searchValue={searchValue} setSearchValue={setSearchValue}/>
            <Sidebar/>
            <div className='main'>
                <div>
                    {
                        searchList.map((item,index) => (
                            <div className='search-video' key={index}>
                                <div className='video-thumbnail'>
                                    <img src = {item.snippet.thumbnails.medium.url}></img>
                                </div>
                                <div className='search-page-description'>
                                    <p className='search-page-title'>{parseHtmlEntities(item.snippet.title)}</p>
                                    <p className=''>{convertDate2(item.snippet.publishedAt)}</p>
                                    <div className='channel'>
                                        <p>{item.snippet.channelTitle}</p>
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
        </div>
    )
}

export default SearchPage