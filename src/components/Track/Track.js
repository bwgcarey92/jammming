import React from "react";
import styles from './Track.css';

const Track = ({ name, artist, album, id }) => {

    return (
        <div className="track">
            <div className="track-info">
                <p className="track-name">{name}</p>
                <p className="track-artist">{artist}</p>
                <p className="track-album">{album}</p>
            </div>
        </div>
    );
};

export default Track;