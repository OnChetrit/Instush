export const UserFollow = ({ profile }) => {
  return (
    <div className="follow-container flex">
      <div className="posts">
        <span className="b-txt">
          {profile?.postsIds.length.toLocaleString()}
        </span>
        posts
      </div>
      <div className="followers">
        <span className="b-txt">
          {profile?.followers.length.toLocaleString()}
        </span>
        followers
      </div>
      <div className="following">
        <span className="b-txt">
          {profile?.following.length.toLocaleString()}
        </span>
        following
      </div>
    </div>
  );
};
