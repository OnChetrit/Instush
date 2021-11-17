import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PostList } from '../cmps/home/PostList';
import { Stories } from '../cmps/home/Stories';
import { loadPosts } from '../store/actions/post.actions';

export const HomePage = () => {
  const { posts } = useSelector((state) => state.postModule);
  const { user } = useSelector((state) => state.userModule);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPosts(user));
  }, []);
  return (
    <div className="home">
      <Stories />
      <PostList posts={posts} />
    </div>
  );
};
