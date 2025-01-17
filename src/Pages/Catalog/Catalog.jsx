import { useEffect, } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router';
import { CircleLoader } from 'react-spinners';
import { getUserInfo } from '../../api/info.js';
import CarCard from '../../components/CarCard/CarCard.jsx';
import { fetchCampers } from '../../Redux/catalog/operations.js';
import { getCampers, getIsLoading } from '../../Redux/catalog/selectors.js';
import { selectFilterCampers } from '../../Redux/fitercampers/selectors.js';
import css from './Catalog.module.css';
import filterCarType from '../../Data/FilterCarType.json';
import filterEquipment from '../../Data/FilterEquipment.json';

export default function Catalog() {
  const dispatch = useDispatch();

  const isLoading = useSelector(getIsLoading);
  const data = useSelector(getCampers);
  const filter = useSelector(selectFilterCampers);

  // useEffect(() => {
  //   const options = {
  //     enableHighAccuracy: false,
  //     timeout: 5000,
  //     maximumAge: 0,
  //   };
  //
  //   async function success(pos) {
  //     var crd = pos.coords;
  //     console.log('Ваше текущее местоположение:');
  //     console.log(`Широта: ${crd.latitude}`);
  //     console.log(`Долгота: ${crd.longitude}`);
  //     console.log(`Плюс-минус ${crd.accuracy} метров.`);
  //     console.log((await getUserInfo(crd)).results[0]);
  //     console.log(crd);
  //   }
  //
  //   function error(err) {
  //     console.warn(`ERROR(${err.code}): ${err.message}`);
  //   }
  //
  //   navigator.geolocation.getCurrentPosition(success, error, options);
  // }, []);

  useEffect(() => {
    dispatch(fetchCampers(updateSearchParams(filter)));
  }, [dispatch, filter]);



  function updateSearchParams(value) {
    const updatedParams = new URLSearchParams();

    const carTypeFilter = filterCarType.filter(
      cartype => cartype.id === value.carTypes
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
    </section>
  );
}
