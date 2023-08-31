import './App.css';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import { useState } from 'react';
import Home from './Components/Home';
import SingleVideo from './Components/SingleVideo';
import Music from './Components/Music';
import SearchPage from './Components/SearchPage';

function App() {
  const [channelId, setChannelId] = useState("")
  const [videoId, setVideoId] = useState("")
  const [searchValue, setSearchValue] = useState("")

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to = "/home"/>}/>
          <Route path="/home" element={<Home setChannelId={setChannelId} setVideoId={setVideoId} searchValue={searchValue} setSearchValue={setSearchValue}/>}/>
          <Route path='/video/:videoId' element={<SingleVideo channelId={channelId} videoId={videoId} setChannelId={setChannelId} setVideoId={setVideoId} searchValue={searchValue} setSearchValue={setSearchValue}/>}/>
          <Route path='/music' element={<Music setVideoId={setVideoId} setChannelId={setChannelId} searchValue={searchValue} setSearchValue={setSearchValue}/>}/>
          <Route path='/search/:searchValue' element={<SearchPage searchValue={searchValue} setSearchValue={setSearchValue}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;