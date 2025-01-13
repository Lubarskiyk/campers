import { Outlet } from 'react-router';
import Button from '../ui/Button/Button.jsx';
import FilterCard from '../ui/FilterCard/FilterCard.jsx';
import css from './Sidebar.module.css';
import equipments from '../../Data/FilterEquipment.json';
import carTypes from '../../Data/FilterCarType.json';
export default function Sidebar() {
  return (
    <div className={css.wraper}>
      <div className={css.sidebar}>
        <p>Location</p>
        <p>Filters</p>
        <p>Vehicle equipment</p>
        <ul className={css.list}>
          {equipments.map(item => {
            return (
              <li key={item.id}>
                <FilterCard id={item.id} name={equipments} type="checkbox">
                  {item.title}
                </FilterCard>
                {/*<div className={css.item}>*/}
                {/*  <div className={css.icon}>*/}
                {/*    {React.cloneElement(item.icon, { size: size })}*/}
                {/*  </div>*/}
                {/*  {item.text}*/}
                {/*</div>*/}
              </li>
            );
          })}
        </ul>
        <p>Vehicle type</p>
        <ul className={css.list}>
          {carTypes.map(item => {
            return (
              <li key={item.id}>
                <FilterCard id={item.id} name={carTypes} type="radio">
                  {item.title}
                </FilterCard>
                {/*<div className={css.item}>*/}
                {/*  <div className={css.icon}>*/}
                {/*    {React.cloneElement(item.icon, { size: size })}*/}
                {/*  </div>*/}
                {/*  {item.text}*/}
                {/*</div>*/}
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
