import './App.css';
import {BrowserRouter, Routes, Router, Route, Navigate} from 'react-router-dom';
import Home from './Components/Home';
import SingleVideo from './Components/SingleVideo';
import { useState } from 'react';

function App() {
  const [channelId, setChannelId] = useState("")
  const [videoId, setVideoId] = useState("")

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to = "/home"/>}/>
          <Route path="/home" element={<Home channelId={channelId} setChannelId={setChannelId} videoId={videoId} setVideoId={setVideoId}/>}/>
          <Route path='/video' element={<SingleVideo channelId={channelId} videoId={videoId} setVideoId={setVideoId}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;