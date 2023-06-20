import '../App.css';
import Main from './Main';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

function Home(props) {
    const {channelId, setChannelId} = props

    return (
        <div className="home">
            <Navbar/>
            <Sidebar/>
            <Main channelId={channelId} setChannelId={setChannelId}/>
        </div>
    );
}

export default Home;