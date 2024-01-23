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

  const addTrack = (track) => {
    const trackExists = playlistInfo.tracks.some((existingTrack) => existingTrack.id === track.id);
  
    if(!trackExists) {
      setPlayListInfo((prevInfo) => ({
        ...prevInfo,
        tracks: [...prevInfo.tracks, track]
      }));
    }

  };

  const removeTrack = (track) => {
    const updatedTracks = playlistInfo.tracks.filter((t) => t.id !== track.id);
    setPlayListInfo((prevInfo) => ({
      ...prevInfo,
      tracks: updatedTracks,
    }));
  };

  const [playlistInfo, setPlayListInfo] = useState({
    title: defaultTitle,
    tracks: defaultTracks,
  });


  return (
    <div className="App">
      <h1>Jammming</h1>
      <header className="App-header">
        <SearchBar />
        <TrackList tracks={defaultTracks} onAdd={addTrack} onRemove={removeTrack}/>
        <PlayList 
          defaultTitle={playlistInfo.title}
          defaultTracks={playlistInfo.tracks}
          addTrack={addTrack}
          removeTrack={removeTrack}
        />
      </header>
    </div>
  );
}

export default App;
