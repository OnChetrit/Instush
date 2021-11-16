import { ReactComponent as Like } from '../../../assets/img/action/like.svg';
import { ReactComponent as Comment } from '../../../assets/img/action/comment.svg';
import { ReactComponent as Share } from '../../../assets/img/action/share.svg';
import { ReactComponent as Save } from '../../../assets/img/action/save.svg';

export const PostPreview = ({ post }) => {
  return (
    <div className="post-preview flex column">
      <div className="post-header flex">
        <img src={post.createdBy.imgUrl} alt="user profile" />
        <div className="">
          <div className="username-post">{post.createdBy.username}</div>
          <div className="location-post">{post.loc.name}</div>
        </div>
      </div>
      <div className="post-uploads">
        <img src={post.uploads[0]} alt="" />
        {post.txt}
      </div>
      <div className="post-activities flex">
        <button className="action">
          <Like />
        </button>
        <button className="action">
          <Comment />
        </button>
        <button className="action">
          <Share />
        </button>
        <button className="action">
          <Save />
        </button>
      </div>
      <div className="post-comments"></div>
    </div>
  );
};
