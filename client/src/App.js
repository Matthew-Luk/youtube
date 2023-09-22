import './App.css';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import { useState } from 'react';
import Home from './Components/Home';
import SingleVideo from './Components/SingleVideo';
import Category from './Components/Category';
import SearchPage from './Components/SearchPage';
import Login from './Components/Login';
import History from './Components/History';

function App() {
  const [channelId, setChannelId] = useState("")
  const [videoId, setVideoId] = useState("")
  const [searchValue, setSearchValue] = useState("")
  const [APIKey, setAPIKey] = useState("")
  const [sbCategory, setSbCategory] = useState("")
  const [history, setHistory] = useState([])

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to = "/login"/>}/>
          <Route path="/login" element={<Login setAPIKey={setAPIKey}/>}/>
          <Route path="/home" element={<Home setChannelId={setChannelId} setVideoId={setVideoId} setSearchValue={setSearchValue} APIKey={APIKey} sbCategory={sbCategory} setSbCategory={setSbCategory}/>}/>
          <Route path='/video/:videoId' element={<SingleVideo channelId={channelId} videoId={videoId} setChannelId={setChannelId} setVideoId={setVideoId} searchValue={searchValue} setSearchValue={setSearchValue} APIKey={APIKey} history={history} setHistory={setHistory}/>}/>
          <Route path='/category/:category' element={<Category setVideoId={setVideoId} setChannelId={setChannelId} searchValue={searchValue} setSearchValue={setSearchValue} APIKey={APIKey} sbCategory={sbCategory} setSbCategory={setSbCategory}/>}/>
          <Route path='/search/:searchValue' element={<SearchPage setVideoId={setVideoId} setChannelId={setChannelId} searchValue={searchValue} setSearchValue={setSearchValue} APIKey={APIKey}/>}/>
          <Route path='/history' element={<History APIKey={APIKey} history={history} setHistory={setHistory} sbCategory={sbCategory} setSbCategory={setSbCategory}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;