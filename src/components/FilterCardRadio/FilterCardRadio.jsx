import { Field } from 'formik';
import css from './FilerCardRadio.module.css';
import sprite from '/icons.svg';

export default function FilterCardRadio({ item, name, type, onChange }) {
  const { id, title, icon, form } = item;

  return (
    <>
      <Field
        type={type}
        name={name}
        className={css.input}
        id={name + id}
        value={form}
        onChange={onChange}
      />
      <label className={css.filtercard} htmlFor={name + id}>
        <svg className={css.icon}>
          <use href={sprite + icon} />
        </svg>
        <p className={css.title}>{title}</p>
      </label>
    </>
  );
}
