import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ReactTimeAgo from 'react-time-ago';

import { ReactComponent as Liked } from '../../../assets/img/action/liked.svg';
import { ReactComponent as Like } from '../../../assets/img/action/like.svg';
import { ReactComponent as Comment } from '../../../assets/img/action/comment.svg';
import { ReactComponent as Share } from '../../../assets/img/action/share.svg';
import { ReactComponent as Save } from '../../../assets/img/action/save.svg';
import { ReactComponent as Emoji } from '../../../assets/img/action/emoji.svg';
import { addComment, addLike } from '../../store/actions/post.actions';

export const PostPreview = ({ post }) => {
  const [comment, setComment] = useState('');
  const { user } = useSelector((state) => state.userModule);
  const dispatch = useDispatch();

  const handleSubmit = (ev) => {
    ev.preventDefault();
    dispatch(addComment(post, user, comment));
    setComment('');
  };

  const likedPost = () => {
    return post.likes.some((like) => like.username === user.username);
  };

  return (
    <div className="post-preview flex column">
      <div className="post-header flex">
        <img src={post.createdBy.imgUrl} alt="user profile" />
        <div className="post-info">
          <Link to={`/${post.createdBy.username}`}>
            <div className="username-post">{post.createdBy.username}</div>
          </Link>
          <div className="location-post">{post.loc.name}</div>
        </div>
      </div>
      <div className="post-uploads">
        <img src={post.uploads[0]} alt="" />
      </div>
      <div className="post-activities flex space-between">
        <div className="left">
          <button
            className="action"
            onClick={() => {
              dispatch(addLike(post, user));
            }}
          >
            {likedPost() ? <Liked /> : <Like />}
          </button>
          <button className="action">
            <Comment />
          </button>
          <button className="action">
            <Share />
          </button>
        </div>
        <div className="right">
          <button className="action">
            <Save />
          </button>
        </div>
      </div>
      <div className="post-bottom">
        <div className="likes b-txt">{post.likes.length} likes</div>
        <div className="comments">
          <div className="user-txt">
            <span className="b-txt">{post.createdBy.username}</span>
            {post.txt}
          </div>
          <div className="view-all btn">
            View all {post.comments.length} comments
          </div>
        </div>
        <div className="post-time">
          <ReactTimeAgo date={post.createdAt} locale="en-US" timeStyle="" />
        </div>
      </div>
      <div className="post-add-comment">
        <form onSubmit={handleSubmit}>
          <Emoji />
          <textarea
            type="text"
            placeholder="Add a comment..."
            value={comment}
            onChange={(ev) => setComment(ev.target.value)}
          />
          <button type="submit">Post</button>
        </form>
      </div>
    </div>
  );
};
