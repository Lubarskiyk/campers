import equipments from '../../Data/Equipment.json';
import Favorites from '../Favorite/Favorites.jsx';
import BadgeEquipment from '../ui/BadgeEquipment/BadgesEquipment.jsx';
import NavLinkButton from '../ui/NavLinkButton/NavLinkButton.jsx';
import css from './CarCard.module.css';
import sprite from '/icons.svg';

export default function CarCard({ data }) {
  const { description, name, rating, location, price, gallery, reviews,id } = data;
  return (
    <div className={css.card}>
      <div className={css.imgblock}>
        <img src={gallery[0].thumb} alt="" className={css.img} />
      </div>
      <div className={css.description}>
        <div className={css.name}>
          <h2 className={css.nametitle}>{name}</h2>
          <div className={css.prrise_fav}>
            <p>
              {new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'EUR',
              })
                .format(price)
                .replace(/,/g, ' ')}
            </p>
            <Favorites id={id}/>
          </div>
        </div>
        <div className={css.rating}>
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
        <p className={css.descripttext}>{description}</p>
        <ul className={css.list}>
          {equipments.map(item => {
            if (item.id === 'transmission' || item.id === 'engine')
              item.title = data[item.id];
            if (data[item.id])
              return (
                <li key={item.id}>
                  <BadgeEquipment item={item} />
                </li>
              );
          })}
        </ul>
        <NavLinkButton/>

      </div>
    </div>
  );
}
