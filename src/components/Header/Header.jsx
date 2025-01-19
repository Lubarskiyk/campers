import { NavLink, Outlet } from 'react-router';
import Footer from '../Footer/Footer.jsx';
import Logo from '../ui/Logo/Logo.jsx';
import css from './Header.module.css';

export default function Header() {
  return (
    <div className={css.wraper}>
      <header className={css.header}>
        <div className={css.logo}>
          <Logo />
        </div>
        <div className={css.nav}>
          <NavLink
            to={'/'}
            className={({ isActive }) => (isActive ? css.active : '')}
          >
            Home
          </NavLink>
          <NavLink
            to={'/catalog'}
            className={({ isActive }) => (isActive ? css.active : '')}
          >
            Catalog
          </NavLink>
        </div>
      </header>
      <div className={css.section}>
      <Outlet />
      </div>
      <Footer/>
    </div>
  );
}
