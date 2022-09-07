import React from "react";
import style from "../../sass/AboutPage/SpotifyPlaylist.module.scss";

function SpotifyPlaylist({ src }) {
  return (
    <iframe
      title="angry classical"
      className={style["playlist"]}
      style={{ borderRadius: 12 + "px" }}
      src={src}
      frameBorder="0"
      allowFullScreen=""
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
    ></iframe>
  );
}

export default SpotifyPlaylist;
