import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import '../App.css';
import Main from './Main';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

function Home(props) {
    const { setChannelId, setVideoId, setSearchValue, APIKey, sbCategory, setSbCategory } = props
    const navigate = useNavigate()

    useEffect(() => {
        if(APIKey === ""){
            navigate('/login')
        }
    },[])

    return (
        <div className="home">
            <Navbar setSearchValue={setSearchValue}/>
            <Sidebar sbCategory={sbCategory} setSbCategory={setSbCategory}/>
            <Main setChannelId={setChannelId} setVideoId={setVideoId} APIKey={APIKey}/>
        </div>
    );
}

export default Home;