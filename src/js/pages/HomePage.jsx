import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { PostList } from '../cmps/home/PostList';
import { Stories } from '../cmps/home/Stories';
import { loadPosts } from '../store/actions/post.actions';

export const HomePage = () => {
  const { posts } = useSelector((state) => state.postModule);
  const { user } = useSelector((state) => state.userModule);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    const { pathname } = history.location;
    dispatch({ type: 'SET_PATHNAME', pathname })
    dispatch(loadPosts(user));
  }, []);

  return (
    <div className="home">
      <Stories />
      <PostList posts={posts} />
    </div>
  );
};
