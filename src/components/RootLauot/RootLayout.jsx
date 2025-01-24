import { Outlet } from 'react-router';
import Footer from '../Footer/Footer.jsx';
import Header from '../Header/Header.jsx';
import css from './RootLayout.module.css';

export default function RootLayout() {
  return (
    <div className={css.container}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
