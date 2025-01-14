import equipments from '../../Data/Equipment.json';
import BadgeEquipment from '../ui/BadgeEquipment/BadgesEquipment.jsx';
import css from './CarCard.module.css';

export default function CarCard({ data }) {
  const { description, name, rating, location, price, gallery } = data;
  return (
    <div className={css.card}>
      <div className={css.imgblock}>
        <img src={gallery[0].thumb} alt="" className={css.img} />
      </div>
      <div className={css.description}>
        <div>
          <h2>{name}</h2>
          <p>{price}</p>
        </div>
        <div>
          <p>{rating}</p>
          <p>{location}</p>
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
      </div>
    </div>
  );
}
