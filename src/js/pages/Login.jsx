import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../store/actions/user.actions';

export const Login = () => {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const dispatch = useDispatch();

  const handleSubmit = (ev) => {
    ev.preventDefault();
    dispatch(loginUser({ username, password }));
  };

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input type="text" onChange={(ev) => setUserName(ev.target.value)} />
        </label>
        <label>
          <p>Password</p>
          <input
            type="password"
            onChange={(ev) => setPassword(ev.target.value)}
          />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};
