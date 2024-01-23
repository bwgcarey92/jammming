import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import TrackList from './components/TrackList/TrackList';
import PlayList from './components/PlayList/PlayList';





function App() {
  const defaultTitle = 'My Playlist';
  const defaultTracks = [
    {id: 1, name: 'Track 1', artist: 'Artist 1', album: 'Album 1'},
    {id: 2, name: 'Track 2', artist: 'Artist 2', album: 'Album 2'},
  ];

  const [playlistInfo, setPlayListInfo] = useState({
    title: defaultTitle,
    tracks: defaultTracks,
  });


  return (
    <div className="App">
      <h1>Jammming</h1>
      <header className="App-header">
        <SearchBar />
        <TrackList tracks={defaultTracks} />
        <PlayList 
          defaultTitle={playlistInfo.title}
          defaultTracks={playlistInfo.tracks}
        />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
