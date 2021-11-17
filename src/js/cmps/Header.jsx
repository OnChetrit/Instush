import { useSelector } from 'react-redux';
import { Link} from 'react-router-dom';
import { ReactComponent as Home } from '../../assets/img/nav/home.svg';
import { ReactComponent as Direct } from '../../assets/img/nav/direct.svg';
import { ReactComponent as Add } from '../../assets/img/nav/add.svg';
import { ReactComponent as Explore } from '../../assets/img/nav/explore.svg';
import { ReactComponent as Activity } from '../../assets/img/nav/activity.svg';
import { ReactComponent as HomeActive } from '../../assets/img/nav/actives/home-active.svg';
import { ReactComponent as DirectActive } from '../../assets/img/nav/actives/direct-active.svg';
import { ReactComponent as ExploreActive } from '../../assets/img/nav/actives/explore-active.svg';
import { ReactComponent as ActivityActive } from '../../assets/img/nav/actives/activity-active.svg';
import { Search } from './Search';

export const Header = () => {
  const { user } = useSelector((state) => state.userModule);
  const { pathname } = useSelector((state) => state.postModule);

  return (
    <header>
      <div className="header-div main-container flex space-between align-center">
        <h1 className="logo">Instush</h1>
        <Search />
        <div className="nav-btns flex align-center justify-end">
          <Link to={'/'}>{pathname === '/' ? <HomeActive /> : <Home />}</Link>
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
