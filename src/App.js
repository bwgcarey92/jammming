import React, { useState, useCallback } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import TrackList from './components/TrackList/TrackList';
import PlayList from './components/PlayList/PlayList';
import Spotify from './utilities/Spotify';
import SearchResults from './components/SearchResults/SearchResults';




function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [playlistName, setPlaylistName] = useState('New Playlist');
  const [playlistTracks, setPlaylistTracks] = useState([]);

  const search = useCallback((term) => {
    Spotify.search(term).then(setSearchResults);
  }, []);

  const addTrack = useCallback(
    (track) => {
      if (playlistTracks.some((savedTrack) => savedTrack.id === track.id))
        return;

      setPlaylistTracks((prevTracks) => [...prevTracks, track]);
    },
    [playlistTracks]
  );

  const removeTrack = useCallback((track) => {
    setPlaylistTracks((prevTracks) =>
      prevTracks.filter((currentTrack) => currentTrack.id !== track.id)
    );
  }, []);

  const updatePlaylistName = useCallback((name) => {
    setPlaylistName(name);
  }, []);

  const savePlaylist = useCallback(() => {
    const trackUris = playlistTracks.map((track) => track.uri);
    Spotify.savePlaylist(playlistName, trackUris).then(() => {
      setPlaylistName("New Playlist");
      setPlaylistTracks([]);
    });
  }, [playlistName, playlistTracks]);
  


  return (
    <div className="App">
      <h1>Jammming</h1>
      <header className="App-header">
        <div>
          <SearchBar onSearch={search} />
        </div>
        <div>
          <SearchResults searchResults={searchResults} onAdd={addTrack} />
          <PlayList 
            playlistName={playlistName}
            playlistTracks={playlistTracks}
            onNameChange={updatePlaylistName}
            onRemove={removeTrack}
            onSave={savePlaylist}
          />
        </div>
      </header>
    </div>
  );
};

export default App;
