
import { Outlet } from 'react-router';
import Sidebar from '../Sidebar/Sidebar.jsx';
import css from './Sidebarlayout.module.css';

export default function SidebarLayout() {
  return (
    <section className={css.section}>
      <Sidebar />

      <Outlet />
    </section>
  );
}
