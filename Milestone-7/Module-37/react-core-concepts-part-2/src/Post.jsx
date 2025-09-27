export default function Post({ post }) {
  console.log(post);
  return (
    <div className="card">
      <p>
        <strong>UserId:</strong> {post.userId}
      </p>
      <p>
        <strong>Title:</strong> {post.title}
      </p>
      <p>
        <strong>Content:</strong> {post.body}
      </p>
    </div>
  );
}
