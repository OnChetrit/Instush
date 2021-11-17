import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ReactComponent as Home } from '../../assets/img/nav/home.svg';
import { ReactComponent as Direct } from '../../assets/img/nav/direct.svg';
import { ReactComponent as Add } from '../../assets/img/nav/add.svg';
import { ReactComponent as Explore } from '../../assets/img/nav/explore.svg';
import { ReactComponent as Activity } from '../../assets/img/nav/activity.svg';
import { Search } from './Search';

export const Header = () => {
  const { user } = useSelector((state) => state.userModule);

  return (
    <header>
      <div className="main-container flex space-between align-center">
        <div className="logo">Logo</div>
        <div className="search-bar">
          <Search />
        </div>
        <div className="nav-btns flex align-center">
          <Link to={'/'}>
            <Home />
          </Link>
          <Direct />
          <Add />
          <Explore />
          <Activity />
          <Link to={`/${user.username}`}>
            <img className="profile" src={user.imgUrl} alt="user-profile" />
          </Link>
        </div>
      </div>
    </header>
  );
};
