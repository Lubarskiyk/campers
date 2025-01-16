import sprite from '/icons.svg';
import clsx from 'clsx';
import css from './RatingAndLocation.module.css';

export default function RatingAndLocation({rating,reviews,location,className}) {
  return (
    <div className={clsx(css.rating, className)}>
      <div className={css.review}>
        <svg className={css.iconstar}>
          <use href={sprite + '#icon-star'} />
        </svg>
        <p>{rating}</p>
        <p>{`(${reviews.length} Reviews)`}</p>
      </div>
      <div className={css.review}>
        <svg className={css.iconloc}>
          <use href={sprite + '#icon-map'} />
        </svg>
        <p>{location}</p>
      </div>
    </div>
  )

}
