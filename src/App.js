import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import TrackList from './components/TrackList/TrackList';






function App() {

  const searchResults = [
    {id: 1, name: 'Track 1', artist: 'Artist 1', album: 'Album 1'},
    {id: 2, name: 'Track 2', artist: 'Artist 2', album: 'Album 2'},
  ];


  return (
    <div className="App">
      <h1>Jammming</h1>
      <header className="App-header">
        <SearchBar />
        <TrackList tracks={searchResults} />
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
