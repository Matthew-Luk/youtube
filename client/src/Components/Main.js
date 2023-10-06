import React from 'react'
import '../css/main.css'
import jre from '../images/jre.jpg'
import mk from '../images/mk.jpg'
import dunkey from '../images/dunkey.jpg'
import nba from '../images/nba.jpg'
import mango from '../images/mango.jpg'
import jeff from '../images/jeff.jpg'
import theorists from '../images/theorists.jpg'
import food from '../images/food.jpg'
import ufc from '../images/ufc.jpg'
import { useNavigate } from "react-router-dom";
import Video from './Video.js'



const Main = (props) => {
    const { setChannelId, setVideoId, APIKey } = props
    const navigate = useNavigate()
    setVideoId("")

    const categoryHandler = (e) => {
        console.log(e)
        navigate('/category/music')
    }

    return (
        <div className='main'>
            <div className='scroll-categories'>
                <button className='category-element selected'>
                    <p>All</p>
                </button>
                <button className='category-element'>
                    <p>Martial arts</p>
                </button>
                <button className='category-element'>
                    <p>Gaming</p>
                </button>
                <button className='category-element'>
                    <p>Podcasts</p>
                </button>
                <button onClick={categoryHandler} className='category-element'>
                    <p>Music</p>
                </button>
                <button className='category-element'>
                    <p>NBA</p>
                </button>
                <button className='category-element'>
                    <p>Gyms</p>
                </button>
                <button className='category-element'>
                    <p>Live</p>
                </button>
                <button className='category-element'>
                    <p>Cars</p>
                </button>
                <button className='category-element'>
                    <p>Wildlife</p>
                </button>
                <button className='category-element'>
                    <p>Thrillers</p>
                </button>
                <button className='category-element'>
                    <p>Sitcoms</p>
                </button>
                <button className='category-element'>
                    <p>Recently uploaded</p>
                </button>
            </div>
            <div className='videos'>
                <Video setChannelId={setChannelId} setVideoId={setVideoId} APIKey={APIKey} channel={"UCzQUP1qoWDoEbmsQxvdjxgQ"} Img={jre}/>
                <Video setChannelId={setChannelId} setVideoId={setVideoId} APIKey={APIKey} channel={"UC1bwliGvJogr7cWK0nT2Eag"} Img={mk}/>
                <Video setChannelId={setChannelId} setVideoId={setVideoId} APIKey={APIKey} channel={"UCsvn_Po0SmunchJYOWpOxMg"} Img={dunkey}/>
                <Video setChannelId={setChannelId} setVideoId={setVideoId} APIKey={APIKey} channel={"UCWJ2lWNubArHWmf3FIHbfcQ"} Img={nba}/>
                <Video setChannelId={setChannelId} setVideoId={setVideoId} APIKey={APIKey} channel={"UCLeBjrmfpAFGqDRJNL1PF5g"} Img={mango}/>
                <Video setChannelId={setChannelId} setVideoId={setVideoId} APIKey={APIKey} channel={"UC68TLK0mAEzUyHx5x5k-S1Q"} Img={jeff}/>
                <Video setChannelId={setChannelId} setVideoId={setVideoId} APIKey={APIKey} channel={"UCHYoe8kQ-7Gn9ASOlmI0k6Q"} Img={theorists}/>
                <Video setChannelId={setChannelId} setVideoId={setVideoId} APIKey={APIKey} channel={"UCwiTOchWeKjrJZw7S1H__1g"} Img={food}/>
                <Video setChannelId={setChannelId} setVideoId={setVideoId} APIKey={APIKey} channel={"UCvgfXK4nTYKudb0rFR6noLA"} Img={ufc}/>
            </div>
        </div>
    )
}

export default Main