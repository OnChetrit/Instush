import { useSelector } from 'react-redux';

import home from '../../assets/img/nav/home.svg';
import direct from '../../assets/img/nav/direct.svg';
import add from '../../assets/img/nav/add.svg';
import explore from '../../assets/img/nav/explore.svg';
import activity from '../../assets/img/nav/activity.svg';

export const Header = () => {
  const { user } = useSelector((state) => state.userModule);

  return (
    <header className="flex space-between">
      <div className="logo">Logo</div>
      <div className="search-bar">Search</div>
      <div className="nav-btns flex">
        <img src={home} alt="" />
        <img src={direct} alt="" />
        <img src={add} alt="" />
        <img src={explore} alt="" />
        <img src={activity} alt="" />
        <img className="profile" src={user.imgUrl} alt="" />
      </div>
    </header>
  );
};
