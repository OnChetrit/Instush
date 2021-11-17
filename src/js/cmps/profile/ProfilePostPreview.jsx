export const ProfilePostPreview = ({ post }) => {
  return (
    <div className="profile-post-preview">
      <img src={post.uploads[0]} alt="post-preview" />
    </div>
  );
};
