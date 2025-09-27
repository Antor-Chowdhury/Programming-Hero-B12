export default function ({ album }) {
  //   console.log(album);
  return (
    <div className="card">
      <p>
        <strong>UserdId:</strong> {album.userId}
      </p>
      <p>
        <strong>Title:</strong> {album.title}
      </p>
    </div>
  );
}
