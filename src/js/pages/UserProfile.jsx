import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUserByUsername } from "../store/actions/user.actions";


export const UserProfile = () => {
  const params = useParams()
  const [user, setUser] = useState(null)
  useEffect(async () => {
    const user = await getUserByUsername(params.username);
    setUser(user)
  }, {});
  if(!user) return <div>loading</div>
  return <div className="user-profile">
    <div className="user-details">
      <img src={user.imgUrl} alt=""/>
      <h1>{user.username}</h1>
    </div>
    <div className="user-highlights"></div>
    <div className="user-links"></div>
    <div className="user-uploads"></div>
  </div>;
};
