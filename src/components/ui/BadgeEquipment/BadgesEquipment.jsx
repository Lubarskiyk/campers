import sprite from '/icons.svg';
import css from './BadgesEquipment.module.css';

export default function BadgeEquipment({item}) {
  const { title, icon} = item;
  return (
    <div className={css.badge} >
      <svg className={css.icon}>
        <use href={sprite + icon} />
      </svg>
      <p className={css.title}>{title}</p>
    </div>
  )
    ;
}
