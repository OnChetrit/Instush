import { PostList } from '../cmps/home/PostList';
import { Stories } from '../cmps/Stories';

export const HomePage = () => {
  return (
    <div className="home">
      <Stories />
      <PostList />
    </div>
  );
};
