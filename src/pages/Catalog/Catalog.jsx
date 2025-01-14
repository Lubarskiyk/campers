import CarCard from '../../components/CarCard/CarCard.jsx';

import css from './Catalog.module.css';
import testData from './tempData.json';
export default function Catalog() {
  return (
    <section className={css.catalog}>
      <ul className={css.list}>
        {testData.items.map(item => {
                 return (
              <li key={item.id}>
                <CarCard data={item}/>
              </li>
            );
        })}
      </ul>



    </section>
  );
}
