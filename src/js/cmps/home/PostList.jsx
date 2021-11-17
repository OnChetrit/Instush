import { PostPreview } from './PostPreview';

export const PostList = ({ posts }) => {
  return (
    <div className="post-list">
      {posts.reverse().map((post) => {
        return <PostPreview post={post} key={post._id} />;
      })}
    </div>
  );
};
