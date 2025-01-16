import ImageGallery from '../../components/ImageGallery/ImageGallery.jsx';
import CampersTabs from '../../components/Tabs/Tabs.jsx';

import Price from '../../components/ui/Price/Price.jsx';
import RatingAndLocation from '../../components/ui/RatingAndLocation/RatingAndLocation.jsx';
import css from './CamperDetail.module.css';
import data from './tempData.json';

export default function CamperDetail() {
  const { name, rating, reviews, location, price, description } = data;

  return (
    <section className={css.camperdetail}>
      <div className={css.mb28}>
        <h2 className={css.title}>{name}</h2>
        <RatingAndLocation
          rating={rating}
          reviews={reviews}
          location={location}
          className={css.ratingdetal}
        />
        <Price price={price} className={css.mb28}/>
      </div>
      <ImageGallery className={css.mb28}/>
      <p>{description}</p>
      <CampersTabs data={data} />
    </section>
  );
}
