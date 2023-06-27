import axios from 'axios'
import React, { useEffect, useState } from 'react'
import '../css/main.css'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

const Music = () => {
    const [musicList, setMusicList] = useState([])

    const key = "AIzaSyDUTRDsWBWMeamCR3lfll4dYnaIrW6JTjs"

    useEffect(() => {
        axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=15&regionCode=es&videoCategoryId=10&key=${key}`)
        .then((result) => {
            setMusicList(result.data.items)
        })
        .catch((err) => {
            console.log(err)
        })
    },[])

    const url1 = "https://www.youtube.com/embed/G42RJ4mKj1k"
    // embed video = `https://www.youtube.com/embed/${item.id}`
    // channel icon = {item.snippet.thumbnails.default.url}
    // channel id = {item.snippet.channelId}
    // video title = {item.snippet.title}
    // channel title = {item.snippet.channelTitle}
    // uploaded =  = {convertDate2(item.snippet.publishedAt)}

    function convertDate2(publishedDate){
        var current = new Date()
        var cdate = new Date(current.getFullYear(), current.getMonth(), current.getDate(), current.getHours())
        var csec = Math.floor( cdate / 1000 ) - 28800;
    
        var publishedDate = new Date(publishedDate)
        var pdate = new Date(publishedDate.getFullYear(), publishedDate.getMonth(), publishedDate.getDate(), publishedDate.getHours())
        var psec = Math.floor( pdate / 1000 );
    
        var diff = csec - psec
        const map = {
            "year": 31536000,
            "month": 2628288,
            "week": 604800,
            "day": 86400,
            "hour": 3600
        }
        const answer = {
            "year": 0,
            "month": 0,
            "week": 0,
            "day": 0,
            "hour": 0
        }
        for(const [key, value] of Object.entries(map)){
            while(diff >= value){
                diff -= map[key]
                answer[key] += 1
            }
        }
        for(const [key, value] of Object.entries(answer)){
            if(value == 1){
                return `${value} ${key} ago`
            }else if(value > 1){
                return `${value} ${key}s ago`
            }
        }
    }

    return (
        <div className='home'>
            <Navbar/>
            <Sidebar/>
            <div className='main'>
                <div className='videos'>
                    <div className='container'>
                        <iframe className='video'
                            src = {url1}
                            title="YouTube video player" frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen>
                        </iframe>
                    </div>
                </div>
                {
                    /*musicList.map((item,index) => (
                        <div className='container' key={index}>
                            <iframe className='video'
                                src = {`https://www.youtube.com/embed/${item.id}`}
                                title="YouTube video player" frameBorder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowFullScreen>
                            </iframe>
                            <div className='video-description'>
                                <div className='video-description-left'>
                                    <img src={item.snippet.thumbnails.default.url} className='channel-icon'></img>
                                </div>
                                <div className='video-description-right'>
                                    <a className='title'>{item.snippet.title}</a>
                                    <div className='channel'>
                                        <a href=`https://www.youtube.com/channel/${item.snippet.channelId}`>{item.snippet.channelTitle}</a>
                                        <IconContext.Provider value={{ className: "checkmark"}}>
                                            <BsFillCheckCircleFill />
                                        </IconContext.Provider>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))*/
                }
            </div>
        </div>
    )
}

export default Music