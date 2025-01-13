import css from './FilerCard.module.css';

export default function FilterCard(props) {
  // eslint-disable-next-line react/prop-types
  const { children, id, name, type } = props;
  return (
    <>
      <input type={type} name={name} className={css.input} id={name + id} />
      <label className={css.filtercard} htmlFor={name + id}>
        {children}
      </label>
    </>
  );
}
