import React, {useEffect} from 'react'
import '../css/main.css'
//import Video1 from './Video1'
//import Video2 from './Video2'
import Video10 from './Video10'
//<Video1/>
//<Video2/>
//import Video3 from './Video3'
//import Video4 from './Video4'
//import Video5 from './Video5'
//import Video6 from './Video6'
//import Video7 from './Video7'
//import Video8 from './Video8'
//import Video9 from './Video9'
//<Video3/>
//<Video4/>
//<Video5/>
//<Video6/>
//<Video7/>
//<Video8/>
//<Video9/>


const Main = (props) => {
    const {channelId, setChannelId} = props

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
                <button className='category-element'>
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
                <Video10 channelId={channelId} setChannelId={setChannelId}/>
            </div>
        </div>
    )
}

export default Main