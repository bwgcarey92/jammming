import React, { useCallback } from "react";
import './Track.css';

const Track = (props) => {
   const addTrack = useCallback(
    (e) => {
        props.onAdd(props.track);
    }, 
    [props.onAdd, props.track]
    );

   const removeTrack = useCallback(
    (e) => {
        props.onRemove(props.track);
    },
    [props.onRemove, props.track]
   );

   const showDiff = () => {
    if (props.isRemoval) {
        return (
            <button className="Track-Diff" onClick={removeTrack}>
                -
            </button>
        );
    }
    return (
        <button className="Track-Diff" onClick={addTrack}>
            +
        </button>
    );
   }; 


    return (
        <div className="Track">
            <div className="Track-info">
                <p className="Track-name">{props.track.name}</p>
                <p className="Track-artist">{props.track.artist}</p>
                <p className="Track-album">{props.track.album}</p>
            </div>
            {showDiff()}
        </div>
    );
};

export default Track;