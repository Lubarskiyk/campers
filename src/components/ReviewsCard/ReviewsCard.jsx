import StarRating from '../StarRating/StarRating.jsx';
import css from './ReviewsCard.module.css';

export default function ReviewsCard({ data }) {
  const { reviewer_name, reviewer_rating, comment } = data;
  console.log(data);
  return (
    <div className={css.container}>
      <div className={css.nameblock}>
        <p className={css.avatar}>{reviewer_name[0].toUpperCase()}</p>
        <div>
          <p className={css.name}>{reviewer_name}</p>
          <StarRating count={reviewer_rating} />
        </div>
      </div>
      <p className={css.reviewstext}>{comment}</p>
    </div>
  );
}
