import axios from 'axios'
import React, { useEffect, useState } from 'react'
import '../css/music.css'
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

    return (
        <div className='home'>
            <Navbar/>
            <Sidebar/>
            <div className='music-container'>
                {
                    musicList.map((item,index) => (
                        <div className='video-container' key={index}>
                            <iframe className='video'
                                src = {item.id}
                                title="YouTube video player" frameBorder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowFullScreen>
                            </iframe>
                            <div className='video-description'>

                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Music