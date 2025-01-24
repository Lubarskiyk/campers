import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import ImageGallery from '../../components/ImageGallery/ImageGallery.jsx';
import CampersTabs from '../../components/Tabs/Tabs.jsx';
import Price from '../../components/ui/Price/Price.jsx';
import RatingAndLocation from '../../components/ui/RatingAndLocation/RatingAndLocation.jsx';
import { fetchCampersById } from '../../Redux/campersdetail/operations.js';
import {
  getCampersId,
  getIsLoadingId,
} from '../../Redux/campersdetail/selectors.js';
import css from './CamperDetail.module.css';

export default function CamperDetail() {
  const data = useSelector(getCampersId);
  const isLoading = useSelector(getIsLoadingId);
  const dispatch = useDispatch();
  const param = useParams();

  useEffect(() => {
    dispatch(fetchCampersById(param.id));
  }, [dispatch]);

  return isLoading ? (
    <p>Load...</p>
  ) : (
    <section className={css.camperdetail}>
      <div className={css.mb28}>
        <h2 className={css.title}>{data.name}</h2>
        <RatingAndLocation
          rating={data.rating}
          reviews={data.reviews}
          location={data.location}
          className={css.ratingdetal}
        />
        <Price price={data.price} className={css.mb28} />
      </div>
      <ImageGallery className={css.mb28} data={data.gallery} />
      <p className={css.description}>{data.description}</p>
      <CampersTabs data={data} />
    </section>
  );
}
