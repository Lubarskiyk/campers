import './App.css';
import { Route, Routes } from 'react-router';
import Header from './components/header/Header.jsx';
import Sidebar from './components/Sidebar/Sidebar.jsx';
import Catalog from './pages/Catalog/Catalog.jsx';
import Home from './pages/Home/Home.jsx';

function App() {
  return (
    <Routes>
      <Route element={<Header />}>
        <Route path="/" element={<Home />} />
        <Route element={<Sidebar />}>
          <Route path="catalog" element={<Catalog />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
