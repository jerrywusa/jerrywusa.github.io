import React from "react";
import SpotifyPlaylist from "./SpotifyPlaylist";

function SpotifyPlaylists({ playlists }) {
    return (
        <>
            {playlists.map(({ title, src, uid }) => (
                <SpotifyPlaylist src={src} key={uid} />
            ))}
        </>
    );
}

export default SpotifyPlaylists;
