import './App.css';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import { useState } from 'react';
import Home from './Components/Home';
import SingleVideo from './Components/SingleVideo';
import Music from './Components/Music';

function App() {
  const [channelId, setChannelId] = useState("")
  const [videoId, setVideoId] = useState("")

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to = "/home"/>}/>
          <Route path="/home" element={<Home setChannelId={setChannelId} setVideoId={setVideoId}/>}/>
          <Route path='/video' element={<SingleVideo channelId={channelId} videoId={videoId}/>}/>
          <Route path='/music' element={<Music setVideoId={setVideoId}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;