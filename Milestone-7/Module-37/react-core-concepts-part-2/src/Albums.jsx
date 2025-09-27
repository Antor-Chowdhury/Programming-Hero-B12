import { use } from "react";

import Album from "./Album";

export default function Albums({ albumsPromise }) {
  const albums = use(albumsPromise);
  //   console.log(albumsPromise);
  return (
    <div className="card">
      <h3>Albums: {albums.length}</h3>
      {albums.map((album) => (
        <Album key={album.id} album={album}></Album>
      ))}
    </div>
  );
}
