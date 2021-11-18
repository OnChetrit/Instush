import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import { toggleFollow, getUserByUsername } from '../store/actions/user.actions';
import { loadPosts } from '../store/actions/post.actions';

import { UserFollow } from '../cmps/profile/UserFollow';
import { ProfilePostPreview } from '../cmps/profile/ProfilePostPreview';

export const UserProfile = () => {
  const { user } = useSelector((state) => state.userModule);
  const { posts } = useSelector((state) => state.postModule);
  const [isFollowing, setIsFollowing] = useState(false)
  const history = useHistory();
  const params = useParams();
  const [profile, setProfile] = useState(null);
  const dispatch = useDispatch();

  useEffect(async () => {
    const { pathname } = history.location;
    dispatch({ type: 'SET_PATHNAME', pathname })
    const userProfile = await getUserByUsername(params.username);
    setProfile(userProfile);
    checkIfFollow(userProfile)
  }, [params.username]);

  useEffect(() => {
    dispatch(loadPosts(user, params.username));
  }, []);

  const isUserProfile = () => {
    return profile?.username === user.username;
  };
  const checkIfFollow = (profile) => {
    user.following.forEach(follower => {
      if (follower.username === profile.username) {
        return setIsFollowing(true)
     }
    });
  }

  const onToggleFollow = () => {
    dispatch(toggleFollow(user, profile, isFollowing))
    setIsFollowing(!isFollowing)
  }
  return (
    <div className="user-profile flex column main-container">
      <div className="user-details flex">
        {<img src={profile?.imgUrl} alt="user-profile" /> || (
          <Skeleton circle={true} />
        )}
        <div className="details">
          <div className="header-details">
            {<h2>{profile?.username}</h2> || <Skeleton />}
            {isUserProfile() ? (
              <div className="edit">
                <button>Edit profile</button>
              </div>
            ) : (
              <div className="follow">
                  <button onClick={() => onToggleFollow()}>{isFollowing ? 'unfollow' : 'follow'}</button>
                </div>
            )}
          </div>
          {(
            <div className="follow-details">
              <UserFollow profile={profile} />
            </div>
          ) || <Skeleton />}
          {(
            <div className="bio">
              <span className="b-txt">{profile?.fullname}</span>
              <div>{profile?.bio}</div>
            </div>
          ) || <Skeleton count={2} />}
        </div>
      </div>
      <div className="user-highlights"></div>
      <div className="user-links"></div>
      <div className="user-uploads">
        {posts.map((post) => {
          return <ProfilePostPreview post={post} key={post._id} />;
        })}
      </div>
    </div>
  );
};
