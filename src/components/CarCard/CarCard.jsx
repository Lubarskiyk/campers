import equipments from '../../Data/Equipment.json';
import Favorites from '../Favorite/Favorites.jsx';
import BadgeEquipment from '../ui/BadgeEquipment/BadgesEquipment.jsx';
import NavLinkButton from '../ui/NavLinkButton/NavLinkButton.jsx';
import Price from '../ui/Price/Price.jsx';
import RatingAndLocation from '../ui/RatingAndLocation/RatingAndLocation.jsx';
import css from './CarCard.module.css';


export default function CarCard({ data }) {
  const { description, name, rating, location, price, gallery, reviews, id } =
    data;
  return (
    <div className={css.card}>
      <div className={css.imgblock}>
        <img src={gallery[0].thumb} alt="" className={css.img} />
      </div>
      <div className={css.description}>
        <div className={css.name}>
          <h2 className={css.nametitle}>{name}</h2>
          <div className={css.price_fav}>
            <Price price={price} />
                  <Favorites id={id} />
          </div>
        </div>
        <RatingAndLocation
          rating={rating}
          reviews={reviews}
          location={location}
          className={css.rat}
        />
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
        <NavLinkButton />
      </div>
    </div>
  );
}
