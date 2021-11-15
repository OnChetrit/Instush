import { Switch, Route } from 'react-router';
import { useSelector } from 'react-redux';

import routes from './routes';
import { Login } from './js/pages/Login';
import { Header } from './js/cmps/Header';

function RootCmp() {
  const { user } = useSelector((state) => state.userModule);

  if (!user) {
    return <Login />;
  }

  return (
    <div className="app">
      <Header />
      <Switch>
        {routes.map((route) => (
          <Route
            key={route.path}
            component={route.component}
            path={route.path}
          />
        ))}
      </Switch>
    </div>
  );
}

export default RootCmp;
