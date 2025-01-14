import css from './FilerCard.module.css';
import sprite from '/icons.svg';

export default function FilterCard({ item, name, type }) {
  const { id, title, icon } = item;

  return (
    <>
      <input type={type} name={name} className={css.input} id={name + id} />
      <label className={css.filtercard} htmlFor={name + id}>
        <svg className={css.icon}>
          <use href={sprite + icon} />
        </svg>
        <p className={css.title}>{title}</p>
      </label>
    </>
  );
}
