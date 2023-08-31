import '../App.css';
import Main from './Main';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

function Home(props) {
    const {setChannelId, setVideoId, searchValue, setSearchValue} = props

    return (
        <div className="home">
            <Navbar searchValue={searchValue} setSearchValue={setSearchValue}/>
            <Sidebar/>
            <Main setChannelId={setChannelId} setVideoId={setVideoId}/>
        </div>
    );
}

export default Home;