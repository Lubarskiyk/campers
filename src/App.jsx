import './App.css';
import { Route, Routes } from 'react-router';
import Header from './components/Header/Header.jsx';
import Sidebar from './components/Sidebar/Sidebar.jsx';
import CamperDetail from './Pages/CamperDetail/CamperDetail.jsx';
import Catalog from './Pages/Catalog/Catalog.jsx';
import Home from './Pages/Home/Home.jsx';

function App() {
  return (
    <Routes>
      <Route element={<Header />}>
        <Route path="/" element={<Home />} />
        <Route element={<Sidebar />}>
          <Route path="/catalog" element={<Catalog />} />
        </Route>
        <Route path="/camperdetail/:id" element={<CamperDetail />} />
      </Route>
    </Routes>
  );
}

export default App;
