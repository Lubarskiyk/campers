import { createSlice } from '@reduxjs/toolkit';
import clsx from 'clsx';
import { Field, Form, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router';
import { filterCampers } from '../../Redux/fitercampers/filterSlice.js';
import { selectFilterCampers } from '../../Redux/fitercampers/selectors.js';
import Button from '../ui/Button/Button.jsx';
import FilterCard from '../FilterCard/FilterCard.jsx';
import css from './Sidebar.module.css';
import equipments from '../../Data/FilterEquipment.json';
import carTypes from '../../Data/FilterCarType.json';
export default function Sidebar() {
  const initialFilters = useSelector(selectFilterCampers);
  const dispatch = useDispatch();

  function handlerSubmit(values) {
    dispatch(filterCampers(values));
  }

  return (
    <div className={css.wraper}>
      <Formik initialValues={initialFilters} onSubmit={handlerSubmit}>
        <Form className={css.sidebar}>
          <p className={clsx(css.title, css.location)}>Location</p>
          <Field type="text" />
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
          <Button type="submit">Search</Button>
        </Form>
      </Formik>
      <Outlet />
    </div>
  );
}
