import clsx from 'clsx';

import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';

import { CircleLoader } from 'react-spinners';
import CarCard from '../../components/CarCard/CarCard.jsx';
import { fetchCampers } from '../../Redux/catalog/operations.js';
import { pagination } from '../../Redux/pagination/paginationSlice.js';
import {
  getCampers,
  getIsLoading,
  selectTotalCampers,
} from '../../Redux/catalog/selectors.js';
import { selectFilterCampers } from '../../Redux/fitercampers/selectors.js';
import { selectPagination } from '../../Redux/pagination/selectors.js';
import css from './Catalog.module.css';

export default function Catalog() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilterCampers);
  const totalCampers = useSelector(selectTotalCampers);
  const { page, limit } = useSelector(selectPagination);
  const isLoading = useSelector(getIsLoading);
  const data = useSelector(getCampers);
  const location = useLocation();

  useEffect(() => {
    const fullQuery = `page=${page}&limit=${limit}&${filter.query}`;
    dispatch(fetchCampers(fullQuery));
  }, [dispatch, filter, page]);



  function handlerClickLoadMore() {
    if (page >= totalCampers) {
      return;
    }
    dispatch(pagination(page + 1));
  }

  return (
    <div className={css.catalog}>
      {isLoading && page === 1 ? (
        <div className={css.loader}>
          <CircleLoader color="#5c4848" size={100} speedMultiplier={1} />
          <p>LOADING ....</p>
        </div>
      ) : (
        <ul className={css.list}>
          {data.map(item => (
            <CarCard key={item.id} data={item} />
          ))}
        </ul>
      )}
      <div className={css.pagination}>
        {isLoading ? (
          <p>LOADING ....</p>
        ) : (
          <button className={clsx(css.button)} onClick={handlerClickLoadMore}>
            Load more
          </button>
        )}
      </div>
    </div>
  );
}
