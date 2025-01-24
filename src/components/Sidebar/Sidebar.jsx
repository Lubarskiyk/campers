import clsx from 'clsx';
import { Field, Form, Formik } from 'formik';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useSearchParams } from 'react-router';
import { filterCampers } from '../../Redux/fitercampers/filterSlice.js';
import { pagination } from '../../Redux/pagination/paginationSlice.js';
import FilterCardRadio from '../FilterCardRadio/FilterCardRadio.jsx';
import Button from '../ui/Button/Button.jsx';
import FilterCardCheckBox from '../FilterCardCheckBox/FilterCardCheckBox.jsx';
import css from './Sidebar.module.css';
import equipments from '../../Data/FilterEquipment.json';
import carTypes from '../../Data/FilterCarType.json';

export default function Sidebar() {
  const initialValues = {
    carTypes: '',
    equipments: [],
  };

  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setSearchParams({});
  }, []);

  function handlerOnChangeCheckBox(e, values, name, setFieldValue) {
    const { checked, value } = e.target;
    const currentValues = values[name];
    let newValues = [];

    if (checked) {
      newValues = [...currentValues, value];
      setSearchParams(state => {
        value === 'transmission'
          ? state.set(value, 'automatic')
          : state.set(value, true);
        return state;
      });
    } else {
      currentValues.filter(item => item !== value);
      setSearchParams(state => {
        state.delete(value);
        return state;
      });
    }
    setFieldValue(name, newValues);
  }

  function handleRadioChange(e, name, setFieldValue) {
    const { value } = e.target;
    setSearchParams(state => {
      state.set('form', value);
      return state;
    });
    setFieldValue(name, value);
  }

  function handlerSubmit() {
    dispatch(pagination(1));
    dispatch(filterCampers(searchParams.toString()));
  }

  return (
    <Formik initialValues={initialValues} onSubmit={handlerSubmit}>
      {({ values, setFieldValue }) => (
        <Form className={css.sidebar}>
          <label htmlFor="location">Location</label>
          <Field type="text" name="location" id="location" />
          <p className={clsx(css.title, css.filter)}>Filters</p>
          <p className={css.filtertitle}>Vehicle equipment</p>
          <span className={css.separator}></span>
          <ul className={clsx(css.list, css.filter)}>
            {equipments.map(item => {
              const name = 'equipments';
              return (
                <li key={item.id}>
                  <FilterCardCheckBox
                    item={item}
                    name={name}
                    type="checkbox"
                    onChange={e =>
                      handlerOnChangeCheckBox(e, values, name, setFieldValue)
                    }
                  />
                </li>
              );
            })}
          </ul>
          <p className={css.filtertitle}>Vehicle type</p>
          <span className={css.separator}></span>
          <ul className={css.list}>
            {carTypes.map(item => {
              const name = 'carTypes';
              return (
                <li key={item.id}>
                  <FilterCardRadio
                    item={item}
                    name={name}
                    type="radio"
                    onChange={e => handleRadioChange(e, name, setFieldValue)}
                  />
                </li>
              );
            })}
          </ul>
          <Button type="submit">Search</Button>
        </Form>
      )}
    </Formik>
  );
}
