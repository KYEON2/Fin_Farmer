import './App.css';
import styled from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './component/NavBar';
import SideBar from './component/SideBar'; 
import Home from './pages/Home_.js'
import List from './pages/List_.js'
import Purchase from './pages/Purchase_.js'
import LandAdd from './pages/Landadd_.js'
import Info from './pages/Info_.js'
import ListDetail from './pages/ListDetail.js'
import Map from './pages/Map.js'
import MapDetail from './pages/Map_detail.js'

const Layout = styled.div`
  display: flex;
`;

function App() {
  return (
    <Router>
      <div className="App">
        <NavigationBar /> 
        <Layout>
          <SideBar /> 
          <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/List" element={<List />} />
            <Route path="/Purchase" element={<Purchase />} />
            <Route path="/Landadd" element={<LandAdd />} />
            <Route path="/Info" element={<Info />} />
            <Route path="/Map" element={<Map />} />
            <Route path="/MapDetail" element={<MapDetail />} />
            <Route path="/list/:id" element={<ListDetail />} />
          </Routes>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
