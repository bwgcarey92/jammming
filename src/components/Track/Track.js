import React from "react";


const Track = ({ name, artist, album, id }) => {

    return (
        <div className="track">
            <div className="track-info">
                <p className="track-name">{name}</p>
                <p className="track-artist">{artist}</p>
                <p className="track-album">{album}</p>
                <p className="track-id">{id}</p>
            </div>
        </div>
    );
};

export default Track;