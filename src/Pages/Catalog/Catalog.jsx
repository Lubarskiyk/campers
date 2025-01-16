import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CircleLoader } from 'react-spinners';
import CarCard from '../../components/CarCard/CarCard.jsx';
import { fetchCampers } from '../../Redux/catalog/operations.js';
import { getCampers, getIsLoading } from '../../Redux/catalog/selectors.js';
import css from './Catalog.module.css';

export default function Catalog() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  const isLoading = useSelector(getIsLoading);
  const data = useSelector(getCampers);

  return (
    <section className={css.catalog}>
      {isLoading ? (
        <div className={css.loader}>
          <CircleLoader
            className={css.loader}
            color="#5c4848"
            size={100}
            speedMultiplier={1}
          />
          <p>LOADING ....</p>
        </div>
      ) : (
        <ul className={css.list}>
          {data.items.map(item => {
            return (
              <li key={item.id}>
                <CarCard data={item} />
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}
