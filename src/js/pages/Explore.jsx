import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

export const Explore = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    const { pathname } = history.location;
    dispatch({ type: 'SET_PATHNAME', pathname });
  }, []);

  return <div className="">explore</div>;
};
