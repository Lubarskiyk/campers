import { NavLink } from 'react-router';
import css from './Home.module.css';
export default function Home() {
  return (
    <section className={css.home}>
      <div className={css.wrap}>
        <div className={css.titleblock}>
          <h1 className={css.title}>Campers of your dreams</h1>
          <p className={css.text}>
            You can find everything you want in our catalog
          </p>
          <NavLink to={'/catalog'} className={css.link}>
            View Now
          </NavLink>
        </div>
      </div>
    </section>
  );
}
