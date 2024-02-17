import React from 'react'
import '../css/main.css'
import { useNavigate } from "react-router-dom";

const Scroll = (props) => {
    const {setSearchValue} = props
    const navigate = useNavigate()

    const searchHandler = (e) => {
        if(e.target.value === undefined){
            setSearchValue(e.target.parentElement.value)
            navigate(`/search/${e.target.parentElement.value}`)
        }else{
            setSearchValue(e.target.value)
            navigate(`/search/${e.target.value}`)
        }
    }

    return (
        <div className='scroll-categories'>
            <button className='category-element selected'>
                <p>All</p>
            </button>
            <button onClick={searchHandler} value={'martial arts'} className='category-element'>
                <p>Martial arts</p>
            </button>
            <button onClick={searchHandler} value={'gaming'} className='category-element'>
                <p>Gaming</p>
            </button>
            <button onClick={searchHandler} value={'podcasts'} className='category-element'>
                <p>Podcasts</p>
            </button>
            <button onClick={searchHandler} value={'music'} className='category-element'>
                <p>Music</p>
            </button>
            <button onClick={searchHandler} value={'nba'} className='category-element'>
                <p>NBA</p>
            </button>
            <button onClick={searchHandler} value={'gyms'} className='category-element'>
                <p>Gyms</p>
            </button>
            <button onClick={searchHandler} value={'live'} className='category-element'>
                <p>Live</p>
            </button>
            <button onClick={searchHandler} value={'cars'} className='category-element'>
                <p>Cars</p>
            </button>
            <button onClick={searchHandler} value={'wild life'} className='category-element'>
                <p>Wildlife</p>
            </button>
            <button onClick={searchHandler} value={'thrillers'} className='category-element'>
                <p>Thrillers</p>
            </button>
            <button onClick={searchHandler} value={'sitcoms'} className='category-element'>
                <p>Sitcoms</p>
            </button>
        </div>
    )
}

export default Scroll