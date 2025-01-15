import { NavLink } from 'react-router';
import css from './NavLinkButton.module.css';

export default function NavLinkButton() {
return(
  <NavLink
    to={'/catalog'}
    className={css.link}
  >
    Show more
  </NavLink>
)
}
