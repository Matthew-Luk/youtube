import '../App.css';
import Main from './Main';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

function Home(props) {
    const {setChannelId, setVideoId} = props

    return (
        <div className="home">
            <Navbar/>
            <Sidebar/>
            <Main setChannelId={setChannelId} setVideoId={setVideoId}/>
        </div>
    );
}

export default Home;