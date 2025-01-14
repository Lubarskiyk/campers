import clsx from 'clsx';
import { Outlet } from 'react-router';
import Button from '../ui/Button/Button.jsx';
import FilterCard from '../FilterCard/FilterCard.jsx';
import css from './Sidebar.module.css';
import equipments from '../../Data/FilterEquipment.json';
import carTypes from '../../Data/FilterCarType.json';
export default function Sidebar() {
  return (
    <div className={css.wraper}>
      <div className={css.sidebar}>
          <p className={clsx(css.title, css.location)}>Location</p>
          <input type="text" />
          <p className={clsx(css.title, css.filter)}>Filters</p>
          <p className={css.filtertitle}>Vehicle equipment</p>
          <span className={css.separator}></span>
          <ul className={clsx(css.list, css.filter)}>
            {equipments.map(item => {
              return (
                <li key={item.id}>
                  <FilterCard item={item} name="equipments" type="checkbox" />
                </li>
              );
            })}
          </ul>
          <p className={css.filtertitle}>Vehicle type</p>
          <span className={css.separator}></span>
          <ul className={css.list}>
            {carTypes.map(item => {
              return (
                <li key={item.id}>
                  <FilterCard item={item} name="carTypes" type="radio" />
                </li>
              );
            })}
          </ul>
          <Button>Search</Button>

      </div>
      <Outlet />
    </div>
  );
}
