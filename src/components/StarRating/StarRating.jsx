import sprite from '/icons.svg';
import clsx from 'clsx';

import css from './StarRating.module.css';

export default function StarRating({ count }) {
  const starscolor = [];
  for (let i = 0; i < 5; i++) {
    i < count ? starscolor.push(true) : starscolor.push(false);
  }
  console.log(starscolor);
  return (
    <div className={css.starrating}>
      {starscolor.map((star,index) => {
        return(
          <svg key={index} className={clsx(css.icon, star && css.star)}>
            <use href={sprite + '#icon-star'} />
          </svg>
        )
      })}
    </div>
  );
}
