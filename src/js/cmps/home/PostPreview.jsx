export const PostPreview = ({ post }) => {
  return (
    <div className="post-preview">
      <div className="post-header">
        <img src={post.createdBy.imgUrl} alt="user profile" />
        <div className="">
          <div className="username-post">{post.createdBy.username}</div>
          <div className="location-post">{post.loc.name}</div>
        </div>
      </div>
      <img src={post.uploads[0]} alt="" />
      {post.txt}
    </div>
  );
};
