import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CircleLoader } from 'react-spinners';
import CarCard from '../../components/CarCard/CarCard.jsx';
import { fetchCampers } from '../../Redux/catalog/operations.js';
import { getCampers, getIsLoading } from '../../Redux/catalog/selectors.js';
import { selectFilterCampers } from '../../Redux/fitercampers/selectors.js';
import css from './Catalog.module.css';
import filterCarType from '../../Data/FilterCarType.json';
import filterEquipment from '../../Data/FilterEquipment.json';

export default function Catalog() {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const isLoading = useSelector(getIsLoading);
  const data = useSelector(getCampers);
  const filter = useSelector(selectFilterCampers);
  const perPage = 4;

  const totalPage = data ? Math.ceil(data.total / perPage) : 1;

  function handlerClickNext() {
    if (page === totalPage) {
      return;
    }
    setPage(page + 1);
  }
  function handlerClickPrev() {
    if (page === 1) {
      return;
    }
    setPage(page - 1);
  }

  useEffect(() => {
    dispatch(fetchCampers(updateSearchParams(filter, page)));
  }, [dispatch, filter, page]);

  function updateSearchParams(value, page) {
    console.log(value);
    const updatedParams = new URLSearchParams();
    updatedParams.set('page', page);
    updatedParams.set('limit', perPage);
    const carTypeFilter = filterCarType.filter(
      cartype => cartype.id === "1"
    );
    if (carTypeFilter.length === 1) {
      updatedParams.set('form', carTypeFilter[0].form);
    }
    for (const element of value.equipments) {
      const equipmentFilter = filterEquipment.filter(
        equipment => equipment.id === element
      );

      if (equipmentFilter.length === 1) {
        updatedParams.set(
          equipmentFilter[0].databaseid,
          equipmentFilter[0].data ? equipmentFilter[0].data : true
        );
      }
    }

    return updatedParams.toString();
  }

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
      <div className={css.pagination}>
        <button className={clsx(css.button, page === 1 && css.notactive)} onClick={handlerClickPrev}  >
          Prevision Page
        </button>
        <button
          className={clsx(css.button, page >= totalPage && css.notactive)}
          onClick={handlerClickNext}
        >
          Next Page
        </button>
      </div>
    </section>
  );
}
