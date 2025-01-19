import { NavLink } from 'react-router';
import css from './NavLinkButton.module.css';

export default function NavLinkButton({path}) {
return(
  <NavLink
    to={path}
    className={css.link}
    target="_blank"
  >
    Show more
  </NavLink>
)
}
