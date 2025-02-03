import { NavLink, useLocation } from 'react-router';
import Logo from '../ui/Logo/Logo.jsx';
import css from './Header.module.css';

export default function Header() {
  const location = useLocation();
  const handleNavClick = () => {
    if (location.pathname === '/catalog') {window.location.reload();}

  };
  return (
    <header className={css.header}>
      <div className={css.headerwrap}>
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
            onClick={handleNavClick}
          >
            Catalog
          </NavLink>
        </div>
      </div>
    </header>
  );
}
