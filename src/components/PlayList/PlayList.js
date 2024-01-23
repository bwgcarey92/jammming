import React, { useState } from "react";
import TrackList from "../TrackList/TrackList";


const PlayList = ({ defaultTitle, defaultTracks }) => {
    const [playListTitle, setPlayListTitle] = useState(defaultTitle);
    const [playListTracks, setPlayListTracks] = useState(defaultTracks);

    const addTrack = (track) => {
        const trackExists = playListTracks.some((existingTrack) => existingTrack.id === track.id);

        if(!trackExists) {
            setPlayListTracks((prevTracks) => [...prevTracks, track]);
        }
    };

    const removeTrack = (track) => {
        const updatedTracks = playListTracks.filter((t) => t.id !== track.id);
        setPlayListTracks(updatedTracks);
    };

    return (
        <div className="playlist">
            <h2>
                <input
                    type="text"
                    value={playListTitle}
                    onChange={(e) => setPlayListTitle(e.target.value)}
                />
            </h2>
            <TrackList tracks={defaultTracks} onAdd={addTrack} onRemove={removeTrack} />
            {}
            <TrackList tracks={playListTracks} onRemove={removeTrack} />
        </div>
    );
};

export default PlayList;