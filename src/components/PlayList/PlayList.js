import React, { useCallback } from "react";

import TrackList from "../TrackList/TrackList";

import './PlayList.css';


const PlayList = (props) => {
    const nameChange = useCallback(
        (e) => {
            props.onNameChange(e.target.value);
        },
        [props.onNameChange]
    );

    return (
        <div className="playlist">
            <h2>
                <input
                    type="text"
                    defaultValue={'New Playlist'}
                    onChange={nameChange}
                />
            </h2>
            <TrackList 
                tracks={props.playlistTracks}
                isRemoval={true}
                onRemove={props.onRemove}
            />
            <button onClick={props.onSave}>Save to Spotify</button>
        </div>
    );
};

export default PlayList;