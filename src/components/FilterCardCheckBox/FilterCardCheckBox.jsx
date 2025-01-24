import { Field } from 'formik';
import css from './FilerCardCheckBox.module.css';
import sprite from '/icons.svg';

export default function FilterCardCheckBox({ item, name, type, onChange }) {
  const { id, title, icon,databaseid } = item;

  return (
    <>
      <Field
        type={type}
        name={name}
        className={css.input}
        id={name + id}
        value={databaseid}
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
