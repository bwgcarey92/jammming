import React from "react";
import styles from './Track.css';

const Track = ({ name, artist, album, onAdd, onRemove }) => {

    return (
        <div className="track">
            <div className="track-info">
                <p className="track-name">{name}</p>
                <p className="track-artist">{artist}</p>
                <p className="track-album">{album}</p>
            </div>
            <button className="add-button" onClick={onAdd}>
                +
            </button>
            <button className="remove-button" onClick={onRemove}>
                -
            </button>
        </div>
    );
};

export default Track;