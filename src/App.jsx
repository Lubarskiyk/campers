import './App.css';
import { StrictMode } from 'react';
import { Route, Routes } from 'react-router';
import RootLayout from './components/RootLauot/RootLayout.jsx';
import SidebarLayout from './components/SidebarLayout/SidebarLayout.jsx';
import CamperDetail from './Pages/CamperDetail/CamperDetail.jsx';
import Catalog from './Pages/Catalog/Catalog.jsx';
import Home from './Pages/Home/Home.jsx';

function App() {
  return (
    <StrictMode>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route element={<SidebarLayout />}>
            <Route path="/catalog" element={<Catalog />} />
          </Route>
          <Route path="/camperdetail/:id" element={<CamperDetail />} />
        </Route>
      </Routes>
    </StrictMode>
  );
}

export default App;
