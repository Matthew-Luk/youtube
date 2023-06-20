import './App.css';
import {BrowserRouter, Routes, Router, Route, Navigate} from 'react-router-dom';
import Home from './Components/Home';
import SingleVideo from './Components/SingleVideo';
import { useState } from 'react';

function App() {
  const [channelId, setChannelId] = useState("")

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to = "/home"/>}/>
          <Route path="/home" element={<Home channelId={channelId} setChannelId={setChannelId}/>}/>
          <Route path='/video' element={<SingleVideo channelId={channelId}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;