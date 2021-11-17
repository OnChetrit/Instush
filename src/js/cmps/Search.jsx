import { useState } from 'react';
import { useDispatch } from 'react-redux';

export const Search = () => {
  const [search, setSearch] = useState('');

  const dispatch = useDispatch();

  const handleChange = (ev) => {
    ev.preventDefault();
    setSearch(ev.target.value);
    // dispatch(searchByUsername(search));
  };
  return (
    <div className="search-bar">
      <input
        type="text"
        onChange={handleChange}
        placeholder="Search"
        value={search}
      />
    </div>
  );
};
