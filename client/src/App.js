import './App.css';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import { useState } from 'react';
import Home from './Components/Home';
import SingleVideo from './Components/SingleVideo';
import Music from './Components/Music';
import SearchPage from './Components/SearchPage';
import Login from './Components/Login';

function App() {
  const [channelId, setChannelId] = useState("")
  const [videoId, setVideoId] = useState("")
  const [searchValue, setSearchValue] = useState("")
  const [APIKey, setAPIKey] = useState("")

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to = "/login"/>}/>
          <Route path="/login" element={<Login setAPIKey={setAPIKey}/>}/>
          <Route path="/home" element={<Home setChannelId={setChannelId} setVideoId={setVideoId} setSearchValue={setSearchValue} APIKey={APIKey}/>}/>
          <Route path='/video/:videoId' element={<SingleVideo channelId={channelId} videoId={videoId} setChannelId={setChannelId} setVideoId={setVideoId} searchValue={searchValue} setSearchValue={setSearchValue} APIKey={APIKey}/>}/>
          <Route path='/music' element={<Music setVideoId={setVideoId} setChannelId={setChannelId} searchValue={searchValue} setSearchValue={setSearchValue} APIKey={APIKey}/>}/>
          <Route path='/search/:searchValue' element={<SearchPage setVideoId={setVideoId} setChannelId={setChannelId} searchValue={searchValue} setSearchValue={setSearchValue} APIKey={APIKey}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;