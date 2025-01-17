import { Field } from 'formik';
import css from './FilerCard.module.css';
import sprite from '/icons.svg';

export default function FilterCard({ item, name, type }) {
  const { id, title, icon } = item;

  return (
    <>
      <Field type={type} name={name} className={css.input} id={name + id} value={id} />
      <label className={css.filtercard} htmlFor={name + id} >
        <svg className={css.icon}>
          <use href={sprite + icon} />
        </svg>
        <p className={css.title}>{title}</p>
      </label>
    </>
  );
}
