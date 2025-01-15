import sprite from '/icons.svg';
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorites } from '../../Redux/favorites/favoritesSlice.js';
import { selectFavorites } from '../../Redux/favorites/selectors.js';

import css from './Favorites.module.css';

export default function Favorites({ id }) {
  const dispatch = useDispatch();
  const handlerOnClick = event => {
    dispatch(toggleFavorites(event.currentTarget.id));
  };
  const favorites = useSelector(selectFavorites);

  return (
    <>
      <button onClick={handlerOnClick} id={id}>
        <svg className={clsx(css.icon, favorites[id] && css.activ)}>
          <use href={sprite + '#icon-heart'} />
        </svg>
      </button>
    </>
  );
}
