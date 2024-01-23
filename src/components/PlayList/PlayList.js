import React, { useState } from "react";
import TrackList from "../TrackList/TrackList";


const PlayList = ({ defaultTitle, defaultTracks }) => {
    const [playlistTitle, setPlayListTitle] = useState(defaultTitle);
    const [playListTracks, setPlayListTracks] = useState(defaultTracks);

    return (
        <div className="playlist">
            <h2>
                <input
                    type="text"
                    value={playlistTitle}
                    onChange={(e) => setPlayListTitle(e.target.value)}
                />
            </h2>
            <TrackList tracks={playListTracks} />
        </div>
    );
};

export default PlayList;