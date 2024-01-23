import React from "react";
import Track from "../Track/Track";
import './TrackList.css'

const TrackList = ({ tracks }) => {
    return (
        <div className="tracklist">
            {tracks.map((track) => (
                <Track
                    key={track.id}
                    name={track.name}
                    artist={track.artist}
                    album={track.album}
                />
            ))}
        </div>
    );
};

export default TrackList;