import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getUserByUsername } from '../store/actions/user.actions';

export const UserProfile = () => {
  const { user } = useSelector((state) => state.userModule);

  const params = useParams();
  const [profile, setProfile] = useState(null);

  useEffect(async () => {
    const userProfile = await getUserByUsername(params.username);
    setProfile(userProfile);
  }, {});

  const isUserProfile = () => {
    return profile.username === user.username;
  };

  if (!profile) return <div>loading</div>;

  return (
    <div className="user-profile flex column main-container">
      <div className="user-details flex">
        <img src={profile.imgUrl} alt="user-profile" />
        <div className="details">
          <div className="header-details">
            <h2>{profile.username}</h2>
            {isUserProfile() ? (
              <div className="edit">
                <button>Edit profile</button>
              </div>
            ) : (
              <div className="follow">Follow</div>
            )}
          </div>
        </div>
      </div>
      <div className="user-highlights"></div>
      <div className="user-links"></div>
      <div className="user-uploads"></div>
    </div>
  );
};
